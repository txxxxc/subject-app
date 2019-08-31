import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { SEARCH_SUBJECT } from 'client/graphql/query';
import { useQuery } from 'react-apollo-hooks';
import Divider from '@material-ui/core/Divider';

const BrowseResult = props => {
  const { data, error, loading } = useQuery(SEARCH_SUBJECT, {
    variables: { name: props.name, block: props.block, class: props.class }
  });

  const searchSubjectResults = [];

  data &&
    data.searchSubject.map((block, index) => {
      console.log(index);
      searchSubjectResults.push(
        <>
          <ListItem key={index}>
            <ListItemText
              primary={`${block.name} ${block.block} ${block.class}`}
              key={`itemText-${index}`}
            />
          </ListItem>
          <Divider key={`divider-${index}`} />
        </>
      );
    });
  return <ResultList component="nav">{searchSubjectResults}</ResultList>;
};

const ResultList = styled(List)`
  height: 400px;
  overflow: auto;
`;

export default BrowseResult;
