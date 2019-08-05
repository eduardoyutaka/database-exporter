import * as React from 'react';
import { CSVLink, CSVDownload } from 'react-csv';
import Form from '../../Form';
import Table from '../../Table';
import { Button } from 'pipestyle';

class App extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
        <Form />
        <Table />
        <Button
          theme="primary"
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          <CSVLink style={{ color: 'white' }} data={this.props.database}>
            Download
          </CSVLink>
        </Button>
      </div>
    );
  }
};

export default App;
