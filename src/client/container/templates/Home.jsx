import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import Nav from "../organisms/Nav";
import Result from "../organisms/Result";
import Simulator from "../organisms/Simulator";

const TEST = gql`
  {
    subjects {
      name
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(TEST);
  console.log(data, error, loading);
  return (
    <Template>
      <Nav />
      <Content>
        <Simulator />
        <Right />
      </Content>
      <Result />
    </Template>
  );
};

const Template = styled.div`
  height: 800px;
  width: 100%;
  margin: 0 auto;
  background: ＃F4F5F7;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;
const Right = styled.div`
  height: 100%;
  width: 20%;
  background: white;
  margin-left: 5%;
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
