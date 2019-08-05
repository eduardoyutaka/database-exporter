import * as React from 'react';
import Form from '../../Form';
import Table from '../../Table';

class App extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
        <Form />
        <Table />
      </div>
    );
  }
};

export default App;
