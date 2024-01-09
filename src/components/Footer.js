import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />

        <ul className="footer-icons">
          {socialLinks.map((socialLink) => {
            const { id, href, icon } = socialLink;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={`fab ${icon}`} />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright © Backroads travel tours company
          <span id="date" /> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
