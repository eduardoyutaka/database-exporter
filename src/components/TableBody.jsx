import * as React from 'react';
import TableRow from './TableRow';

const TableBody = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row, index) =>
        <TableRow key={index} cells={row} />
      )}
    </tbody>
  );
};

export default TableBody;
