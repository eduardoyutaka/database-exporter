export const fetchDatabaseRecords = (databaseID, cursor, apiKey) => {
  return dispatch => {
    return fetch('https://api.pipefy.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        query: `
          {
            table(id: "${databaseID}") {
              table_records(first: 50, after: "${cursor}") {
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
      return res.json();
    }).then(json => {
      dispatch({
        type: 'FETCH_DATABASE_RECORDS',
        databaseRecords: json.data.table.table_records.edges.map(edge => edge.node),
      });

      const endCursor = json.data.table.table_records.pageInfo.endCursor;
      const hasNextPage = json.data.table.table_records.pageInfo.hasNextPage;

      if (hasNextPage) {
        fetchDatabaseRecords(databaseID, endCursor, apiKey)(dispatch);
      }
    });
  };
};
