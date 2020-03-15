import React from 'react';
import ReactDOM from 'react-dom';
import '../application.scss';

class App extends React.Component{
  render(){
    return(
      <div>Hola!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
