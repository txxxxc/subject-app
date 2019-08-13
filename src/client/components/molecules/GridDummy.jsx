import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const GridDummy = props => {
  return <Child item xs={props.xs} key={props.key} />;
};

const Child = styled(Grid)`
  height: 100px;
`;

export default GridDummy;
