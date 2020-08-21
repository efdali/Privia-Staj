import React from 'react';
import Button from '../../Button';
import Section from '../../Section';

import { Next } from '../../icons';

function About() {
  return (
    <Section id="about" lightBg>
      <Section.Body right>
        <Section.Name>Hakkımızda</Section.Name>
        <Section.Title>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Section.Title>
        <Section.Desc>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged.
        </Section.Desc>
        <Button>
          Daha Fazla <Next />
        </Button>
      </Section.Body>
      <Section.Image src="/about_image.png" alt="Hakkımızda" />
    </Section>
  );
}

export default About;
