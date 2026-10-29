import { CONTACT_INFO, SOCIAL_LINKS } from "../../data/contact";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="contact-card">
            <h3>Get In Touch</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-pin"></i>
                <div>
                  <strong>Address</strong>
                  {CONTACT_INFO.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <strong>Contact</strong>
                  {CONTACT_INFO.phone}
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  {CONTACT_INFO.email}
                </div>
              </li>
            </ul>

            <div className="social-icons">
              {SOCIAL_LINKS.map((social) => (
                <a href={social.url} title={social.platform} key={social.platform}>
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-map">
            <h3>Find Us</h3>
            <div className="map-embed-placeholder">
              <i className="fas fa-map-location-dot"></i> Map Coming Soon
            </div>
          </div>
        </div>

        <div className="copyright">
          &copy; 2026 THE HALF PLATE RESTAURANT. All Rights Reserved. | Privacy Policy | Terms of
          Service
        </div>
      </div>
    </footer>
  );
}
