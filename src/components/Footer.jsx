function Footer({ onNavigate }) {
  const links = ['Home', 'Account', 'Orders', 'Cart', 'Contact'];

  const handleClick = (e, link) => {
    e.preventDefault();
    onNavigate(link.toLowerCase());
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <div className="footer__col footer__col--brand">
            <h3 className="footer__logo">VELOCE</h3>
            <p className="footer__tagline">
              Premium sneakers engineered for those who refuse to slow down.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Links</h4>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleClick(e, link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Social</h4>
            <div className="footer__social">
              <a href="#instagram" aria-label="Instagram">
                📸
              </a>
              <a href="#twitter" aria-label="Twitter">
                🐦
              </a>
              <a href="#tiktok" aria-label="TikTok">
                🎵
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 VELOCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
