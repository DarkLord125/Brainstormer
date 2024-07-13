"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            sideOffset={18}
            align="start"
          >
            <button className="bg-white/25 p-1 rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent max-w-[440px]">
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
