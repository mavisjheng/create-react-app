import React, { Component } from "react";

import Header from "./Header";
import ActionButtons from "./ActionButtons";
import Radios from "./Radios";
import RingTable from "./RingTable";

class App extends Component {
  state = {
    originalData: [],
    rolloutData: [],
    action: "",
    statusToShow: "All",
  };

  componentDidMount() {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => this.setState({ rolloutData: data, originalData: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.action !== this.state.action) {
      let changedData = this.state.originalData;
      if (this.state.action === "start") {
        changedData = this.state.originalData.map((item) => ({
          ...item,
          status: item.status === "Paused" ? "Ongoing" : item.status,
        }));
      } else if (this.state.action === "pause") {
        changedData = this.state.originalData.map((item) => ({
          ...item,
          status: item.status === "Ongoing" ? "Paused" : item.status,
        }));
      } else if (this.state.action === "abort") {
        changedData = this.state.originalData.map((item) => ({
          ...item,
          status:
            item.status === "Ongoing" || item.status === "Paused"
              ? "Aborted"
              : item.status,
        }));
      }
      this.setState({ originalData: changedData });
    }

    if (
      prevState.statusToShow !== this.state.statusToShow ||
      prevState.originalData !== this.state.originalData
    ) {
      const filteredData =
        this.state.statusToShow === "All"
          ? this.state.originalData
          : this.state.originalData.filter(
              (data) => data.status === this.state.statusToShow
            );

      this.setState({ rolloutData: filteredData });
    }
  }

  render() {
    return (
      <>
        <Header theme="dark" brand="RELEASE DRIVER" links={["Home", "Feeds"]} />
        <ActionButtons onClick={(action) => this.setState({ action })} />
        <Radios
          selected={this.state.statusToShow}
          onSelect={(status) => this.setState({ statusToShow: status })}
        />
        <RingTable rows={this.state.rolloutData} />
      </>
    );
  }
}

export default App;
