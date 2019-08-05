import { connect } from 'react-redux';
import { fetchDatabaseRecords } from '../../actions';
import Form from '../components/Form';

export default connect(
  null,
  { fetchDatabaseRecords }
)(Form);
