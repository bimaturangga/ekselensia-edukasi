import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all articles (for "Semua Artikel" page)
export const getAll = query({
    args: {},
    handler: async (ctx) => {
        // Return articles ordered by creation time (newest first)
        return await ctx.db.query("articles").order("desc").collect();
    },
});

// Get latest articles with a specific limit (for "Blog" section in Home)
export const getLatest = query({
    args: { limit: v.number() },
    handler: async (ctx, args) => {
        return await ctx.db.query("articles").order("desc").take(args.limit);
    },
});

// Get a single article by its slug (for "Artikel Detail" page)
export const getBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("articles")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();
    },
});

// Helper function to check session validity
async function checkSession(ctx: any, token: string) {
    if (!token) throw new Error("Unauthorized");
    const session = await ctx.db
        .query("sessions")
        .withIndex("by_token", (q: any) => q.eq("token", token))
        .first();
    if (!session || Date.now() > session.expiresAt) {
        throw new Error("Unauthorized");
    }
}

// Create a new article from the Admin Dashboard
export const createArticle = mutation({
    args: {
        token: v.string(),
        title: v.string(),
        slug: v.string(),
        tag: v.string(),
        date: v.string(),
        author: v.string(),
        image: v.string(),
        content: v.string(),
    },
    handler: async (ctx, args) => {
        await checkSession(ctx, args.token);
        const { token, ...articleData } = args;
        return await ctx.db.insert("articles", { ...articleData, views: 0 });
    },
});

// Update an existing article
export const updateArticle = mutation({
    args: {
        token: v.string(),
        id: v.id("articles"),
        title: v.string(),
        slug: v.string(),
        tag: v.string(),
        date: v.string(),
        author: v.string(),
        image: v.string(),
        content: v.string(),
    },
    handler: async (ctx, args) => {
        await checkSession(ctx, args.token);
        const { id, token, ...rest } = args;
        return await ctx.db.patch(id, rest);
    },
});

// Delete an article
export const deleteArticle = mutation({
    args: { id: v.id("articles"), token: v.string() },
    handler: async (ctx, args) => {
        await checkSession(ctx, args.token);
        return await ctx.db.delete(args.id);
    },
});

// Increment views count of an article
export const incrementViews = mutation({
    args: { id: v.id("articles") },
    handler: async (ctx, args) => {
        const article = await ctx.db.get(args.id);
        if (article) {
            await ctx.db.patch(args.id, { views: (article.views || 0) + 1 });
        }
    },
});

