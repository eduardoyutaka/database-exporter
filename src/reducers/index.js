import { combineReducers } from 'redux';
import databaseFields from './databaseFields';
import databaseRecords from './databaseRecords';

export default combineReducers({
  databaseFields,
  databaseRecords,
});
