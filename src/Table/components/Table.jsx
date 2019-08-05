import * as React from 'react';
import TableHeaderContainer from '../containers/TableHeaderContainer';
import TableBodyContainer from '../containers/TableBodyContainer';

const Table = () => {
  return (
    <table className="pp-table pp-table-content">
      <TableHeaderContainer />
      <TableBodyContainer />
    </table>
  );
}

export default Table;
