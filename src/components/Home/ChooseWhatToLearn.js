import React, {useEffect, useState} from "react";

import ChooseItem from "./ChooseItem";

import algoImg from "../../assets/img/home/algo.svg";
import { NavLink } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

const ChooseWhatToLearn = () => {
  const [courses, setCourses] = useState('')
  useEffect(() => {
    fetch('http://localhost:3004/courses', {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setCourses([...data])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="choose-what-to-lrn">
      <div className="choose-what-to-lrn-text">
        <h3>Choose what to learn</h3>
        <p>Start learning popular algorithms</p>
      </div>
      {courses && courses.map(item => (
        <ChooseItem key={item.id} id={item.id} title={item.name} url={`/course/${item.id}`} />
      ))}
    </div>
  );
};

export default ChooseWhatToLearn;
