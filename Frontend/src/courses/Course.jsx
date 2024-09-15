import { useEffect, useState } from "react";

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the courses from the backend API
    fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Available Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="my-2">
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
