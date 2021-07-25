import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import content from "../frontaid.content";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{content.index.title}</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts Page</a>
            </Link>
          </li>
          {content.pages.map((page) => (
            <li key={page.path}>
              <Link href="[...slug]" as={page.path} locale={locale}>
                <a>{page.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(MyApp);
