import React from "react";

import { Header } from "components";
import { RolloutOperation, StatusSelection, RingTable } from "containers";

const Home = () => (
  <>
    <Header theme="dark" brand="React Workshop Lab" links={["home", "feeds"]} />
    <RolloutOperation />
    <StatusSelection />
    <RingTable />
  </>
);

export default Home;
