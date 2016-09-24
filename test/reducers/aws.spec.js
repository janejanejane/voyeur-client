import expect from 'expect';
import * as actions from '../../src/actions/auth';

describe( 'actions', () => {
  it( 'should create an action of unknown received user', () => {
    const expectedAction = {
      type: actions.RECIEVED_USER_UNKNOWN,
    };
    expect( actions.recievedUserUnknown() ).toEqual( expectedAction );
  } );

  it( 'should create an action of unknown unauthorized user', () => {
    const expectedAction = {
      type: actions.RECIEVED_USER_NOT_AUTHORIZED,
    };
    expect( actions.recievedUserNotAuthorized() ).toEqual( expectedAction );
  } );
} );
