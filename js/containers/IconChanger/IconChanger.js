import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import * as actions from "./../../actions/main.actions";

const inputWidth = Dimensions.get("window").width;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "600%"
  },
  text: {
    color: "#000000",
    marginBottom: 10
  },
  input: {
    height: 40,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 2,
    textAlign: "center",
    width: inputWidth / 1.2
  }
};

class IconChanger extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  onSubmitText(text) {
    this.props.actions.helloWorld(text);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>
          Change main Page {this.props.text}
        </Text>

        <TextInput
          placeholder="Enter new text"
          style={styles.input}
          onChangeText={text => this.onSubmitText(text)}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  text: state.main.text
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IconChanger);
