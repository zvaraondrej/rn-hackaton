import React, { Component } from "react";
import PropTypes from "prop-types";

import AppContainer from "./../containers/AppContainer/AppContainer";
import LogoButton from "./../containers/LogoButton/LogoButton";

import AppHeader from "./../components/AppHeader/AppHeader";
import AppFooter from "./../components/AppFooter/AppFooter";

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <AppContainer>
        <AppHeader />
        <LogoButton onPress={() => this.props.navigation.navigate("Start")} />
        <AppFooter />
      </AppContainer>
    );
  }
}

export default Home;
