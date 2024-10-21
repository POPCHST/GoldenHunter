import "./Footer.css"; // นำเข้าไฟล์ CSS สำหรับ Footer

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="f-footer">
        <div className="footer-section staff-only">
          <button className="staff-btn">FOR STAFF ONLY</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
