// components/AuthHandler.js
import { useSession, signIn, signOut } from "next-auth/react";

const AuthHandler = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Bienvenido, {session.user.name}</p>
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </>
    );
  } else {
    return (
      <button onClick={() => signIn("discord")}>Iniciar sesión con Discord</button>
    );
  }
};

export default AuthHandler;
