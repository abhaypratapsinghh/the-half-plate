import { useContact } from "../../hooks/useContact";

export default function Footer() {
  const { data: contact, loading, error } = useContact();

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="contact-card">
            <h3>Get In Touch</h3>
            {contact && (
              <>
                <ul className="contact-info">
                  <li>
                    <i className="fas fa-map-pin"></i>
                    <div>
                      <strong>Address</strong>
                      {contact.addressLines.map((line) => (
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
                      {contact.phone}
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>Email</strong>
                      {contact.email}
                    </div>
                  </li>
                </ul>

                <div className="social-icons">
                  {contact.socialLinks.map((social) => (
                    <a href={social.url} title={social.platform} key={social.platform}>
                      <i className={`fab ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="footer-map">
            <h3>Find Us</h3>
            {contact ? (
              <div className="map-embed">
                <iframe
                  src={contact.mapEmbedUrl}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="The Half Plate location"
                ></iframe>
              </div>
            ) : (
              <div className="map-embed-placeholder">
                <i className="fas fa-map-location-dot"></i>{" "}
                {error ? "Map unavailable" : loading ? "Loading map…" : "Map coming soon"}
              </div>
            )}
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
