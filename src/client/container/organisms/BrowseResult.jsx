import React from "react";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SEARCH_SUBJECTS_BY_BLOCK } from "client/graphql/query";
import { useQuery } from "react-apollo-hooks";

const BrowseResult = props => {
  const { data, error, loading } = useQuery(SEARCH_SUBJECTS_BY_BLOCK, {
    variables: { block: props.blockValue }
  });

  console.log(data);
  return (
    <div>
      <ListItem>
        <ListItemText primary="hoge" />
      </ListItem>
    </div>
  );
};

export default BrowseResult;
