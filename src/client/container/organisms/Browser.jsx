import React from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { allBlocks, allSubjects } from 'client/config/blocks';
import BrowseResult from 'client/components/molecules/BrowseResult';
import Typography from '@material-ui/core/Typography';

const Browser = () => {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [searchValues, setSearchValues] = React.useState({
    name: '',
    class: '',
    block: ''
  });

  const setValues = name => event => {
    console.log(name);
    setSearchValues({ ...searchValues, [name]: event.target.value });
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
      <Typography variant="h6">検索</Typography>
      <BrowseBox value={value} hidden={0 !== value}>
        <TextField label="Name" onChange={setValues('name')} />
        <Form>
          <InputLabel>ブロック</InputLabel>
          <Select
            label="block"
            value={searchValues.block}
            onChange={setValues('block')}
          >
            {allBlocks.map((value, index) => {
              return (
                <MenuItem value={value} key={index}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Form>
        <Form>
          <InputLabel>教科</InputLabel>
          <Select
            label="class"
            value={searchValues.class}
            onChange={setValues('class')}
          >
            {allSubjects.map((value, index) => {
              return (
                <MenuItem value={value} key={index}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Form>
        <BrowseResult
          name={searchValues.name}
          block={searchValues.block}
          class={searchValues.class}
        />
      </BrowseBox>
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
  height: 80px;
  border: black 1px;
`;

const BrowseBox = styled.div`
  height: 400px;
`;
export default Browser;
