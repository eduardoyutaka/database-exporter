import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    database: [['TITLE', 'STATUS', 'CREATED AT', 'UPDATED AT', 'FINISHED AT']].concat(state.databaseRecords.map(databaseRecord => {
      return [
        databaseRecord.title, databaseRecord.status.name, databaseRecord.created_at, databaseRecord.updated_at, databaseRecord.finished_at
      ];
    })),
  };
};

export default connect(
  mapStateToProps
)(App);
