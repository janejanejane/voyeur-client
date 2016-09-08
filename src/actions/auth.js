
import createHashHistory from 'history/lib/createHashHistory';

export const history = createHashHistory();

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser( response ) {
  history.replaceState( null, '/' );
  const { authResponse } = response;
  return {
    type: LOGIN_USER,
    accessToken: authResponse.accessToken,
    signedRequest: authResponse.signedRequest,
    userID: authResponse.userID,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function handleLoginResponse( dispatch ) {
  return response => {
    console.log( 'Response: ', response );
    if ( response.status === 'connected' ) {
      AWS.config.region = 'ap-northeast-1';
      AWS.config.credentials = new AWS.CognitoIdentityCredentials( {
        IdentityPoolId: 'ap-northeast-1:47201f90-9ef7-4229-93cd-c14afcbe7adf',
        Logins: {
          'graph.facebook.com': response.authResponse.accessToken,
        },
      } );
      AWS.config.credentials.get( function () {
        console.log( 'Gotten creds...', response );
        Lambda = new AWS.Lambda( { apiVersion: '2015-03-31' } );
        dispatch( loginUser( response ) );
        getUserDetails( response.authResponse.userID )( dispatch );
        dispatch( fetchLatestImage() );
      } );
    } else if ( response.status === 'not_authorized' ) {
      dispatch( recievedUserNotAuthorized( response ) );
    } else {
      dispatch( recievedUserUnknown( response ) );
    }
  };
}

export function checkLoginState() {
  return dispatch => {
    const p = new Promise(
      ( resolve, reject ) => {
        FB.getLoginStatus( function ( response ) {
          resolve( response );
        } );
      }
    );
    return p
      .then( response => {
        handleLoginResponse( dispatch )( response );
      } );
  };
}
