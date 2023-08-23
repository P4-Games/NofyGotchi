// api/auth/[...nextauth].js

import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: "1143713741200965723",
      clientSecret: "mmQLns5RkEnADXso5hAY5JsxIi1oLDSc",
    }),
  ],
};

export default NextAuth(authOptions);
