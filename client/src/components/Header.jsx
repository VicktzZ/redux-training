import React from 'react'
import { Link } from 'react-router-dom'

const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: '100px',
    color: 'white'
}

const linkStyles = {
  color: 'white',
  fontSize: '24px',
  textDecoration: 'none',
  margin: '10px'
}

export default function Header() {
  return (
    <header style={headerStyles}>
      <Link style={linkStyles} to='/'>Login</Link>
      <Link style={linkStyles} to='/register'>Register</Link>
    </header>
  )
}
