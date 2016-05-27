import { default as React, Component } from 'react';
import Button from './Button';
import Form from './Form';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}