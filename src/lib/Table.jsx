import * as React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ headerLabels, bodyRows }) => {
  return (
    <table className="pp-table pp-table-content">
      <TableHeader labels={headerLabels} />
      <TableBody rows={bodyRows} />
    </table>
  );
};

export default Table;
