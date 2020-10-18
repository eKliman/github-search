import React from 'react'

export const Repos = ({repos}) => {
  const capitalize = (string) => {
    if (typeof string !== 'string') {
      return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <>
      {repos.map(repo => (
        <div className="card mb-3" key={repo.id}>
          <div className="card-body">
            <h5>
              <a
                href={repo.html_url}
                rel="noopener noreferrer"
                target="_blank"
              >{capitalize(repo.name)}</a>
              {repo.description && <p className="h6 mt-3">{repo.description}</p>}
            </h5>
          </div>
        </div>
      ))}
    </>
  )
}