import React from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import { allBlocks } from "client/config/blocks";
import BrowseResult from "client/container/organisms/BrowseResult";

const Browser = () => {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [blockValue, setBlockValue] = React.useState("");
  console.log(blockValue);

  const ChangeBlockValue = event => {
    setBlockValue(event.target.value);
  };

  const menuItems = [];

  allBlocks.map((value, index) => {
    menuItems.push(
      <MenuItem value={value} key={index}>
        {value}
      </MenuItem>
    );
  });

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="on"
        variant="scrollable"
      >
        <BrowseTab label="すべて" />
        <BrowseTab label="教科順" />
        <BrowseTab label="ブロック順" />
      </Tabs>

      <Box value={value} hidden={0 !== value}>
        <Form>
          <InputLabel htmlFor="age-simple">ブロック</InputLabel>
          <Select value={blockValue} onChange={ChangeBlockValue}>
            {menuItems}
          </Select>
        </Form>
        <BrowseResult blockValue={blockValue} />
      </Box>
      <Box value={value} hidden={1 !== value} />
      <Box value={value} hidden={2 !== value} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 20%;
  background: white;
  margin-left: 5%;
`;
const Form = styled(FormControl)`
  width: 100%;
  height: 100px;
  border: black 1px;
`;

const BrowseTab = styled(Tab)``;
export default Browser;
