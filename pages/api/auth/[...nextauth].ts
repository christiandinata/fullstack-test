import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || 'DEFAULT_ID',
      clientSecret: process.env.GITHUB_SECRET || 'DEFAULT_SECRET',
    }),
  ],
};

export default NextAuth(authOptions);

