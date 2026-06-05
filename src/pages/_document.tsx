import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Anurag Singh — Full-Stack Engineer with 4+ years building production web and mobile apps with Next.js, TypeScript, Flutter, and AWS."
        />
        <link rel="icon" href="/assets/img/web-icon.png" type="image/png" />
      </Head>
      <body className="bg-surface text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
