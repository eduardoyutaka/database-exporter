import { connect } from 'react-redux';
import { getTableHeader, getTableBody } from '../helpers/AppHelpers';
import App from '../components/App';

const mapStateToProps = ({ databaseFields, databaseRecords }) => {
  return {
    tableHeader: getTableHeader(databaseFields),
    tableBody: getTableBody(databaseRecords),
  };
};

export default connect(
  mapStateToProps,
)(App);
