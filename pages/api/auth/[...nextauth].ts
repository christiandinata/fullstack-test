import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || 'DEFAULT_ID',
      clientSecret: process.env.GITHUB_SECRET || 'DEFAULT_SECRET',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      return profile
    },
    async jwt({ token, account, profile }:any) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.login = profile.login
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.login = token.login
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    }
  }
};

export default NextAuth(authOptions);

