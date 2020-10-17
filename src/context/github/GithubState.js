import React, { useReducer } from 'react'
import axios from 'axios'
import { CLEAR_USERS, SEARCH_USERS, SET_LOADING } from '../types'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const withCreds = url => `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export const GithubState = ({children}) => {
  const initialState = {
    users: [],
    loading: false
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async value => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    )
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})

  const setLoading = () => dispatch({type: SET_LOADING})

  const {users, loading} = state

  return (
    <GithubContext.Provider value={{
      search, clearUsers, setLoading, users, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}