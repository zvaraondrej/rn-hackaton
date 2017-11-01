import { combineReducers } from "redux";

import main from "./main.reducer";
import nav from "./nav.reducer";

export default combineReducers({
  main,
  nav
});
