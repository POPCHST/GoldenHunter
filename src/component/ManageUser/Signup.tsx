import "./Signup.css";

const Signup = () => {
  return (
    <div className="sign-container">
      <div className="sign-left-section">
        <div className="sign-overlay">
          {/* <p className="sign-quote">Look first / Then leap.</p>
          <p className="sign-author">Alex Honnold</p> */}
        </div>
      </div>
      <div className="sign-right-section">
        <h2 className="lb-sign-up">ลงทะเบียน</h2>
        <button className="sign-google-btn">ลงชื่อเข้าใช้ด้วย Google</button>
        {/* <div className="sign-other-options">
          <button>Facebook</button>
          <button>Apple</button>
          <button>LinkedIn</button>
        </div> */}
        <p>หรือ</p>
        <button className="sign-email-btn">อีเมล์</button>
        <p className="sign-login-text">
          มีบัญชีอยู่แล้วใช่ไหม? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
