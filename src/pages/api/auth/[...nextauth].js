import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId:'Ov23ctxESdQkNEs5KQ0n',
      clientSecret:'db2cbe737cc7e08217aff708214afc6648c1802a',
    }),
  ],
  };
export default NextAuth(authOptions);
