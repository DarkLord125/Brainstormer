import { ReactNode } from "react";
import { OrgSidebar } from "./_components/OrgSidebar";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full">
      <Sidebar />{" "}
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
