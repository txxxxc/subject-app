import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Head = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>分野</TableCell>
        <TableCell>科目名</TableCell>
        <TableCell>単位</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
