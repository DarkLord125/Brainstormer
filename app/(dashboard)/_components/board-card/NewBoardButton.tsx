"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/api-mutation.hooks";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.createBoard);

  const handleClick = () => {
    mutate({
      orgId: orgId,
      title: "Untitled",
    })
      .then(() => toast.success("Created Board Successfully!"))
      .catch(() => toast.error("Couldn't create board!"));
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={handleClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-primary rounded-lg hover:bg-primary/30 flex flex-col cursor-pointer items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-primary cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-xs text-white font-light">New Board</p>
    </button>
  );
};
