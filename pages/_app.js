// _app.js

import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import NavBar from '../components/NavBar'; // Importa el componente NavBar

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NavBar /> {/* Incluye el componente NavBar aquí */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
