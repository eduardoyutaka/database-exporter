export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATABASE_FIELDS':
      return state.concat(action.databaseFields);
    default:
      return state;
  }
};
