import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const GridFlex = props => {
  return (
    <>
      <SubFlex item xs={1} key={props.key} key="child1" />
      <MainFlex item xs={10} key={props.key} key={10} />
      <SubFlex item xs={1} key={props.key} key="child2" />
    </>
  );
};

const SubFlex = styled(Grid)`
  height: 30px;
`;

const MainFlex = styled(SubFlex)`
  background: black;
`;

export default GridFlex;
