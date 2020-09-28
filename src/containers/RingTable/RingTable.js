import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

import { setRings } from "../../ducks/modules/rings";

const getBadgeVariant = (status) => {
  switch (status) {
    case "Complete":
      return "success";

    case "Ongoing":
      return "warning";

    case "Failed":
      return "danger";

    case "Aborted":
      return "dark";

    default:
      return "secondary";
  }
};

class RingTable extends Component {
  state = { tableRows: [], allData: [] };

  componentDidMount() {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => {
        this.props.setRings(data);
        this.setState({ tableRows: data, allData: data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { rolloutAction: prevAction, selectedStatus: prevStatus } = prevProps;
    const { rolloutAction, selectedStatus } = this.props;
    const { allData } = this.state;

    if (prevAction !== rolloutAction) {
      let modifiedData = allData;

      if (rolloutAction === "start") {
        modifiedData = modifiedData.map((item) => ({
          ...item,
          status: item.status === "Paused" ? "Ongoing" : item.status,
        }));
      } else if (rolloutAction === "pause") {
        modifiedData = modifiedData.map((item) => ({
          ...item,
          status: item.status === "Ongoing" ? "Paused" : item.status,
        }));
      } else if (rolloutAction === "abort") {
        modifiedData = modifiedData.map((item) => ({
          ...item,
          status:
            item.status === "Ongoing" || item.status === "Paused"
              ? "Aborted"
              : item.status,
        }));
      }
      this.setState({ allData: modifiedData });
    }

    if (prevStatus !== selectedStatus || prevState.allData !== allData) {
      const selectedData =
        selectedStatus === "All"
          ? allData
          : allData.filter((data) => data.status === selectedStatus);

      this.setState({ tableRows: selectedData });
    }
  }

  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>Rollout Status</th>
            <th>Windows</th>
            <th>Linux</th>
            <th>Unix</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableRows.map((row, index) => (
            <tr key={`ring-row-${index}`}>
              <td>{row.target}</td>
              <td>
                <Badge variant={getBadgeVariant(row.status)}>
                  {row.status}
                </Badge>
              </td>
              <td>{row.windows}</td>
              <td>{row.linux}</td>
              <td>{row.unix}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({
  rings: state.rings.rings,
  selectedStatus: state.statusSelection.status,
  rolloutAction: state.rolloutOperation.action,
});

const mapDispatchToProps = (dispatch) => ({
  setRings: (data) => dispatch(setRings(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RingTable);
