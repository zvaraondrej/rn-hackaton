import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Right, Body, Button, Icon, Title } from "native-base";

export default function AppHeader(props) {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  );
}

AppHeader.propTypes = {};
