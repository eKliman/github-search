import React, { useContext, useEffect } from 'react'
import { Loader } from '../components/Loader/Loader'
import { Repos } from '../components/Repos'
import {GithubContext} from '../context/github/githubContext'

export const Profile = ({match}) => {
  const {getUser, getRepos, clearRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    return () => clearRepos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (loading) {
    return <Loader />
  }

  const {
    name, company, avatar_url,
    location, bio, blog, login, 
    html_url, followers, following,
    public_repos, public_gists
  } = user

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center userInfo">
              <img 
                className="mb-3"
                src={avatar_url} 
                alt={name} 
                style={{width: '150px'}}
              />
              <h3>{name}</h3>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h4>BIO</h4>
                  <p>{bio}</p>
                </>
              }
              <a 
                href={html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-info mb-2"
              >Open profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>

              <div className="badge badge-primary mr-2 p-1">Followers: {followers}</div>
              <div className="badge badge-primary mr-2 p-1">Following: {following}</div>
              <div className="badge badge-primary mr-2 p-1">Repositories: {public_repos}</div>
              <div className="badge badge-primary p-1">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  )
}