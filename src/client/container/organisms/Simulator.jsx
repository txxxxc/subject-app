import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import GridChild from 'client/components/molecules/GridChild';
import GridFlex from 'client/components/molecules/GridFlex';
import GridDummy from 'client/components/molecules/GridDummy';
import GridColumn from 'client/components/molecules/GridColumn';
import { amBlocks, pmBlocks, allBlocks } from 'client/config/blocks';

const Simulator = props => {
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
    setBlocks(prevState => {
      return { ...prevState, [block]: name };
    });
  };

  let blocksLength = 0;
  let unSchedule = 0;
  for (let key in blocks) {
    if (blocks[key] === '') {
      unSchedule += 3;
    } else {
      blocksLength++;
    }
  }
  props.setLength(blocksLength);
  props.setUnSchedule(unSchedule);

  const clearBlock = block => {
    localStorage.removeItem(block);
    setBlocks(prevState => {
      return { ...prevState, [block]: '' };
    });
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
            clearBlock={clearBlock}
          >
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
            setSubject={setSubject}
            clearBlock={clearBlock}
          >
            {blocks[value]}
          </GridChild>
        );
      });
      pmItems.push(<GridDummy item xs={1} key={`pm-last-${index}`} />);
    });
    return pmItems;
  };
  // const amResult = initializeAmGrid(amBlocks);
  const pmResult = initializePmGrid(pmBlocks);
  return (
    <Container>
      <Grid container justify="center">
        {amBlocks.map(blockColumn => {
          console.log(blockColumn);

          return (
            <GridColumn
              blockColumn={blockColumn}
              blocks={blocks}
              setSubject={setSubject}
              clearBlock={clearBlock}
            />
          );
        })}
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
