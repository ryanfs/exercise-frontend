import React, { Component } from 'react';

class ShowPage extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { show } = this.props;
    return (
        <div>{show.title}</div>
    );
  }
}

export default ShowPage;
