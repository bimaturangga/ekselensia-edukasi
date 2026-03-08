import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    articles: defineTable({
        title: v.string(),
        slug: v.string(),
        tag: v.string(),
        date: v.string(), // e.g. "12 Mar 2026"
        author: v.string(),
        image: v.string(),
        content: v.string(), // Rich text HTML
        views: v.optional(v.number()), // Jumlah Tayangan
    }).index("by_slug", ["slug"]),

    sessions: defineTable({
        token: v.string(),
        createdAt: v.number(),
        expiresAt: v.number(),
    }).index("by_token", ["token"]),
});
