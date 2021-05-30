import {greeterContract} from './ethereumSetup';
import React, { Component } from 'react';

export class GreetDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: ""
    }
  }

  componentDidMount() {
    greeterContract.methods.greet().call()
      .then(x => {
        this.setState({
          greeting: x
        });
      });
  }

  render() {
    return (
      <p>{this.state.greeting}</p>
    )
  }
}
