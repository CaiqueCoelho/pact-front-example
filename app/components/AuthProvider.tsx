'use client'; // Important to mark this as a Client Component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppBar from '../AppBar';
import { Session } from 'next-auth';

interface Props {
  children: ReactNode;
  session: Session;
}

const AuthProvider = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
        <AppBar />
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
