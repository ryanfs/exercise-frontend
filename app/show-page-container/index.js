import React, { Component } from 'react';
import ShowPage from '../show-page';
import ShowNav from '../show-nav';
import { Redirect } from "react-router-dom";

class ShowPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showsById: {},
      loading: true,
      currentId: '',
      shouldRedirect: false
    };
  }

  componentDidMount() {
    if (!this.props.match.location.search.length) {
      this.setState({shouldRedirect: true})
    }
    const currentId = this.props.match.location.search.substring(4);
    // TODO: improve how i'm getting current id
    const showsById = {};
    this.getAllShows().then(shows => {
      shows.forEach(show => {
        showsById[show.id] = show;
      });
      this.setState({showsById, loading: false, currentId});
    })
  }

  componentDidUpdate(prevProps) {
    const currentId = this.props.match.location.search.substring(4);
    if (this.props.match.location.search !== prevProps.match.location.search) {
      this.setState({currentId, shouldRedirect: false})
    }
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
    const { loading, currentId, showsById, shouldRedirect } = this.state;

    if (loading) {
      return <div>Loading shows...</div>;
    }

    if (shouldRedirect) {
      return <Redirect to="/?id=a1" />
    }

    return (
        <div className="page-container">
          <ShowPage show={showsById[currentId]} />
          <ShowNav shows={showsById} currentId={currentId} />
        </div>
    );
  }
}

export default ShowPageContainer;
