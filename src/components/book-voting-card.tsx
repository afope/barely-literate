"use client";

import { useState } from "react";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";

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
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
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
          >
            {hasVoted ? "Voted" : "Vote"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
