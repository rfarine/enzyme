import { default as React, Component, PropTypes } from 'react';
import cn from 'classnames';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { clickEvent } = this.props;

    console.log('typeof clickEvent: ', typeof clickEvent);

    switch(typeof clickEvent) {
      case 'string':
        window.open(clickEvent);
        break;
      case 'function':
        clickEvent();
        break;
      default:
        return
    }
  }

  render() {
    const { size, text } = this.props;

    const buttonClassNames = cn({
      'btn': true,
      'btn-sm': size === 'sm',
      'btn-lg': size === 'lg',
    });

    return (
      <a className={ buttonClassNames } onClick={ this.onClick }>
        { text }
      </a>
    );
  }
}

Button.propTypes = {
  clickEvent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
  ]).isRequired,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
};