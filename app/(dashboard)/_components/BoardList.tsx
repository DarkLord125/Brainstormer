"use client";

import { useQuery } from "convex/react";
import { EmptyBoard } from "./EmptyBoard";
import { EmptyFav } from "./EmptyFav";
import { EmptySearch } from "./EmptySearch";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card/BoardCard";
import { NewBoardButton } from "./board-card/NewBoardButton";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.getBoards, { orgId });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favourites ? "Favourites Baords" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pb-10 mt-8">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favourites) {
    return <EmptyFav />;
  }

  if (!data.length) {
    return <EmptyBoard />;
  }
  return (
    <div>
      <h2 className="text-3xl">
        {query.favourites ? "Favourites Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pb-10 mt-8">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => {
          return (
            <BoardCard
              key={board._id}
              id={board._id}
              title={board.title}
              imageUrl={board.imageUrl}
              createdAt={board._creationTime}
              authorName={board.authorName}
              authorId={board.authorId}
              orgId={board.orgId}
              isFavourite={false}
            />
          );
        })}
      </div>
    </div>
  );
};
