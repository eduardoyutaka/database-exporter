import { connect } from 'react-redux';
import TableBody from '../../components/TableBody';

const mapStateToProps = state => {
  return {
    rows: state.databaseRecords.map(databaseRecord => {
      return [
        databaseRecord.title, databaseRecord.status.name, databaseRecord.created_at, databaseRecord.updated_at, databaseRecord.finished_at
      ];
    }),
  };
};

export default connect(
  mapStateToProps
)(TableBody);
