import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prismadb';


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider( {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    } )
  ],
  callbacks: {
    session( { session, token, user } ) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};

export default NextAuth( authOptions );