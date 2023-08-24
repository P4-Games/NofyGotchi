// _app.js

import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import NavBar from '../components/NavBar'; // Importa el componente NavBar
import Footer from '../components/Footer'; // Importa el componente Footer

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NavBar /> {/* Incluye el componente NavBar aquí */}
      <Component {...pageProps} />
      <Footer /> {/* Incluye el componente Footer aquí */}
    </SessionProvider>
  );
}

export default MyApp;

