import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { SEARCH_SUBJECTS_BY_BLOCK } from 'client/graphql/query';

const Body = props => {
  const { data, error, loading } = useQuery(SEARCH_SUBJECTS_BY_BLOCK, {
    variables: { block: props.block }
  });

  const saveOnLocalStorage = (block, name) => {
    localStorage.setItem(block, name);
  };

  if (loading) {
    return <div>loading</div>;
  }
  const rows = [];
  data.searchSubjectsByBlock.map(searchSubjectsByBlock => {
    rows.push(
      <TableRow
        hover
        onClick={() => {
          props.setSubject(props.block, searchSubjectsByBlock.name);
          props.handleClose();
          saveOnLocalStorage(props.block, searchSubjectsByBlock.name);
        }}
      >
        <TableCell>{searchSubjectsByBlock.class}</TableCell>
        <TableCell>{searchSubjectsByBlock.name}</TableCell>
        <TableCell>{searchSubjectsByBlock.credit}</TableCell>
      </TableRow>
    );
  });
  return <TableBody>{rows}</TableBody>;
};

export default Body;
