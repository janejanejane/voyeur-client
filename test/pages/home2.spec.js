import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../src/pages/home';

describe( '<Home />', () => {
  describe( 'render', () => {
    it( 'should have a button element', () => {

    it( 'should have an image element', () => {
      const wrapper = shallow( <Home /> );
      expect( wrapper.find( 'img' ) ).to.have.length( 1 );
    } );

  } );
} );
