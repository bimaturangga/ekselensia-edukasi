import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Simple random token generator for MVP
function generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

const SESSION_EXPIRY_HOURS = 24;

export const login = mutation({
    args: { password: v.string() },
    handler: async (ctx, args) => {
        // Compare with environment variable "ADMIN_PASSWORD"
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword) {
            console.error("ADMIN_PASSWORD environment variable is not set!");
            throw new Error("Sistem belum diverifikasi. Admin Password belum diatur.");
        }

        if (args.password !== adminPassword) {
            throw new Error("Password salah!");
        }

        const token = generateToken();
        const now = Date.now();
        const expiresAt = now + (SESSION_EXPIRY_HOURS * 60 * 60 * 1000);

        await ctx.db.insert("sessions", {
            token,
            createdAt: now,
            expiresAt,
        });

        return token;
    },
});

export const validateSession = mutation({
    args: { token: v.string() },
    handler: async (ctx, args) => {
        const session = await ctx.db
            .query("sessions")
            .withIndex("by_token", (q) => q.eq("token", args.token))
            .first();

        if (!session) {
            return false;
        }

        if (Date.now() > session.expiresAt) {
            return false;
        }

        return true;
    },
});

export const logout = mutation({
    args: { token: v.string() },
    handler: async (ctx, args) => {
        const session = await ctx.db
            .query("sessions")
            .withIndex("by_token", (q) => q.eq("token", args.token))
            .first();

        if (session) {
            await ctx.db.delete(session._id);
        }

        return true;
    },
});
