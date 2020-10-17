import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { Loader } from '../components/Loader/Loader'
import { Search } from '../components/Search/Search'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search />

      <div className="row">
        {loading
          ? <Loader />
          : users.map(user => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        }
      </div>
    </>
  )
}