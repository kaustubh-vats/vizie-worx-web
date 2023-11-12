import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const devMode = (process.env.NODE_ENV === "development");
  const csp = `default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' ${devMode ? "'unsafe-eval'": ''}; font-src 'self' fonts.gstatic.com; img-src 'self'; connect-src 'self'`;
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={csp}></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
