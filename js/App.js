import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { View, Text } from "react-native";
import { addNavigationHelpers } from "react-navigation";
import store from "./store";
import Navigator from "./router";

const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

const mapStateToProps = state => ({
  text: state.main.text,
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
);
