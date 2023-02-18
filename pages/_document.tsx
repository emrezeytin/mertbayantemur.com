import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-neutral-900 py-10 font-sans text-neutral-50 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
