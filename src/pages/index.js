import React from 'react';
import Head from 'next/head';
import * as Sections from '../components/Sections';
import Layout from '../components/Layout';
import UpdateUrlOnScroll from '../components/UpdateUrlOnScroll';

function HomePage() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Privia Security</title>
        <meta name="description" content="Staj Programı" />
      </Head>
      <UpdateUrlOnScroll>
        <Sections.HomeSection />
        <Sections.AboutSection />
        <Sections.ProductsSection />
        <Sections.CareerSection />
        <Sections.BlogSection />
        <Sections.ContactSection />
      </UpdateUrlOnScroll>
    </Layout>
  );
}

export default HomePage;
