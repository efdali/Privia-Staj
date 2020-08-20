import React from 'react';
import Button from '../Button';
import Section from './index';

import { Next, Back } from '../icons';

function Blog() {
  return (
    <Section id="blog">
      <div>
        <div>
          <Section.Name>Blog Yazılarımız</Section.Name>
          <Section.Title>
            Altı farklı kategoride 24 içerik
          </Section.Title>
          <div>
            <Back />
            <Next />
          </div>
        </div>
        <div>Tümü Kategoriler</div>
      </div>
      <div>slider</div>
      <Button>Tüm Blog Yazıları</Button>
    </Section>
  );
}

export default Blog;
