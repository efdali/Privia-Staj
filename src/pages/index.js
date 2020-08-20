import React from 'react';
import HomeSection from '../components/Sections/Home';
import AboutSection from '../components/Sections/About';
import ProductsSection from '../components/Sections/Products';
import CareerSection from '../components/Sections/Career';
import BlogSection from '../components/Sections/Blog';
import ContactSection from '../components/Sections/Contact';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <CareerSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
}

export default HomePage;
