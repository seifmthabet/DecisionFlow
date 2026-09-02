import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000", "http://192.168.1.35:3000"],
  database: drizzleAdapter(db, {
    schema,
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});
