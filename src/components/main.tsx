import { NextComponentType } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Main: NextComponentType = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Track your habits</h1>
      <AuthSession></AuthSession>
    </main>
  );
};

const AuthSession: NextComponentType = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>hi {session.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("discord")}>Login with Discord</button>
      )}
    </div>
  );
};

export default Main;
