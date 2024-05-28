import { Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getCoursesFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/courses"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getCoursesFn();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((course) => {
        return (
          <div onClick={() => navigate(`/courses/${course.id}`)}>
            <Card>
              <img src={course.image_url} alt="" />
              <p>{course.category}</p>
              <p>{course.heading}</p>
              <p>{course.description}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
