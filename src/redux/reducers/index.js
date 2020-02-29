import { combineReducers } from 'redux';
import tableitemReducer from './tableitemReducer';
import tableReducer from './tableReducer';
export default combineReducers({
  tableitem:tableitemReducer,
  table:tableReducer
});