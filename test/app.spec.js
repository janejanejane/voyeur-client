import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import App from '../../app';

describe( 'app', () => {
  describe( 'componentWillMount', () => {
    it( 'loads once', () => {
      const component = spy( App.prototype, 'componentDidMount' );
      mount( <App /> );

      expect( component.calledOnce ).to.equal( true );
    } );
  } );
} );
