import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const GridFlex = props => {
  return (
    <>
      <SubFlex item xs={1} />
      <MainFlex item xs={10} />
      <SubFlex item xs={1} />
    </>
  );
};

const SubFlex = styled(Grid)`
  height: 30px;
`;

const MainFlex = styled(SubFlex)`
  border: 1px black;
`;

export default GridFlex;
