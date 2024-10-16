import "./Footer.css"; // นำเข้าไฟล์ CSS สำหรับ Footer

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>เราคือบริษัทที่มุ่งเน้นในการพัฒนาซอฟต์แวร์ที่มีคุณภาพสูง</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:info@example.com">Haru@example.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1234567890</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="#">Tiktok</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
          <button>FOR STAFF ONLY</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
