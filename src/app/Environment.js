import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';
  import { API_URL } from '../common/constants';
  
  const source = new RecordSource();
  const store = new Store(source);
  const network = Network.create(async (operation, variables) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
    return response.json();
  });
  
  export const environment = new Environment({
    network,
    store
  });