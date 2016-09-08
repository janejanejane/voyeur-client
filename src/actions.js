
export const RECIEVED_USER_NOT_AUTHORIZED = 'RECIEVED_USER_NOT_AUTHORIZED';
export const RECIEVED_USER_UNKNOWN = 'RECIEVED_USER_UNKNOWN';
export const REQUEST_LATEST_IMAGE = 'REQUEST_LATEST_IMAGE';
export const RECIEVED_LATEST_IMAGE = 'RECIEVE_LATEST_IMAGE';
export const LOADED_USER_INFO = 'LOADED_USER_INFO';

const AWS = window.AWS;
let Lambda;

function recievedUserUnknown( response ) {
  return {
    type: RECIEVED_USER_UNKNOWN,
    response,
  };
}

function recievedUserNotAuthorized( response ) {
  return {
    type: RECIEVED_USER_NOT_AUTHORIZED,
    response,
  };
}

function requestLatestImage() {
  return {
    type: REQUEST_LATEST_IMAGE,
  };
}

function recievedLatestImage( json ) {
  return {
    type: RECIEVED_LATEST_IMAGE,
    data: json,
  };
}

export function fetchLatestImage() {
  return dispatch => {
    dispatch( requestLatestImage() );
    const p = new Promise(
      ( resolve, reject ) => {
        const params = {
          FunctionName: 'voyeur-getLatest',
          InvocationType: 'RequestResponse',
          LogType: 'None',
        };
        Lambda.invoke( params, function ( err, data ) {
          if ( err ) {
            console.log( err, err.stack );
            reject( err );
          } else {
            console.log( data );
            resolve( data );
          }
        } );
      }
    );
    return p
      .then( response => {
        console.log( 'Dispatching??' );
        dispatch( recievedLatestImage( response.Payload ) );
        console.log( 'Really...' );
      } );
  };
}
export function getUserDetails( userId ) {
  return dispatch => {
    console.log( 'Get user details' );
    const p = new Promise(
            ( resolve, reject ) => {
              FB.api(
                    '/' + userId,
                    function ( response ) {
                      console.log( 'hello', response );
                      if ( response && !response.error ) {
                        console.log( 'userdetails response: ', response );
                        resolve( response );
                      }
                    }
                );
            }
        );

    return p
            .then( response => {
              console.log( '===============================' );
              dispatch( {
                type: LOADED_USER_INFO,
                response,
              } );
            } );
  };
}
