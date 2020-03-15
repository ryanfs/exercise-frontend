import React, { Component } from 'react';
import ShowPage from '../show-page';

class ShowPageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shows: [],
      currentShow: {
        title: 'placeholder'
      }
    };
  }

  componentDidMount() {
    this.getShows().then(shows => {
      this.setState({shows}, () => {
        // setCurrentShow
      })
    })
  }

  componentDidUpdate(props, prevProps) {
    // if the url changes, set a new currentShow
  }

  getShows() {
    return fetch('/shows', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      return response.json();
    })
  }

  render() {
    const { currentShow, shows } = this.state;

    if (shows.length === 0) {
      return <div>Loading shows...</div>;
    }
    return (
        <ShowPage show={currentShow} />
    );
  }
}

export default ShowPageContainer;
