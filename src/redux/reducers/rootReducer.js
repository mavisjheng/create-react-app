import { combineReducers } from "redux";

import rolloutOperationReducer from "./rolloutOperation";
import statusSelectionReducer from "./statusSelection";
import ringsReducer from "./rings";

export default combineReducers({
  rolloutOperation: rolloutOperationReducer,
  statusSelection: statusSelectionReducer,
  rings: ringsReducer,
});
