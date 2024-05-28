import { Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const [data, setData] = useState({});
  const { course_id } = useParams();

  const getCourseFn = async () => {
    const response = await axios.get(
      `https://api-eduvila.onrender.com/courses?id=${course_id}`
    );
    setData(response.data[0]);
  };
  useEffect(() => {
    getCourseFn();
  }, []);
  return (
    <div className="h-[30%] w-[30%]">
      <Card>
        <img src={data?.image_url} alt="" />
        <p className="flex justify-center items-center">{data?.category}</p>
        <p className="flex justify-center items-center">{data?.heading}</p>
        <p className="flex justify-center items-center">{data?.description}</p>
      </Card>
    </div>
  );
};

export default CourseDetail;
