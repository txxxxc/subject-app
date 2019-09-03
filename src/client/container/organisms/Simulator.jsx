import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import GridChild from 'client/components/molecules/GridChild';
import GridFlex from 'client/components/molecules/GridFlex';
import GridDummy from 'client/components/molecules/GridDummy';
import { amBlocks, pmBlocks, allBlocks } from 'client/config/blocks';

const Simulator = () => {
  const [blocks, setBlocks] = useState({
    I_A: '',
    I_B: '',
    II_A: '',
    II_B: '',
    III_A: '',
    III_B: '',
    IV_A: '',
    IV_B: '',
    V_A: '',
    V_B: '',
    VI: '',
    LHR: ''
  });

  const setSubject = (block, name) => {
    console.log(`${name}を${block}に挿入します `);
    console.log('before', blocks);
    //setBlocksのところに問題ありそう
    setBlocks(prevState => {
      return { ...prevState, [block]: name };
    });
    console.log('after', blocks);
  };

  useEffect(() => {
    allBlocks.map(block => {
      let subjectName = localStorage[block];
      if (subjectName) {
        //localStorageには保存されているけどそれをsetできない
        setSubject(block, subjectName);
      }
    });
  }, []);

  const initializeAmGrid = blockNames => {
    const amItems = [];
    blockNames.map((block, index) => {
      amItems.push(<GridDummy item xs={1} key={`am-first-${index}`} />);
      block.map((value, i) => {
        amItems.push(
          <GridChild
            item
            xs={2}
            key={`${index}-${i}`}
            value={value}
            block={value}
            setSubject={setSubject}
          >
            {/* hoge[value] ならいけるけど、hoge.valueだと無理 */}
            {blocks[value]}
          </GridChild>
        );
      });
      amItems.push(<GridDummy item xs={1} key={`am-last-${index}`} />);
    });
    return amItems;
  };
  const initializePmGrid = blockNames => {
    const pmItems = [];
    blockNames.map((block, index) => {
      pmItems.push(<GridDummy item xs={1} key={`pm-first-${index}`} />);
      block.map((value, i) => {
        pmItems.push(
          <GridChild
            item
            xs={2}
            key={`${index}-${i}`}
            value={value}
            block={value}
            setBlock={setSubject}
          >
            {blocks[value]}
          </GridChild>
        );
      });
      pmItems.push(<GridDummy item xs={1} key={`pm-last-${index}`} />);
    });
    return pmItems;
  };
  const amResult = initializeAmGrid(amBlocks);
  const pmResult = initializePmGrid(pmBlocks);
  //どうしてこの時点で一つだけ授業が記憶されているのか
  console.log(blocks);
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
