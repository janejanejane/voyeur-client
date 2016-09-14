import React from 'react';

const FbLogin = React.createClass( {
  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init( {
        appId: '1696899793858404',
        xfbml: true,
        version: 'v2.5',
      } );

      FB.getLoginStatus( ( response ) => {
        this.statusChangeCallback( response );
      } );
    };

    ( ( d, s, id ) => {
      const fjs = d.getElementsByTagName( s )[0];
      let js = null;
      if ( d.getElementById( id ) ) {
        return;
      }
      js = d.createElement( s );
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore( js, fjs );
    } )( document, 'script', 'facebook-jssdk' );
  },

  statusChangeCallback( response ) {
    const { dispatch } = this.props;
    handleLoginResponse( dispatch )( response );
  },

  return (
    <div>
      Login to facebook
    </div>
  );
} );

export default FBLogin;
