import gql from "graphql-tag";

export const SEARCH_SUBJECTS_BY_BLOCK = gql`
  query($block: String) {
    searchSubjectsByBlock(block: $block) {
      name
      block
      class
      credit
    }
  }
`;

export const SEARCH_SUBJECTS_BY_NAME = gql`
  query($name: String!) {
    searchSubjectsByName(name: $name) {
      name
      block
      class
      credit
    }
  }
`;

export const SEARCH_SUBJECTS_BY_CLASS = gql`
  query($class: String!) {
    searchSubjectsByClass(class: $class) {
      name
      block
      class
      credit
    }
  }
`;

export const SEARCH_SUBJECTS_BY_CREDIT = gql`
  query($credit: String!) {
    searchSubjectsByCredit(credit: $credit) {
      name
      block
      class
      credit
    }
  }
`;
