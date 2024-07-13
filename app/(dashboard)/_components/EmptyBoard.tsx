import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoard = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image
        src="/empty-states/empty-board.svg"
        alt="empty board"
        height={200}
        width={200}
      />
      <h2 className="text-xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
};
