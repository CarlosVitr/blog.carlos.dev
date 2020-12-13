import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, description = "", metaImageUrl = "/cover.png" }) {
  const siteMetadata = getSiteMetaData();
  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <link rel="canonical" href={siteMetadata.siteUrl} />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={siteMetadata.siteUrl + metaImageUrl} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:site_name" content="Blog by Frenco" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content={siteMetadata.siteUrl + metaImageUrl}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />

      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
}
