import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials as { username: string, password: string };

        try {
          const res = await fetch('http://localhost:8082/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });

          const user = await res.json();
          console.log(user)

          if (res.ok && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login', // Custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {...token, ...user};
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token as { username: string, authenticated: boolean, created: Date, expiration: Date, accessToken: string, refreshToken: string };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
