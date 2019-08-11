import { connect } from 'react-redux';
import { fetchDatabaseRecords, fetchDatabaseFields } from '../../actions';
import Form from '../components/Form';

export default connect(
  null,
  { fetchDatabaseRecords, fetchDatabaseFields }
)(Form);
