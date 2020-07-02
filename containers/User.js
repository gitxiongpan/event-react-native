import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogin } from '../actions/user';

const UserScreen = (props) => {
  const onLogin = () => {
    const query = {
      query: `{
        login(email:"test@test.com", password:"tester") {
          userId
          token
          tokenExpiration
        }
      } `,
    };
    props.getLogin(query);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button style={{ marginVertical: 4 }} onPress={onLogin}>
        Login
      </Button>
      <Button style={{ marginVertical: 4 }} onPress={onLogin}>
        Register
      </Button>
    </SafeAreaView>
  );
};

UserScreen.propTypes = {
  getLogin: PropTypes.func,
};

const mapStateToProps = (state) => ({
  count: state.user.count,
});

export default connect(mapStateToProps, { getLogin })(UserScreen);
