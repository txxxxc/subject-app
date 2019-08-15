import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

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

  const { data, error, loading } = useQuery(GET_SUBJECT, {
    variables: { block: props.block }
  });

  if (loading) {
    return <div>loading</div>;
  }
  console.log();
  return (
    <TableBody>
      <TableRow hover onClick={() => {
        props.setBlock(data.subject[0].name)
      }}>
        <TableCell>{data.subject[0].class}</TableCell>
        <TableCell>{data.subject[0].name}</TableCell>
        <TableCell>{data.subject[0].credit}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Body;
