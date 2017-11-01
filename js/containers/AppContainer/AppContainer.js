import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Container } from "native-base";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC"
  }
};

const AppContainer = ({ children }) => {
  return (
    <Container style={styles.container}>
      {children}
    </Container>
  );
};

AppContainer.propTypes = {
  children: PropTypes.any
};

export default AppContainer;
