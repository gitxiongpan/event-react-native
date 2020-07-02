/* eslint-disable import/prefer-default-export */
import { SET_LOGIN_DETAIL } from './constants';
import http from './index';

const setLoginDetail = (loginDetail) => ({
  type: SET_LOGIN_DETAIL,
  loginDetail,
});

export const getLogin = (query) => (dispatch) =>
  new Promise((resolve, reject) => {
    http
      .post('/graphql', query)
      .then((res) => {
        console.log(res);
        dispatch(setLoginDetail(res));
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
