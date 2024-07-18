"use client";

import Link from "next/link";
import Image from "next/image";
import { Overlay } from "./Overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { Footer } from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  key: string;
  id: string;
  title: string;
  imageUrl: string;
  createdAt: number;
  authorName: string;
  authorId: string;
  isFavourite: boolean;
  orgId: string;
}
export const BoardCard = ({
  key,
  id,
  title,
  imageUrl,
  createdAt,
  authorId,
  authorName,
  orgId,
  isFavourite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = authorId === userId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });
  return (
    <Link href={`board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="flex-1 relative bg-primary/20">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavourite={isFavourite}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
