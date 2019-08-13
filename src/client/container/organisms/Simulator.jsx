import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const colorGen = () => {
  return `
    background: ${"#" + Math.floor(Math.random() * 16777215).toString(16)};
  `;
};

const Simulator = () => {
  const [a, b] = useState('')
  console.log(
    `background: ${"#" + Math.floor(Math.random() * 16777215).toString(16)};`
  );
  const amBlocks = [
    ['one-a', 'two-b', 'three-a', 'two-a', 'three-b'],
    ['two-a', 'one-a', 'two-a', 'two-b', 'two-b'],
    ['three-a', 'one-b', 'four-b', 'one-a', '6'],
    ['5-a', 'four-b', 'four-a', '5-a', 'four-b',],
  ]
  const pmBlocks = [
    ['5-a', 'four-b', '5-a', 'four-a', '5-b',],
    ['6', '6', '5-b', 'three-b', 'one-b',],
    ['LHR', 'three-b', 'one-b', '6', 'three-a',]
  ]
  const initializeAmGrid = (blocks) => {
    const amItems = [];
    blocks.map((block,index) => {
      amItems.push(
        <GridChild item xs={1} key={`am-first-${index}`}>
        </GridChild>
      )
      block.map((value,i) => {
        amItems.push(
          <GridChild item xs={2} key={`${index}-${i}`}>
            {`${value}`+ 'block'}
          </GridChild>
        )
      })
      amItems.push(
        <GridChild item xs={1} key={`am-last-${index}`}>
        </GridChild>
      )
    })
    return amItems;
  };
  const intializePmGrid = (block) => {
    const pmItems = [];
    blocks.map((block, index) => {
      pmItems.push(
        <GridChild item xs={1} key={`pm-first-${index}`}>
        </GridChild>
      )
      block.map((value, i) => {
        pmItems.push(
          <GridChild item xs={2} key={`${index}-${i}`}>
            {`${value}`}
          </GridChild>
        )
      })
      pmItems.push(
        <GridChild item xs={1} key={`pm-last-${index}`}>
        </GridChild>
      )
    })
    return pmItems;
  }
  const amResult = initializeAmGrid(amBlocks)
  const pmResult = initializeAmGrid(pmBlocks)
  return (
    <Container>
      <GridParent container justify="center">
        {amResult}
      <GridChild item xs={12} key='12'></GridChild>
        {pmResult}
      </GridParent>
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
const GridParent = styled(Grid)`
  height: 100px;
  width: 100%;
`;
const GridChild = styled(Grid)`
  ${() => colorGen()}
  height: 100%;
`;

export default Simulator;
// if (i = 5) {
//   items.push(
//     <GridChild item xs={12} key='flex'>
//       hoge
//             </GridChild>
//   );
// } else { }