// _app.js

import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import NavBar from '../components/NavBar'; // Importa el componente NavBar
import Footer from '../components/Footer'; // Importa el componente Footer

// Bloqueo de scroll en dispositivos móviles
if (typeof window !== "undefined") {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", handleScroll);
}

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

