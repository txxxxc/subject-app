import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Result = props => {
  return (
    <Container>
      <Content>
        <Typography variant="h5" gutterBottom>
          取得単位: {props.length}
        </Typography>
        <Typography variant="h5" gutterBottom>
          合計休み時間: {props.unSchedule}
        </Typography>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 40%;
  width: 70%;
  margin-top: 5%;
  margin-left: 5%;
  background: white;
`;

const Content = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 30px;
  margin-left: 30px;
`;

export default Result;
