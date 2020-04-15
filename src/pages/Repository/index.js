import React, { Component } from 'react';

// import { Container } from './styles';

export default class Repository extends Component {
  constructor() {
    super();
    this.setState({
      repository: {},
      issues: [],
    });
  }

  render() {
    const { match } = this.props;
    return <h1>Repository {decodeURIComponent(match.params.repository)}</h1>;
  }
}
