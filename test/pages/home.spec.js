import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../src/pages/home';

describe ( '<Home />', () => {
  it ( 'should have a button element', () => {
    const wrapper = shallow( <Home /> );
    expect( wrapper.find( 'button' ) ).to.have.length( 1 );
  });
});
