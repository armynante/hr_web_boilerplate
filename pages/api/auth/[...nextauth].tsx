import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '../../../lib/db';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter( prisma ),
  secret: process.env.SECRET,
  providers: [
    GoogleProvider( {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    } ),
    EmailProvider( {
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number( process.env.EMAIL_SERVER_PORT ),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    } ),
    CredentialsProvider( {
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'meine.email@domain.com',
        },
        password: { label: 'Passwort', type: 'password' },
      },
      authorize: async ( credentials ) => {
        const user = prisma.user.findUnique( {
          where: {
            email: credentials?.email,
          },
        } );
        if ( user ) {
          return user;
        } else {
          return null;
        }
      } } )
  ],
  callbacks: {
    session( { session, token, user } ) {
      session.user = user;      
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};

export default NextAuth( authOptions );