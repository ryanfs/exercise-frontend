import React, { Component } from 'react';
import ShowPage from '../show-page';

class ShowPageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showsById: {},
      loading: true,
      currentId: ''
    };
  }

  componentDidMount() {
    const currentId = this.props.match.location.search.substring(4);
    const showsById = {};
    this.getAllShows().then(shows => {
      shows.forEach(show => {
        showsById[show.id] = show;
      });
      this.setState({showsById, loading: false, currentId});
    })
  }

  componentDidUpdate(props, prevProps) {
    // if the url changes, set a new currentShow
  }

  getAllShows() {
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
    const { loading, currentId, showsById } = this.state;

    if (loading) {
      return <div>Loading shows...</div>;
    }
    return (
        <ShowPage show={showsById[currentId]} />
    );
  }
}

export default ShowPageContainer;
