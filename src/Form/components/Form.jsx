import * as React from 'react';
import {
  BaseField,
  TextField,
  Button
} from 'pipestyle';

class Form extends React.Component {
  state = {
    apiKey: '',
    cursor: '',
    databaseID: '',
  };

  onTextInputChange = event => {
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

    this.props.fetchDatabaseFields(this.state.databaseID, this.state.apiKey);
    this.props.fetchDatabaseRecords(this.state.databaseID, this.state.cursor, this.state.apiKey);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <BaseField
          label="GraphQL API Key"
          description="[What is this?](https://developers.pipefy.com/v1.0/reference#authentication)"
        >
          <TextField
            type="password"
            name="apiKey"
            value={this.state.apiKey}
            onChange={this.onTextInputChange}
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
            onChange={this.onTextInputChange}
          />
        </BaseField>

        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
