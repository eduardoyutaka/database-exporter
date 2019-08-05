export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATABASE_RECORDS':
      return state.concat(action.databaseRecords);
    default:
      return state;
  }
};
