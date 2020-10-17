import React, { useContext, useState } from 'react'
import { AlertContext } from '../../context/alert/alertContext'
import { GithubContext } from '../../context/github/githubContext'
import './Search.scss'

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    event.preventDefault()
    github.clearUsers()
    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Enter user data!')
    }
  }

  const clear = () => {
    setValue('')
    github.clearUsers()
  }
  return (
    <form onSubmit={event => onSubmit(event)}>
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter username..." 
          aria-label="username input field"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <div className="input-group-append" id="button-addon4">
          <button className="btn btn-primary" type="bsubmit">Search</button>
          <button className="btn btn-secondary" type="button" onClick={clear}>Clear results</button>
        </div>
      </div>
    </form>
  )
}