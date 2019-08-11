import * as React from 'react';

const TableHeader = ({ labels }) => {
  return (
    <thead>
      <tr>
        {labels.map((label, index) =>
          <th key={index}>{label}</th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
