import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GridChild from "client/components/molecules/GridChild";
import GridFlex from "client/components/molecules/GridFlex";
import GridDummy from "client/components/molecules/GridDummy";
import { amBlocks, pmBlocks } from "client/config/blocks";

const Simulator = () => {
  const [one_a, setOneA] = useState("");
  const [one_b, setOneB] = useState("");
  const [two_a, setTowA] = useState("");
  const [two_b, setTowB] = useState("");
  const [three_a, setThreeA] = useState("");
  const [three_b, setThreeB] = useState("");
  const [four_a, setFourA] = useState("");
  const [four_b, setFourB] = useState("");
  const [five_a, setFiveA] = useState("");
  const [five_b, setFiveB] = useState("");
  const [six, setSix] = useState("");
  const [LHR, setLHR] = useState("");
  const initializeAmGrid = blocks => {
    const amItems = [];
    blocks.map((block, index) => {
      amItems.push(<GridDummy item xs={1} key={`am-first-${index}`} />);
      block.map((value, i) => {
        amItems.push(
          <GridChild item xs={2} key={`${index}-${i}`}>
            {eval(value)}
          </GridChild>
        );
      });
      amItems.push(<GridDummy item xs={1} key={`am-last-${index}`} />);
    });
    return amItems;
  };
  const initializePmGrid = blocks => {
    const pmItems = [];
    blocks.map((block, index) => {
      pmItems.push(<GridDummy item xs={1} key={`pm-first-${index}`} />);
      block.map((value, i) => {
        pmItems.push(
          <GridChild item xs={2} key={`${index}-${i}`}>
            <>
              <h1>{value}</h1>
              <p>{eval(value)}</p>
            </>
          </GridChild>
        );
      });
      pmItems.push(<GridDummy item xs={1} key={`pm-last-${index}`} />);
    });
    return pmItems;
  };
  const amResult = initializeAmGrid(amBlocks);
  const pmResult = initializePmGrid(pmBlocks);
  return (
    <Container>
      <Grid container justify="center">
        {amResult}
        <GridFlex />
        {pmResult}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 70%;
  min-width: 500px;
  background: white;
  margin-left: 5%;
`;

export default Simulator;
