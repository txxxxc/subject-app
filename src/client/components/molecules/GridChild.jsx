import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const colorGen = () => {
  return `
    background: ${"#" + Math.floor(Math.random() * 16777215).toString(16)};
  `;
};

const GridChild = props => {
  return <Child item xs={props.xs} key={props.key} />;
};

const Child = styled(Grid)`
  height: 100px;
`;

export default GridChild;

//${() => colorGen()}
