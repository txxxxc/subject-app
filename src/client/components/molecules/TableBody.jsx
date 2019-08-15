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

  const saveOnLocalStorage = (block, name) => {
    localStorage.setItem(block, name);
  };
  console.log(localStorage.I_A);

  if (loading) {
    return <div>loading</div>;
  }
  const rows = [];
  data.subject.map(subject => {
    console.log(subject.name);
    rows.push(
      <TableRow
        hover
        onClick={() => {
          props.setBlock(subject.name);
          props.handleClose();
          saveOnLocalStorage(props.block, subject.name);
        }}
      >
        <TableCell>{subject.class}</TableCell>
        <TableCell>{subject.name}</TableCell>
        <TableCell>{subject.credit}</TableCell>
      </TableRow>
    );
  });

  return <TableBody>{rows}</TableBody>;
};

export default Body;
