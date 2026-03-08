import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createArticle = mutation({
    args: {
        title: v.string(),
        slug: v.string(),
        tag: v.string(),
        date: v.string(),
        author: v.string(),
        image: v.string(),
        content: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("articles", args);
    },
});
