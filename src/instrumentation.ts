import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "@/lib/db";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("Starting server bootstrap...");

    try {
      console.log("Running database migrations...");
      await migrate(db, { migrationsFolder: "./drizzle" });
      console.log("Database migrations completed successfully");
    } catch (error) {
      console.error("Failed to run migrations:", error);
      process.exit(1);
    }
  }
}
