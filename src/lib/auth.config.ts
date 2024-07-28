import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          return null;
        }
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        // 当使用Github登录的时候，没有password
        if (!user || !user.password) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return null;
        }
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
