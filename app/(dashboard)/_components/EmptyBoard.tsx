import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/api-mutation.hooks";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { toast } from "sonner";

export const EmptyBoard = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.createBoard);
  const handleClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled",
      orgId: organization.id!,
    })
      .then((id) => {
        toast.success("Board created successfully");
      })
      .catch(() => toast.error("Failed to create board"));
  };
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
        <Button size="lg" onClick={handleClick} disabled={pending}>
          Create Board
        </Button>
      </div>
    </div>
  );
};
