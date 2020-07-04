import { SET_LOGIN_DETAIL, SET_USER } from './constants';

import http from './index';

const setLoginDetail = (login) => ({
  type: SET_LOGIN_DETAIL,
  login,
});

const setUser = (createUser) => ({
  type: SET_USER,
  createUser,
});

export const getLogin = (query) => (dispatch) =>
  new Promise((resolve, reject) => {
    http
      .post('/graphql', query)
      .then((res) => {
        console.log(res);
        dispatch(setLoginDetail(res.login));
        // update jwt token
        http.defaults.headers.post.Authorization = `Bearer ${res.login.token}`;
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const postCreateUser = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    const query = {
      query: `
        mutation {
          createUser(userInput:{email:"${email}", password:"${password}"}) {
            _id
            email
            password
           
          }
        }
      `,
    };

    http
      .post('/graphql', query)
      .then((res) => {
        dispatch(setUser(res.data.data.createUser));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const postCreateEvent = (query) => (dispatch) =>
  new Promise((resolve, reject) => {
    http
      .post('/graphql', query)
      .then((res) => {
        console.log('zzzxc');
        dispatch();
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

// export const postLogin = (query) => (dispatch) =>
//   new Promise((resolve, reject) => {
//     http
//       .get('/comment/substorage/', {
//         params: {
//           video_id: videoId,
//         },
//       })
//       .then((res) => {

//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
