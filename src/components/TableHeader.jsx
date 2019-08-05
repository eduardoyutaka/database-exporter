import * as React from 'react';

const TableHeader = ({ cells }) => {
  return (
    <thead>
      <tr>
        {cells.map((cell, index) =>
          <th key={index}>{cell}</th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
