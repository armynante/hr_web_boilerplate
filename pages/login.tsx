import { GetServerSideProps } from 'next';
import type { Session } from 'next-auth';
import { getSession, signIn, signOut } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps<{session: Session | null}> = async ( context ) => {
  const session = await getSession( context );
  if ( !session ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default function Login( { session }: { session: Session } ) {

  if ( session ) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

