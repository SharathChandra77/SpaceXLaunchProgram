import React from "react";
import { Card } from "react-bootstrap";
import "./RocketLaunch.css";

function RocketLaunchDetails({ details }) {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    links,
    rocket,
  } = details;
  const imgSrc = links.mission_patch_small;
  const land_success = rocket.first_stage.cores[0].land_success;
  return (
      <React.Fragment>
    <Card className="Rocket-details-card">
      <div>
        <div>
          <img
            src={imgSrc}
            alt={mission_name+" pic not available"}
            className="Rocket-mission-image"
            height="200"
            width="250"
          />
        </div>
        <div className="Rocket-mission-name-flight-number">
          {mission_name} #{flight_number}
        </div>
        <div className="Rocket-detail-label">
          Mission Ids:{" "}
          <ul>
            {" "}
            <li className="Rocket-detail-value">{mission_id}</li>
          </ul>
        </div>
        <div className="Rocket-detail-label">
          Launch Year:{" "}
          <span className="Rocket-detail-value">{launch_year}</span>
        </div>
        <div className="Rocket-detail-label">
          Successful Launch:{" "}
          <span className="Rocket-detail-value">
            {launch_success ? "true" : "false"}
          </span>
        </div>
        <div className="Rocket-detail-label">
          Successful Landing:{" "}
          <span className="Rocket-detail-value">
            {land_success ? "true" : "false"}
          </span>
        </div>
      </div>
    </Card>
    </React.Fragment>
  );
}

export default RocketLaunchDetails;





