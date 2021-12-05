import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './Users'
import Repositiories from './Repositories'

const Main = () => {
  const [userUsername, setUserUsername] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <Users
            userUsername={userUsername}
            setUserUsername={setUserUsername}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
        }
      ></Route>
      <Route
        exact
        path='/repositories'
        element={
          <Repositiories
            userUsername={userUsername}
            setUserUsername={setUserUsername}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
        }
      ></Route>
    </Routes>
  )
}

export default Main
