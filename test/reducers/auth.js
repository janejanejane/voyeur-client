import expect from 'expect';
import * as actions from '../../src/actions/auth';

describe( 'actions', () => {
  it( 'should create an action to logout user', () => {
    const expectedAction = {
      type: actions.LOGOUT_USER,
    };
    expect( actions.logoutUser() ).toEqual( expectedAction );
  } );
} );
