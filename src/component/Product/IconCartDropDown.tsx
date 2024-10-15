import { useContext, useState } from "react";
import "./IconCartDropDown.css";
import cartIcon from "../../../public/image/grocery-store.png";
import { LanguageContext } from "../../context/LanguageContext";

const IconCartDropDown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { language } = useContext(LanguageContext);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="icon-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <i className="icon">🔔</i> */}
      <img src={cartIcon} alt="Cart" />
      {isDropdownVisible && (
        <div className="dropdown">
          <p style={{color:'gray'}}>{language == "EN" ? "Your cart is empty." : "ไม่มีสินค้า ในตะกร้า"}</p>
          <p style={{fontWeight:'bolder'}}>{language == "EN" ? "Keep Shopping" : "ช็อปสินค้าต่อ"}</p>
        </div>
      )}
    </div>
  );
};

export default IconCartDropDown;
