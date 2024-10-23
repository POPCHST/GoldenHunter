import { useContext, useState } from "react";
import "./Signup.css";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../services/alerts";

const Signup = () => {
  const { language } = useContext(LanguageContext); // ใช้คอนเท็กซ์
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleDefault = () => {
    showAlert('defaultFormData').then((result) => {
      if (result.isConfirmed) {
        // เมื่อผู้ใช้กด Yes
        setFormData({
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          nickname: "",
        });
      }
    });
  };
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    nickname: "",
  });

  const [showNickname, setShowNickname] = useState(false); // เพิ่มสถานะสำหรับการแสดงชื่อเล่น

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ส่งข้อมูลฟอร์มไปยัง API หรือทำการประมวลผลที่ต้องการ
    showAlert('newRegister').then((result) => {
      if (result.isConfirmed) {
        setFormData({
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          nickname: "",
        });
      }
    });

    console.log(formData);
  };

  return (
    <div className="registration-fullscreen">
      <div className="registration-container">
        <h2>{language === "EN" ? "New Register" : "สมาชิกใหม่"}</h2>
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="form-column">
            <input
              type="text"
              className="regis-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder={
                language === "EN" ? "Username" : "Username (ชื่อผู้ใช้งาน)"
              }
            />
            <input
              type="password"
              className="regis-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={
                language === "EN" ? "Password" : "Password (รหัสผู้ใช้งาน)"
              }
            />
            <input
              type="text"
              className="regis-firstname"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={
                language === "EN" ? "First Name" : "First Name (ชื่อจริง)"
              }
            />
            <div className="regis-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={showNickname}
                  onChange={() => setShowNickname(!showNickname)}
                />
                {language === "EN" ? "Add Nickname?" : "เพิ่มชื่อเล่นหรือไม่?"}
              </label>
            </div>
            {showNickname && (
              <input
                type="text"
                className="regis-nickname"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder={
                  language === "EN" ? "Nickname (Optional)" : "ชื่อเล่น (ถ้ามี)"
                }
              />
            )}
          </div>
          <div className="form-column">
            <input
              type="email"
              className="regis-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={language === "EN" ? "Email" : "Email (อีเมลล์)"}
            />
            <input
              type="text"
              className="regis-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={
                language === "EN" ? "Contact" : "Contact (เบอร์ติดต่อ)"
              }
            />
            <input
              type="text"
              className="regis-lastname"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={
                language === "EN" ? "Last Name" : "Last Name (นามสกุล)"
              }
            />
          </div>
          <div className="regis-address">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder={language === "EN" ? "Address" : "Address (ที่อยู่)"}
            />
          </div>
          <div className="regis-upload">
            <input type="file" placeholder="Upload Profile Picture" />
          </div>

          <div className="btn-group">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              {language === "EN" ? "Cancel" : "Cancel"}
            </button>

            <button type="submit" className="btn-register" onClick={handleSubmit}>
              {language === "EN" ? "Register" : "Register"}
            </button>

            <button
              type="button"
              className="btn-default"
              onClick={handleDefault}
            >
              {language === "EN" ? "Default" : "Default"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
