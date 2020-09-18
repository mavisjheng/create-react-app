import React from "react";
import Form from "react-bootstrap/Form";

const radiosText = [
  "Complete",
  "Ongoing",
  "Paused",
  "Failed",
  "Aborted",
  "All",
];

const Radios = ({ onSelect, selected }) => (
  <Form>
    <div style={{ margin: "12px" }}>
      {radiosText.map((text) => (
        <Form.Check
          inline
          label={text}
          value={text}
          type="radio"
          key={`radio-show-${text}`}
          onChange={(e) => onSelect(e.target.value)}
          checked={selected === text}
        />
      ))}
    </div>
  </Form>
);

export default Radios;
