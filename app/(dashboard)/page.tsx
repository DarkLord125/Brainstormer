"use client";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/EmptyOrg";
import { BoardList } from "./_components/BoardList";

interface DashboardProps {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}
export default function DashboardPage({ searchParams }: DashboardProps) {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 p-6 h-[calc(100%-80px)]">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
