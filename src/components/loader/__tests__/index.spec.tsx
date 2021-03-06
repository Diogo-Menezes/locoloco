import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { shallow } from 'enzyme';

import Loader from '..';

describe('Loader component', () => {
  let renderProps;
  let wrapper;

  beforeEach(() => {
    renderProps = {};
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a spinner', () => {
      wrapper = shallow(<Loader {...renderProps} />);
      expect(wrapper.find(CircularProgress).length).toEqual(1);
    });

    it('should render a message if message prop value is truthy', () => {
      renderProps.message = 'Some message';
      wrapper = shallow(<Loader {...renderProps} />);
      expect(wrapper.find(Typography).childAt(0).text()).toEqual(renderProps.message);
    });
  });
});
