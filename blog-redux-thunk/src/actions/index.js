import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// redux-thunk middleware extends Action Creators to return functions

// Alternative to memoize of fetchUser, Action Creators within Action Creators
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// Working memoize version of fetchUser, not able to refetchUser
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });

// Works but makes many requests
// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// };

/*
  Issues with Async action creator: 
  1. Async/await not return plain Action objects after transpiled
  2. Promises fixes #1 but Action will reach Reducers before getting API data
  https://www.udemy.com/react-redux/learn/lecture/12586860#content
*/
// This will not work
// const response = await jsonPlaceholder.get("/posts");
// return {
//   type: "FETCH_POSTS",
//   payload: response
// };
