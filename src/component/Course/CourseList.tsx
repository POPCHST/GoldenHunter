// src/components/CourseList.tsx
import React, { useEffect, useState } from "react";
import { appApi } from "../../data/globle";
import "./CourseList.css";

interface Course {
  course_id: string;
  course_name: string;
  course_detail: string;
  course_price: string;
  course_limit: string;
  isCheck: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await appApi.get("/api/course/courseList");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetail = () => {
    setSelectedCourse(null);
  };

  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }

  return (
    <div className="course-list-container">
      <h1 style={{ color: "#333" }}>รายชื่อคอร์สเรียน</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courses.map((course) => (
          <li key={course.course_id} className="li-course">
            <h3 style={{ color: "#555" }}>{course.course_name}</h3>
            <button
              onClick={() => handleCourseSelect(course)}
              className="btn-detail-list"
            >
              ดูรายละเอียด
            </button>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div className="selected-course">
          <h2>{selectedCourse.course_name}</h2>
          <p>{selectedCourse.course_detail}</p>
          <button className="btn-close-course" onClick={handleCloseDetail}>
            ปิด
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseList;
