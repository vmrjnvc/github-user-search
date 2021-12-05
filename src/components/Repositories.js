import React, { useEffect, useState } from 'react'
import SearchRepositories from './SearchRepositories'
import axios from 'axios'
import PropTypes from 'prop-types'

function Repositories({ userUsername, errorMsg, setErrorMsg }) {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const getRepos = async () => {
      if (userUsername.length > 0)
        try {
          const response = await axios.get(
            `https://api.github.com/users/${userUsername}/repos`
          )
          setRepos(response.data)
        } catch (error) {
          setErrorMsg(error.message)
          console.log(error)
          setTimeout(() => {
            setErrorMsg(null)
          }, 4000)
        }
    }
    getRepos()
  }, [userUsername, setErrorMsg])
  return (
    <>
      {errorMsg && <p className='error'>Something went wrong! {errorMsg} </p>}
      <div className='repos-container'>
        <h1>
          <span>{userUsername}</span> repositories
        </h1>
        <div className='repos-grid'>
          {repos.length > 0 ? (
            repos.map((repo, i) => {
              return (
                <SearchRepositories
                  name={repo.name}
                  description={repo.description}
                  link={repo.html_url}
                  created={repo.created_at}
                  stargazers={repo.stargazers_count}
                  watchers={repo.watchers_count}
                  forks={repo.forks_count}
                  license={repo.license ? repo.license.key : null}
                  key={i}
                />
              )
            })
          ) : (
            <h1 className='empty-repo'>
              This user still doesn't have any repository
            </h1>
          )}
        </div>
      </div>
    </>
  )
}

Repositories.propTypes = {
  userUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  errorMsg: PropTypes.string,
  setErrorMsg: PropTypes.func,
}

export default Repositories
