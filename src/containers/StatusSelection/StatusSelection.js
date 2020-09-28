import React from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

import { selectStatus } from "../../ducks/modules/statusSelection";

const selections = [
  "Complete",
  "Ongoing",
  "Paused",
  "Failed",
  "Aborted",
  "All",
];

const StatusSelection = ({ onStatusSelected, selected }) => (
  <Form>
    <div style={{ margin: "12px" }}>
      {selections.map((text) => (
        <Form.Check
          inline
          label={text}
          value={text}
          type="radio"
          key={`radio-show-${text}`}
          onChange={(e) => onStatusSelected(e.target.value)}
          checked={selected === text}
        />
      ))}
    </div>
  </Form>
);

const mapStateToProps = (state) => ({
  selected: state.statusSelection.status,
});

const mapDispatchToProps = (dispatch) => ({
  onStatusSelected: (status) => dispatch(selectStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusSelection);
