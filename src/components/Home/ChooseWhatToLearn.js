import React from "react";

import ChooseItem from "./ChooseItem";

import algoImg from "../../assets/img/home/algo.svg";
import { NavLink } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

const ChooseWhatToLearn = () => {
  return (
    <div className="choose-what-to-lrn">
      <div className="choose-what-to-lrn-text">
        <h3>Choose what to learn</h3>
        <p>Start learning popular algorithms</p>
      </div>
      <ChooseItem img={algoImg} title="Binary Tree" url="/binary-tree" />
      <ChooseItem img={algoImg} title="Binary Tree" url="/binary-tree" />
      <ChooseItem img={algoImg} title="Binary Tree" url="/binary-tree" />
      <ChooseItem img={algoImg} title="Binary Tree" url="/binary-tree" />
      <NavLink to="/more">
        <div className="choose-what-to-lrn-more">
          <div className="more-text">
            <p>Learn More</p>
            <ArrowRightAltRoundedIcon />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ChooseWhatToLearn;
