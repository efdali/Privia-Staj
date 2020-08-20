import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Section from './index';

function Contact() {
  return (
    <Section id="contact">
      <Section.Body right>
        <Section.Name>İletişim</Section.Name>
        <Section.Title>Lorem Ipsum</Section.Title>
        <Section.Desc>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </Section.Desc>
        <form>
          <Input placeholder="Adınız Soyadınız" />
          <Input placeholder="Email" />
          <Input placeholder="Konu" />
          <Input placeholder="Mesajınız" />
          <Checkbox>
            Hizmet Şartlarını ve Gizlilik Politikasını kabul etmiş
            sayılırsınız.
          </Checkbox>
        </form>
        <Button>Gönder</Button>
      </Section.Body>
      <Section.Image src="/contact.png" alt="Hakkımızda" />
    </Section>
  );
}

export default Contact;
