import { combineReducers } from "redux";

import rings from "./rings";
import rolloutOperation from "./rolloutOperation";
import statusSelection from "./statusSelection";

export default combineReducers({
  rings,
  rolloutOperation,
  statusSelection,
});
