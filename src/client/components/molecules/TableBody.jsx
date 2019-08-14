import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const GET_SUBJECT = gql`
  query($block: String!) {
    subject(block: $block) {
      name
      block
      class
      credit
    }
  }
`;

const Body = props => {
  console.log(props.block);
  const { data, error, loading } = useQuery(GET_SUBJECT, {
    variables: { block: props.block }
  });
  if (loading) {
    return <div>loading</div>;
  }
  console.log();
  return (
    <TableBody>
      <TableRow>
        <ListItem button>
          <TableCell>{data.subject[0].class}</TableCell>
          <TableCell>{data.subject[0].name}</TableCell>
          <TableCell>{data.subject[0].credit}</TableCell>
        </ListItem>
      </TableRow>
    </TableBody>
  );
};

export default Body;
