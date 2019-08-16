import React from "react";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SEARCH_SUBJECT } from "client/graphql/query";
import { useQuery } from "react-apollo-hooks";

const BrowseResult = props => {
  const { data, error, loading } = useQuery(SEARCH_SUBJECT, {
    variables: { block: props.block }
  });
  console.log("SEARCH_SUBJECT", data);
  return (
    <div>
      <ListItem>
        <ListItemText primary="hoge" />
      </ListItem>
    </div>
  );
};

export default BrowseResult;
