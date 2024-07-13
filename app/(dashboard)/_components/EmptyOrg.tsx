import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image
        src="/empty-states/empty-org.svg"
        alt="empty org"
        height={200}
        width={200}
      />
      <h2 className="text-xl font-semibold mt-6">Welcome to Brainstormer</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent max-w-[440px] border-none">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
