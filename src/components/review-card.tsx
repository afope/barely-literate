import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
  bookTitle: string;
  bookAuthor: string;
  reviewerName: string;
  rating: number;
  review: string;
  avatarUrl: string;
  bookCoverUrl: string;
}

export function ReviewCard({
  bookTitle,
  bookAuthor,
  reviewerName,
  rating,
  review,
  avatarUrl,
  bookCoverUrl,
}: ReviewCardProps) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="h-4 w-4 fill-primary text-primary" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="h-4 w-4 fill-primary text-primary"
        />
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="flex gap-4 p-6">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatarUrl || "/placeholder.svg"}
            alt={reviewerName}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{reviewerName}</h3>
          <div className="mt-1">{renderStars()}</div>
        </div>
      </div>
      <div className="relative h-40 w-full overflow-hidden bg-muted">
        <Image
          src={bookCoverUrl || "/placeholder.svg"}
          alt={`Cover of ${bookTitle}`}
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center">
            <h4 className="font-serif text-lg font-bold">{bookTitle}</h4>
            <p className="text-sm text-muted-foreground">by {bookAuthor}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-sm italic">"{review}"</p>
      </CardContent>
    </Card>
  );
}
