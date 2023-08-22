import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>TamaNofy</title>
        <meta name="description" content="Ahora Nofy, es un tamagotchi" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
