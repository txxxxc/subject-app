import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import GridChild from "client/components/molecules/GridChild";
import GridFlex from "client/components/molecules/GridFlex";
import GridDummy from "client/components/molecules/GridDummy";
import { amBlocks, pmBlocks, allBlocks } from "client/config/blocks";

const Simulator = () => {
  const [I_A, setI_A] = useState("");
  const [I_B, setI_B] = useState("");
  const [II_A, setII_A] = useState("");
  const [II_B, setII_B] = useState("");
  const [III_A, setIII_A] = useState("");
  const [III_B, setIII_B] = useState("");
  const [IV_A, setIV_A] = useState("");
  const [IV_B, setIV_B] = useState("");
  const [V_A, setV_A] = useState("");
  const [V_B, setV_B] = useState("");
  const [VI, setVI] = useState("");
  const [LHR, setLHR] = useState("");

  useEffect(() => {
    allBlocks.map(value => {
      let subject = localStorage[value];
      if (subject) {
        eval(`set${value}`)(subject);
      }
    });
  }, []);

  const initializeAmGrid = blocks => {
    const amItems = [];
    blocks.map((block, index) => {
      amItems.push(<GridDummy item xs={1} key={`am-first-${index}`} />);
      block.map((value, i) => {
        amItems.push(
          <GridChild
            item
            xs={2}
            key={`${index}-${i}`}
            value={value}
            block={value}
            setBlock={eval(`set${value}`)}
          >
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
          <GridChild
            item
            xs={2}
            key={`${index}-${i}`}
            value={value}
            block={value}
            setBlock={eval(`set${value}`)}
          >
            {eval(value)}
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
