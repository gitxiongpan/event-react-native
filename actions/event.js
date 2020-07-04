/* eslint-disable import/prefer-default-export */
import { SET_EVENTS } from './constants';
import http from './index';

const setEvents = (events) => ({
  type: SET_EVENTS,
  events,
});

export const getEvents = (query) => (dispatch) =>
  new Promise((resolve, reject) => {
    http
      .post('/graphql', query)
      .then((res) => {
        dispatch(setEvents(res.data.data.events));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
