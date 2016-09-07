import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'elemental';

import { loginUser, checkLoginState, handleLoginResponse } from '../actions';


const LoginPage = createClass( {
  displayName: 'LoginPage',
  handleClick() {
    const { dispatch } = this.props;

    // dispatch( loginUser() );
    FB.login( ( response ) => {
      handleLoginResponse( dispatch )( response );
    } );
  },
  render() {
    return (
      <Row>
        <Col>
          <p>Our privacy, for your facebook privacy. Fair is fair.</p>
          <Button type="primary" onClick={this.handleClick}> Facebook Login </Button>
        </Col>
      </Row>
    );
  },
} );

function mapStateToProps( state ) {
  const {
    auth,
  } = state;

  return {
    auth,
  };
}

export default connect( mapStateToProps )( LoginPage );
