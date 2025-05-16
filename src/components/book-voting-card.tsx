"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BookVotingCardProps {
  title: string;
  author: string;
  description: string;
  votes: number;
  coverUrl: string;
}

export function BookVotingCard({
  title,
  author,
  description,
  votes: initialVotes,
  coverUrl,
}: BookVotingCardProps) {
  const { user } = useAuth();
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function checkUserVote() {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("book_votes")
          .select("id")
          .eq("user_id", user.id)
          .eq("book_title", title)
          .single();

        if (error && error.code !== "PGRST116") {
          throw error;
        }

        setHasVoted(!!data);
      } catch (error) {
        console.error("Error checking vote:", error);
      }
    }

    checkUserVote();
  }, [user, title]);

  const handleVote = async () => {
    if (!user) {
      toast.error("Please sign in to vote");
      return;
    }

    setIsLoading(true);

    try {
      if (!hasVoted) {
        // Add vote
        const { error } = await supabase.from("book_votes").insert({
          user_id: user.id,
          book_title: title,
          book_author: author,
        });

        if (error) throw error;

        setVotes(votes + 1);
        setHasVoted(true);
        toast.success("Vote recorded!");
      } else {
        // Remove vote
        const { error } = await supabase
          .from("book_votes")
          .delete()
          .eq("user_id", user.id)
          .eq("book_title", title);

        if (error) throw error;

        setVotes(votes - 1);
        setHasVoted(false);
        toast.success("Vote removed");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted">
        <Image
          src={coverUrl || "/placeholder.svg"}
          alt={`Cover of ${title} by ${author}`}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
        <p className="mt-2 text-sm line-clamp-3">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ThumbsUp
              className={`h-4 w-4 ${
                hasVoted ? "fill-primary text-primary" : "text-muted-foreground"
              }`}
            />
            <span className="text-sm font-medium">{votes} votes</span>
          </div>
          <Button
            variant={hasVoted ? "default" : "outline"}
            size="sm"
            onClick={handleVote}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : hasVoted ? (
              "Voted"
            ) : (
              "Vote"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
