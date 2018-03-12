import React from 'react';
import ReactDOM from 'react-dom';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import { installRelayDevTools } from 'relay-devtools';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { environment } from './Environment';

installRelayDevTools();

ReactDOM.render(
  <QueryRenderer
    environment={ environment }
    query={ graphql`
      query appQuery {
        user {
          ...App_user
        }
      }
    ` }
    variables={{}}
    render={ ({error, props}) => {
      if (props) {
        return <App user={props.user}/>;
      } else {
        return <div>Loading</div>;
      }
    } }
  />,
  document.getElementById('root')
);

registerServiceWorker();