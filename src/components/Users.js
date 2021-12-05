import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchUsers from './SearchUsers'
import PropTypes from 'prop-types'

function Users({ setUserUsername, errorMsg, setErrorMsg }) {
  const [users, setUsers] = useState([])
  const [inputValue, setInputValue] = useState(null)
  // const [usersUrl, setUsersUrl] = useState([])
  // const [usersBio, setUsersBio] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      if (inputValue)
        try {
          const response = await axios.get(
            `https://api.github.com/search/users?q=${inputValue}`
          )
          setUsers(response.data.items)
        } catch (error) {
          setErrorMsg(error.message)
          console.log(error)
          setTimeout(() => {
            setErrorMsg(null)
          }, 4000)
        }
    }
    getUsers()
  }, [inputValue, setErrorMsg])

  //  to much api requests, cannot load apis for bio info

  // useEffect(() => {
  //   setUsersUrl(users.map((x) => x.url))
  // }, [users])
  //
  // useEffect(() => {
  //   const getUserBio = async () => {
  //     try {
  //       const response = await axios.all(usersUrl.map((url) => axios.get(url)))
  //       setUsersBio(response.map((x) => x.data.bio))
  //       console.log(response.map((x) => x.data.bio))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getUserBio()
  // }, [usersUrl])

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = (e) => {
    setUserUsername(
      users.filter((x) => users.indexOf(x) === Number(e.target.id))[0].login
    )
  }

  return (
    <>
      {errorMsg && <p className='error'>Something went wrong! {errorMsg} </p>}
      <div className='search-users'>
        <input
          onChange={handleInput}
          className='search-input'
          type='text'
          placeholder='Search users'
        />
        <div className='users-container'>
          {users.length > 0 ? (
            users.map((user, i) => {
              return (
                <SearchUsers
                  handleClick={handleClick}
                  username={user.login}
                  avatar={user.avatar_url}
                  userType={user.type}
                  key={i}
                  id={i}
                />
              )
            })
          ) : (
            <p className='empty-users-text'>No users</p>
          )}
        </div>
      </div>
    </>
  )
}

Users.propTypes = {
  setUserUsername: PropTypes.func,
  errorMsg: PropTypes.string,
  setErrorMsg: PropTypes.func,
}

export default Users
