import { StackNavigator } from "react-navigation";

import Home from "./screens/Home.screen";
import Start from "./screens/Start.screen";
import Weather from "./screens/Weather.screen";

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
    },
    Weather: {
      screen: Weather,
      navigationOptions: {
        headerTitle: "Weather"
      }
    }
  },
  {
    headerMode: "screen"
  }
);
