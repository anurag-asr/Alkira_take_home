import React from "react";
import "../Styles/Container.css";
import { Main } from "./Main";

export const Container = () => {
  return (
    <div className="container">
      <p data-cy="nba_teams" className="container_nba_team">NBA TEAMS</p>
      <Main />
    </div>
  );
};
