import * as React from 'react';
import { CSVLink } from 'react-csv';
import Form from '../../Form';
import Table from '../../lib/Table';
import { Button } from 'pipestyle';

const App = ({ tableHeader, tableBody }) => {
  return (
    <div style={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
      <Form />
      <Table
        headerLabels={tableHeader}
        bodyRows={tableBody}
      />
      <Button
        theme="primary"
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <CSVLink style={{ color: 'white' }} data={[tableHeader, ...tableBody]}>
          Download
        </CSVLink>
      </Button>
    </div>
  );
};

export default App;
