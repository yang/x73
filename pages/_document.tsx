
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter%3Aital%2Cwght%400%2C400%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900&family=Inconsolata%3Aital%2Cwght%400%2C400%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900&family=Lato%3Aital%2Cwght%400%2C400%3B0%2C700%3B0%2C900&family=Roboto%3Aital%2Cwght%400%2C400%3B0%2C500%3B0%2C700%3B0%2C900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}