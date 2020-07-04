import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogin, postCreateEvent, postCreateUser } from '../actions/user';
import { getEvents } from '../actions/event';

const UserScreen = (props) => {
  const onLogin = () => {
    const email = 'a@gmail.com';
    const password = 'a@gmail.com';
    const query = {
      query: `
        {
          login(email:"${email}", password:"${password}") {
            userId
  
            token
            tokenExpiration
          }
        }
       `,
    };

    props.getLogin(query);
  };

  const onBookEvent = () => {
    const query = {
      query: `
        mutation {
          createEvent(eventInput: {title: "third event", description: "third des", price: 1, date: "2020-06-29T14:03:25.534Z"}) {
            _id
            title
            description
          }
        }
       `,
    };
    props.postCreateEvent(query);
  };

  const onGetEvents = () => {
    const query = {
      query: `{
        events {
          _id
        }
      } `,
    };
    props.getEvents(query);
  };

  const onCreateUser = () => {
    const email = 'c@gmail.com';
    const password = 'c@gmail.com';

    props.postCreateUser(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button style={{ marginVertical: 4 }} onPress={onLogin}>
        Login
      </Button>
      <Button style={{ marginVertical: 4 }} onPress={onBookEvent}>
        Book Event
      </Button>
      <Button style={{ marginVertical: 4 }} onPress={onGetEvents}>
        Get Events
      </Button>

      <Button style={{ marginVertical: 4 }} onPress={onCreateUser}>
        Create User
      </Button>
      <Text>{props.login.userId}</Text>
      <Text>{props.login.token}</Text>
    </SafeAreaView>
  );
};

UserScreen.propTypes = {
  getLogin: PropTypes.func,
  login: PropTypes.object,
  postCreateEvent: PropTypes.func,
  getEvents: PropTypes.func,
  postCreateUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  login: state.user.login,
});

export default connect(mapStateToProps, {
  getLogin,
  postCreateEvent,
  getEvents,
  postCreateUser,
})(UserScreen);
