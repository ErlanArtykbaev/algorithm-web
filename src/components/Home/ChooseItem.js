import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";

const ChooseItem = (props) => {
  return (
    <div className="choose-item">
      <div className="bkg-img-clr">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M13 13L10 10.75L7 13V4H6V20H18V4H13V13Z" fill="#fff"/>
          <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" fill="#fff"/>
        </svg>
      </div>
      <h3 className="choose-item-title">{props.title}</h3>
      <NavLink className="choose-item-url" to={props.url}>
        <p>Learn</p>
        <ArrowRightAltRoundedIcon />
      </NavLink>
    </div>
  );
};

export default ChooseItem;
