import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

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
  const rows = [];
  data.subject.map(i => {
    console.log(i.name);
    rows.push(
      <TableRow
        hover
        onClick={() => {
          props.setBlock(i.name);
        }}
      >
        <TableCell>{i.class}</TableCell>
        <TableCell>{i.name}</TableCell>
        <TableCell>{i.credit}</TableCell>
      </TableRow>
    );
  });

  return <TableBody>{rows}</TableBody>;
};

export default Body;
