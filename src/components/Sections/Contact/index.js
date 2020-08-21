import React from 'react';
import Button from '../../Button';
import Checkbox from '../../Checkbox';
import Input from '../../Input';
import Section from '../../Section';
import { Link } from '../../Link';

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
          <Input placeholder="Adınız Soyadınız" inline />
          <Input placeholder="Email" inline />
          <Input placeholder="Konu" />
          <Input is="textarea" placeholder="Mesajınız" />
          <Checkbox defaultChecked>
            <Link href="/">
              <a>Hizmet Şartlarını</a>
            </Link>
            ve
            <Link href="/">
              <a>Gizlilik Politikasını</a>
            </Link>
            kabul etmiş sayılırsınız.
          </Checkbox>
        </form>
        <Button>Gönder</Button>
      </Section.Body>
      <Section.Image src="/contact.png" alt="Hakkımızda" />
    </Section>
  );
}

export default Contact;
