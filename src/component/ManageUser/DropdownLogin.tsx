import React, { useState } from "react";
import Swal from "sweetalert2";
import "./DropdownLogin.css";

interface DropdownProps {
  username?: string;
  userFullname?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  nickname?: string;
  userImage?: string;
  onLogout: () => void;
}

const DropdownLogin: React.FC<DropdownProps> = ({
  username,
  userFullname,
  email,
  phoneNumber,
  address,
  nickname,
  userImage,
  onLogout,
}) => {
  const [editMode, setEditMode] = useState(false);

  console.log("edit", editMode);

  const handleProfileClick = () => {
    Swal.fire({
      title: "ข้อมูลส่วนตัว",
      html: `
        <div style="text-align: left;">
          <div style="display: flex; justify-content: center;">
            <img src="${
              userImage || "https://via.placeholder.com/150"
            }" alt="รูปโปรไฟล์" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;" />
          </div>
          <label>ชื่อ: <input class="swal-username" type="text" id="swal-username" value="${
            username || ""
          }" ${editMode ? "" : "readonly"} /></label><br/>
          <label>นามสกุล: <input class="swal-fullname" type="text" id="swal-fullname" value="${
            userFullname || ""
          }" ${editMode ? "" : "readonly"} /></label><br/>
          <label>อีเมล: <input class="swal-email" type="email" id="swal-email" value="${
            email || ""
          }" ${editMode ? "" : "readonly"} /></label><br/>
          <label>เบอร์โทรศัพท์: <input class="swal-phone" type="text" id="swal-phone" value="${
            phoneNumber || ""
          }" ${editMode ? "" : "readonly"} /></label><br/>
          <label>ที่อยู่: <input class="swal-address" type="text" id="swal-address" value="${
            address || ""
          }" ${editMode ? "" : "readonly"} /></label><br/>
          <label>ชื่อเล่น: <input class="swal-nickname" type="text" id="swal-nickname" value="${
            nickname || ""
          }" ${editMode ? "" : "readonly"} /></label><br/>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: editMode ? "บันทึก" : "แก้ไข",
      cancelButtonText: "ปิด",
      allowOutsideClick: false,
      preConfirm: () => {
        if (editMode) {
          // Return updated data for saving
          return {
            username: (
              document.getElementById("swal-username") as HTMLInputElement
            ).value,
            userFullname: (
              document.getElementById("swal-fullname") as HTMLInputElement
            ).value,
            email: (document.getElementById("swal-email") as HTMLInputElement)
              .value,
            phoneNumber: (
              document.getElementById("swal-phone") as HTMLInputElement
            ).value,
            address: (
              document.getElementById("swal-address") as HTMLInputElement
            ).value,
            nickname: (
              document.getElementById("swal-nickname") as HTMLInputElement
            ).value,
          };
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (editMode) {
          // Process the updated data
          const updatedData = result.value;
          console.log("Updated Profile Data:", updatedData);
          // Call API or update state with new data here
        }
        // Toggle edit mode only if "แก้ไข" or "บันทึก" is clicked
        setEditMode(!editMode);
      }
    });
  };

  return (
    <div className="dropdown-login">
      <ul className="dropdown-menu-login">
        <span className="span-dropdown-profile" onClick={handleProfileClick}>
          ข้อมูลส่วนตัว
        </span>
      </ul>

      <ul className="dropdown-menu-login">
        <span className="span-dropdowm-logout" onClick={onLogout}>
          Logout ?
        </span>
      </ul>
    </div>
  );
};

export default DropdownLogin;
