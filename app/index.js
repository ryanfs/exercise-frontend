import React from 'react';
import ReactDOM from 'react-dom';
import ShowPageContainer from './show-page-container';
import '../application.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <ShowPageContainer match={props} />
              );
            }}
          />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
