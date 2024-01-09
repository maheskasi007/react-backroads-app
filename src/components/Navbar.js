import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./assets/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>

          <PageLinks parentClass="nav-links" itemClass="nav-link" />

          <ul className="nav-icons">
            {socialLinks.map((links) => {
              return (
                <li key={links.id}>
                  <a
                    href={links.href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={`fab ${links.icon}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
