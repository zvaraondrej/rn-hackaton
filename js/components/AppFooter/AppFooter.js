import React from "react";
import PropTypes from "prop-types";
import { Footer, FooterTab, Button, Icon } from "native-base";

export default function AppFooter(props) {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <Icon name="apps" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  );
}

AppFooter.propTypes = {};
