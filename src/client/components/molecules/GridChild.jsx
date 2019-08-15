import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Table from "@material-ui/core/Table";
import Body from "client/components/molecules/TableBody";
import Head from "client/components/molecules/TableHead";

const GridChild = props => {
  const [open, setOpen] = useState(false);
  const [isLoading, setState] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const test = () => {
    handleOpen();
  };
  return (
    <Child item xs={props.xs}>
      <CardContainer>
        <ActionArea onClick={test}>
          <TextArea>
            <BlockText variant="h6">{props.value}</BlockText>
            <SubjectText variant="h5" align="center">
              {props.children}
            </SubjectText>
          </TextArea>
        </ActionArea>
      </CardContainer>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <Table>
            <Head />
            <Body
              value={props.value}
              block={props.block}
              setBlock={props.setBlock}
            />
          </Table>
        </ModalContainer>
      </Modal>
    </Child>
  );
};

const Child = styled(Grid)`
  height: 100px;
`;

const CardContainer = styled(Card)`
  height: 100%;
`;

const TextArea = styled(CardContent)`
  height: 100%;
`;

const ActionArea = styled(CardActionArea)`
  height: 100%;
`;

const BlockText = styled(Typography)`
  height: 40%;
`;

const SubjectText = styled(Typography)`
  height: 60%;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 500px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default GridChild;
