import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            username: string,
            authenticated: boolean,
            created: Date,
            expiration: Date,
            accessToken: string,
            refreshToken: string
        }
    }
}