"use strict";

import React from 'react';
import Button from '../components/Button';
import { mount, shallow } from 'enzyme';
import { default as chai, expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);

describe('<Button/>', () => {
  let wrapper;
  let props;

  it('should have props for clickEvent and text', () => {
    wrapper = shallow(<Button clickEvent="" text="Test" />);

    expect(wrapper.props().clickEvent).to.be.defined;
    expect(wrapper.props().text).to.be.defined;
  });

  it('should open a link in a new window', () => {
    window = {
      open: sinon.spy(),
    };
    props = {
      clickEvent: 'http://www.test.com',
      text: 'Test clickEvent()',
    };
    wrapper = shallow(<Button {...props} />);

    wrapper.find('a').simulate('click');

    expect(window.open).to.have.been.calledWith(props.clickEvent);
  });

  it('should call a clickEvent function', () => {
    props = {
      clickEvent: sinon.spy(),
      text: 'Test clickEvent()',
    };
    wrapper = shallow(<Button {...props} />);

    wrapper.find('a').simulate('click');

    expect(props.clickEvent).to.have.been.called;
  });
});