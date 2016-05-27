"use strict";

import React from 'react';
import Form from '../components/Form';
import Button from '../components/Button';
import { mount, shallow } from 'enzyme';
import { default as chai, expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);

describe('<Form/>', () => {
  let props = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
      },
      handleSubmit: sinon.spy(),
      submitting: false,
    };
  let wrapper = shallow(<Form {...props} />);

  it('has props: fields, handleSubmit, and submitting', () => {
    expect(wrapper.props().fields).to.be.defined;
    expect(wrapper.props().handleSubmit).to.be.defined;
    expect(wrapper.props().submitting).to.be.defined;
  });
});