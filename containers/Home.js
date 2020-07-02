import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { TopTabs } from '../components/TopTabs';
import ThemeContext from '../theme-context';
import http from '../actions/index';

const HomeScreen = (props) => {
  const themeContext = React.useContext(ThemeContext);
  const [events, setEvents] = useState([]);

  const navigateDetails = () => {
    props.navigation.navigate('Details');
  };

  const navigateUser = () => {
    props.navigation.navigate('User');
  };

  const query = {
    query: `{
      events {
        title
        date
        creator {
          _id
          email
        }
      }
    } `,
  };

  useEffect(() => {
    http
      .post('/graphql', query)
      .then((res) => {
        setEvents(res.data.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTabs />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {events.map((event) => (
          <Button key={event.title} style={{ marginVertical: 4 }} onPress={navigateDetails}>
            {event.title}
          </Button>
        ))}
        <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
          TOGGLE THEME {props.count}
        </Button>
        <Button style={{ marginVertical: 4 }} onPress={navigateUser}>
          User
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {
  count: PropTypes.number,
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({
  count: state.user.count,
});

export default connect(mapStateToProps, {})(HomeScreen);
