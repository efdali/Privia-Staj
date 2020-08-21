import React from 'react';
import * as Sections from '../components/Sections';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>
      <Sections.HomeSection />
      <Sections.AboutSection />
      <Sections.ProductsSection />
      <Sections.CareerSection />
      <Sections.BlogSection />
      <Sections.ContactSection />
    </Layout>
  );
}

export default HomePage;
