import React from "react";
import "../Styles/styles.modules.css";
import searchicon from "../Images/Search_Icon/search_24px.png";
import { Frame1 } from "./Frame1";

export const Ui = () => {
  return (
    <div className="group1">
      <p className="nba_teams">NBA TEAMS</p>
      <div className="rectangle15">
        <img className="search_icon" src={searchicon} alt="error" />
      </div>

      <Frame1 />
    </div>
  );
};
