import React, { Component } from "react";

import AppContainer from "./../containers/AppContainer/AppContainer";
import IconChanger from "./../containers/IconChanger/IconChanger";
import AppFooter from "./../components/AppFooter/AppFooter";

class Start extends Component {
  render() {
    return (
      <AppContainer>
        <IconChanger />
        <AppFooter />
      </AppContainer>
    );
  }
}

export default Start;
