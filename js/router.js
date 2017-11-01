import { StackNavigator } from "react-navigation";

import Home from "./screens/Home.screen";
import Start from "./screens/Start.screen";

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Start: {
      screen: Start,
      navigationOptions: {
        headerTitle: "Start"
      }
    }
  },
  {
    headerMode: "screen"
  }
);
