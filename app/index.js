import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowPage from './show-page';
import '../application.scss';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route
          path="/"
          render={props => {
            return (
              <ShowPage />
            );
          }}
        />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
