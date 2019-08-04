import * as React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ headerCells, bodyRows }) => {
  return (
    <table className="pp-table pp-table-content">
      <TableHeader cells={headerCells} />
      <TableBody rows={bodyRows} />
    </table>
  );
};

export default Table;
