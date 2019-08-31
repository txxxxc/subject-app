import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Result = () => {
  return (
    <Container>
      <Content>
        <Typography variant="h2" gutterBottom>
          取得単位
        </Typography>
        <Typography variant="h2" gutterBottom>
          合計休み時間
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
