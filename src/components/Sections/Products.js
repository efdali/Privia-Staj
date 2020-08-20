import React from 'react';
import Button from '../Button';
import Section from './index';
import { Next } from '../icons';

function Products() {
  return (
    <Section id="products">
      <Section.Body>
        <Section.Name>Ürünlerimiz</Section.Name>
        <Section.Title>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Section.Title>
        <Section.Desc>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam
        </Section.Desc>
        <Button>
          Daha Fazla <Next />
        </Button>
      </Section.Body>
      <Section.Image src="/neler_yapiyoruz_2.png" alt="Hakkımızda" />
    </Section>
  );
}

export default Products;
