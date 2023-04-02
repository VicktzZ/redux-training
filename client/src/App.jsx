import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useDispatch } from "react-redux"
import { fetchUsers } from './actions/user.js'
import { useSelector } from 'react-redux'


export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const users = useSelector(state => state.users)

  console.log(users)

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>  
  )
}
