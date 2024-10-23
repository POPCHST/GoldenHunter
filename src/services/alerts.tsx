import Swal, { SweetAlertOptions } from 'sweetalert2';

export const alertForms: { [key: string]: SweetAlertOptions } = {
  invalidUserNotFound: {
    title: "Error",
    text: "No user found with this username : ไม่พบ username นี้",
    icon: "error",
    iconHtml: '<img src="../../public/image/invalidUser.png" style="width: 50px; height: 50px;">',
    confirmButtonText: `OK`,
    heightAuto: false,
    backdrop: false

  },
  successUserCreated: {
    title: "Success",
    text: "User has been successfully created : สร้างโปรไฟล์เสร็จเรียบร้อย",
    icon: "success",
    iconHtml: '<img src="../../public/image/userSuccess.png" style="width: 50px; height: 50px;">',
    confirmButtonText: 'OK',
    heightAuto: false,
    backdrop: false


  },
  warningDeleteUser: {
    title: "Warning",
    text: "Are you sure you want to delete this user?",
    icon: "warning",
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    showCancelButton: true,
    heightAuto: false,
    backdrop: false

  },
  defaultFormData: {
    title: "Default : คืนค่า",
    text: "คุณต้องการเคลียร์ค่าหรือไม่ ?",
    icon: "question",
    confirmButtonText: 'ใช่ ยืนยัน!',
    cancelButtonText: 'ไม่ใช่',
    showCancelButton: true,
    heightAuto: false,
    backdrop: false

  },
  newRegister: {
    title: "Add Register : สมาชิกใหม่",
    text: "ยืนยันที่จะเพิ่มข้อมูลใหม่ใช่หรือไม่ ?",
    icon: "question",
    iconHtml: '<img src="../../public/image/add-user.png" style="width: 50px; height: 50px;">',
    confirmButtonText: 'ยืนยัน',
    cancelButtonText: 'ไม่ใช่',
    showCancelButton: true,
    heightAuto: false,
    backdrop: false

  }
};

// ฟังก์ชันสำหรับแสดงแจ้งเตือน
export const showAlert = (alertType: keyof typeof alertForms) => {
  const alert = alertForms[alertType];

  if (alert) {
    return Swal.fire(alert); // Return เพื่อใช้งาน then ใน signup.tsx
  } else {
    console.error("Alert type not found");
    return Promise.reject(); // เพิ่มเพื่อให้ Promise มีเส้นทางชัดเจน
  }
};
