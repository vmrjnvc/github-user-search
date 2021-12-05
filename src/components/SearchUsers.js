import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchUsers({ username, avatar, userType, handleClick, id }) {
  return (
    <>
      <Link to='/repositories'>
        <div className='user-card' onClick={handleClick} id={id}>
          <img alt='logo' src={`${avatar}`} id={id} />
          <div className='card-info' id={id}>
            <p className='username' id={id}>
              {username}
            </p>
            <p className='description' id={id}>
              {userType}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

SearchUsers.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  userType: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.number,
}

export default SearchUsers
