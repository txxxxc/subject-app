import React from 'react';
import GridChild from 'client/components/molecules/GridChild';
import GridDummy from 'client/components/molecules/GridDummy';

const GridColumn = props => {
  console.log(props.blockColumn);

  return (
    <>
      <GridDummy item xs={1} />
      {props.blockColumn.map((value, i) => (
        <GridChild
          item
          xs={2}
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
