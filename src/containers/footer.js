import { Footer } from '../components';
import footerData from '../fixtures/footer';

const FooterContainer = () => (
  <Footer>
    <Footer.Title>Questions? Contact us.</Footer.Title>
    <Footer.Break />
    <Footer.Row>
      {footerData.map((col, inx) => (
        <Footer.Column key={inx}>
          {col.map(li => (
            <Footer.Link key={li.id} href={li.link}>
              {li.name}
            </Footer.Link>
          ))}
        </Footer.Column>
      ))}
    </Footer.Row>
    <Footer.Break />
    <Footer.Text>Netflix United Kingdom</Footer.Text>
  </Footer>
);

export default FooterContainer;
