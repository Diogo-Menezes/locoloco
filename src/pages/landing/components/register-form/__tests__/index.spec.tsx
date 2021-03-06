import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import RegisterForm, { Values } from '..';

describe('RegisterForm component', () => {
  const renderProps = {};
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a businessName text field', () => {
      wrapper = shallow(<RegisterForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').props()).toMatchObject({
        name: 'businessName',
        type: 'text',
      });
    });

    it('should render a submit button', () => {
      wrapper = shallow(<RegisterForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
