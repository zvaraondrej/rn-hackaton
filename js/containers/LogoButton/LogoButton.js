import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Icon, Button } from "native-base";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#000000",
    marginBottom: 15,
    fontSize: 18
  },
  logo: {
    marginRight: 20
  },
  button: {}
};

const LogoButton = props => {
  return (
    <View style={styles.container}>

      <Icon name="home" />

      <Text style={styles.text}>
        {props.text ? props.text : "Start Here"}
      </Text>
      <Button
        style={styles.button}
        raised
        buttonStyle={{ backgroundColor: { borderRadius: 1 } }}
        textStyle={{ textAlign: "center" }}
        title="NEXT"
        onPress={props.onPress}
      >
        <Text>Click Me! </Text>
      </Button>
    </View>
  );
};

LogoButton.propTypes = {
  onPress: PropTypes.func
};

const mapStateToProps = state => ({
  text: state.main.text
});

export default connect(mapStateToProps)(LogoButton);
