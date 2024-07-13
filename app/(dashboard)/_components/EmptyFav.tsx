import Image from "next/image";

export const EmptyFav = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image
        src="/empty-states/empty-favourite.svg"
        alt="empty favourite"
        height={140}
        width={140}
      />
      <h2 className="text-xl font-semibold mt-6">No favourites found!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Try searching for something else.
      </p>
    </div>
  );
};
