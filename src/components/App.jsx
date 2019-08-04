import * as React from 'react';
import {
  BaseField,
  TextField,
  Button
} from 'pipestyle';
import Table from './Table';

class App extends React.Component {
  state = {
    apiKey: '',
    cursor: '',
    databaseID: '',
    nodes: [],
  }

  onTextChange = event => {
    event.preventDefault();

    const { name, value } = event.target;

    switch (name) {
      case 'apiKey':
        this.setState({
          apiKey: value,
        });
        break;
      case 'databaseID':
        this.setState({
          databaseID: value
        });
        break;
      default:
        break;
    }
  };

  onFormSubmit = event => {
    event.preventDefault();

    fetch('https://api.pipefy.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.apiKey}`,
      },
      body: JSON.stringify({
        query: `
          {
            table(id: "${this.state.databaseID}") {
              table_records(first: 50, after: ${this.state.cursor}) {
                edges {
                  cursor
                  node {
                    id
                    title
                    record_fields {
                      name
                      value
                    }
                    status {
                      name
                    }
                    created_at
                    updated_at
                    finished_at
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
        }
        `
      })
    }).then(res => {
      return res.json()
    }).then(json => {
      this.setState({
        nodes: json.data.table.table_records.edges.map(edge => edge.node),
      });
    });
  }

  nodesToRows = () => {
    return this.state.nodes.map(node => {
      return [
        node.title, node.status.name, node.created_at, node.updated_at, node.finished_at
      ];
    });
  }

  render() {
    return (
      <div style={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
        <form onSubmit={this.onFormSubmit}>
          <BaseField
            label="GraphQL API Key"
            description="[What is this?](https://developers.pipefy.com/v1.0/reference#authentication)"
          >
            <TextField
              type="password"
              name="apiKey"
              value={this.state.apiKey}
              onChange={this.onTextChange}
            />
          </BaseField>

          <BaseField
            label="Database ID"
            description="[What is this?](https://app.pipefy.com/database_v2/tables)"
          >
            <TextField
              type="text"
              name="databaseID"
              value={this.state.databaseID}
              onChange={this.onTextChange}
            />
          </BaseField>

          <Button type="submit">
            Submit
          </Button>
        </form>

        <Table
          headerCells={['TITLE', 'STATUS', 'CREATED AT', 'UPDATED AT', 'FINISHED AT']}
          bodyRows={this.nodesToRows()}
        />
      </div>
    );
  }
};

export default App;
