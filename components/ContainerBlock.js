import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Gabriel Andres Brandalisse - Portfolio",
    description: `I've been developing web apps for 5 years straight. Get in touch with me to know more.`,
    image: "/favicon.ico",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" /> 
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gabriel Andres brandalisse" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gabrandalisse" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta
          property="og:url"
          content={`https://gabrandalisse.com${router.asPath}`}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://gabrandalisse.com${router.asPath}`}
        />
      </Head>
      
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
