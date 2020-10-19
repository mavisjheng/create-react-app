import { combineReducers } from 'redux';

import rings from 'ducks/modules/rings';
import rolloutOperation from 'ducks/modules/rolloutOperation';
import statusSelection from 'ducks/modules/statusSelection';

export default combineReducers({
  rings,
  rolloutOperation,
  statusSelection,
});
