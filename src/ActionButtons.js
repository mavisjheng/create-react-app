import React from "react";
import Button from "react-bootstrap/Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiPause } from "react-icons/hi";
import { GiStopSign } from "react-icons/gi";

import "./ActionButtons.css";

const ActionButtons = ({ onClick }) => (
  <div
    className="action-buttons"
    style={{ marginTop: "66px", marginLeft: "12px" }}
  >
    <Button variant="outline-primary" onClick={() => onClick("start")}>
      <AiFillPlayCircle />
      Start
    </Button>
    <Button variant="outline-secondary" onClick={() => onClick("pause")}>
      <HiPause />
      Pause
    </Button>
    <Button variant="outline-danger" onClick={() => onClick("abort")}>
      <GiStopSign />
      Abort
    </Button>
  </div>
);

export default ActionButtons;
