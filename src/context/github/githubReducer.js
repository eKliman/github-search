import { CLEAR_USERS, SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER, CLEAR_REPOS } from "../types"

const handlers = {
  [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  [CLEAR_USERS]: state => ({...state, users: []}),
  [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
  [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
  [CLEAR_REPOS]: state => ({...state, repos: []}),
  DEFAULT: state => state
}

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}