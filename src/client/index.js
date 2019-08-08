import React, { useState } from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { appClient } from "../graphql/client";
import {
  ApolloProvider as ApolloHooksProvider,
  useMutation,
  useQuery
} from "react-apollo-hooks";
import { ApolloProvider } from "react-apollo";

fetch("/api/").then(response => {
  console.log(response.json());
});

export const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
