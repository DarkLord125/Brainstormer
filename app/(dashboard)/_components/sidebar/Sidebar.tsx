import { List } from "./List";
import { NewButton } from "./NewButton";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 z-[1] h-full p-3 text-white flex flex-col bg-blue-950 w-[60px] gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};
