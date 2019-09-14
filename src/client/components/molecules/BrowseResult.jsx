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
    variables: {
      name: props.name,
      block: props.block,
      class: props.class,
      credit: 1
    }
  });

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <ResultList>
      {data.searchSubject.map((block, index) => {
        return (
          <div key={index}>
            <ListItem key={`ListItem${index}`}>
              <ListItemText
                primary={`${block.block} ${block.name}`}
                key={`itemText-${index}`}
              />
            </ListItem>
            <Divider key={`divider-${index}`} />
          </div>
        );
      })}
    </ResultList>
  );
};

const ResultList = styled(List)`
  height: 405px;
  overflow: auto;
`;

const Item = styled(ListItem)``;

export default BrowseResult;
