import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT PAGES  ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        {/* 
        index: Tells them to include this page in search engine results.

follow: Tells them to follow the links on this page and crawl those too.

it means:
"Search engines, you are allowed to index this page and follow any links you find on it."
         */}
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern mern nestjs fullstack"}
        />
        <meta
          name={"description"}
          content={
            "Buy and sell properties anywhere anytime in South Korea. | " +
            "Купить и продать недвижимость в любое время в Южной Корее. | " +
            "한국 어디서나 부동산을 사고팔 수 있습니다. | "
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
