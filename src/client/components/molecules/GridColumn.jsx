import React from 'react';
import GridChild from 'client/components/molecules/GridChild';
import GridDummy from 'client/components/molecules/GridDummy';

const GridColumn = props => {
  return (
    <>
      <GridDummy item xs={1} />
      {props.blockColumn.map((value, i) => (
        <GridChild
          item
          xs={2}
          key={value + i}
          value={value}
          block={value}
          setSubject={props.setSubject}
          clearBlock={props.clearBlock}
        >
          {props.blocks[value]}
        </GridChild>
      ))}
      <GridDummy item xs={1} />
    </>
  );
};

export default GridColumn;
