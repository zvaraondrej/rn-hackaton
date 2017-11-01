import React from "react";
import PropTypes from "prop-types";
import { Footer, FooterTab, Button, Icon } from "native-base";

export default function AppFooter(props) {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <Icon name="pulse" />
        </Button>
        <Button
          onPress={props.onWeatherPress}
          >
          <Icon name="partly-sunny" />
        </Button>
      </FooterTab>
    </Footer>
  );
};

AppFooter.propTypes = {
  onWeatherPress: PropTypes.func
};
