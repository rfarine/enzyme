import { default as React, Component } from 'react';
import Button from './Button';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Button clickEvent="http://google.com" text="Google" size="lg" />
      </div>
    );
  }
}