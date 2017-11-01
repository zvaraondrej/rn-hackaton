import React, { Component } from "react";
import PropTypes from "prop-types";

import AppContainer from "./../containers/AppContainer/AppContainer";
import AppFooter from "./../components/AppFooter/AppFooter";
import { View, Text } from "react-native";

class Weather extends Component {
  render() {
    return (
      <AppContainer>
        <Text>Hello</Text>
        <AppFooter />
      </AppContainer>
    );
  }
}

export default Weather;
