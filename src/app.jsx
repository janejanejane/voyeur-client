import React, { Component } from 'react';
import { connect } from 'react-redux';
import FBLogin from './actions/fb';
import {
  handleLoginResponse,
} from './actions';

// import AppBar from 'material-ui/lib/app-bar';

import { Row, Col } from 'elemental';

const App = React.createClass( {
  displayName: 'LoginPage',

  componentWillMount() {
    <FBLogin />;
  },

  render() {
    return (
      <div>
        <Row>
          <Col xs="33%" sm="25%" lg="33.333%" />
          <Col xs="33%" sm="25%" lg="33.333%">
            <h1>Voyeur Cam</h1>
            { this.props.children }
          </Col>
          <Col xs="33%" sm="25%" lg="33.333%" />
        </Row>

      </div>
    );
  },
} );

function mapStateToProps( state ) {
  const { auth } = state;

  return {
    auth,
  };
}

export default connect( mapStateToProps )( App );
