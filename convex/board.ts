import { mutation } from "./_generated/server";
import { v } from "convex/values";

const images = [
  "/placeholder/image1.svg",
  "/placeholder/image2.svg",
  "/placeholder/image3.svg",
  "/placeholder/image4.svg",
  "/placeholder/image5.svg",
  "/placeholder/image6.svg",
  "/placeholder/image7.svg",
  "/placeholder/image8.svg",
  "/placeholder/image9.svg",
  "/placeholder/image10.svg",
];

export const createBoard = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board
  },
});
