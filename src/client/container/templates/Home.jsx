import React, { useState } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Nav from 'client/container/organisms/Nav';
import Result from 'client/container/organisms/Result';
import Simulator from 'client/container/organisms/Simulator';
import Browser from 'client/container/organisms/Browser';

const Home = () => {
  const [length, setLength] = useState(0);
  const [unSchedule, setUnSchedule] = useState(0);
  return (
    <Template>
      <Nav />
      <Content>
        <Simulator setLength={setLength} setUnSchedule={setUnSchedule} />
        <Browser />
      </Content>
      <Result length={length} unSchedule={unSchedule} />
    </Template>
  );
};

const Template = styled.div`
  height: 1600px;
  width: 100%;
  margin: 0 auto;
  background: ＃F4F5F7;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;
export default Home;

// const Content = styled.div`
//   display: flex;
//   width: 100%;
//   height: 90%;
// `;
// const Left = styled.div`
//   height: 100%;
//   width: 65%;
//   border: black;
//   min-width: 500px;
//   background: white;
//   margin-left: 3%;
// `;
// const Right = styled.div`
//   height: 100%;
//   width: 27%;
//   background: white;
//   margin-left: 5%;
// `;
