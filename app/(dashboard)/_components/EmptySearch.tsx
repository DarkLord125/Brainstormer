import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image
        src="/empty-states/empty-search.svg"
        alt="empty search"
        height={200}
        width={200}
      />
      <h2 className="text-xl font-semibold mt-6">No results found!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Try searching for something else.
      </p>
    </div>
  );
};
