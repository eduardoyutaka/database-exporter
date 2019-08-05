import { connect } from 'react-redux';
import { fetchDatabaseRecords } from '../../actions';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    databaseRecords: state.databaseRecords,
  };
};

export default connect(
  mapStateToProps,
  { fetchDatabaseRecords }
)(App);
