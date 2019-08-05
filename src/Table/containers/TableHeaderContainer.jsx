import { connect } from 'react-redux';
import TableHeader from '../../components/TableHeader';

const mapStateToProps = state => {
  return {
    cells: ['TITLE', 'STATUS', 'CREATED AT', 'UPDATED AT', 'FINISHED AT']
  };
};

export default connect(
  mapStateToProps,
)(TableHeader);
