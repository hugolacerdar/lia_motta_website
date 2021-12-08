import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Fraunces:ital@1&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org//face/miedinger"
            type="text/css"
          />
          <link rel="shortcut icon" href="/favicon/4.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
