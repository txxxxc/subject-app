import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const colorGen = () => {
  return `
    background: ${"#" + Math.floor(Math.random() * 16777215).toString(16)};
  `;
};

const Simulator = () => {
  console.log(
    `background: ${"#" + Math.floor(Math.random() * 16777215).toString(16)};`
  );
  return (
    <Container>
      {(() => {
        const items = [];
        for (let i = 0; i < 5; i++) {
          items.push(
            <GridChild item xs={2} key={i}>
              hoge
            </GridChild>
          );
        }
        return (
          <GridParent container justify="center">
            {items}
          </GridParent>
        );
      })()}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 70%;
  border: black;
  min-width: 500px;
  background: white;
  margin-left: 5%;
`;
const GridParent = styled(Grid)`
  height: 100%;
  width: 100%;
`;
const GridChild = styled(Grid)`
  ${() => colorGen()}
`;

export default Simulator;
