import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-white py-10 font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
