import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../actions/user.js"
import Header from "../components/Header"

const inputStyles = {
  borderRadius: '20px',
  height: '40px',
  padding: '20px',
  margin: '10px',
}

const divStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const buttonStyles = {
  borderRadius: '10px',
  height: '20px',
  padding: '15px',
  margin: '10px',
  textAlign: 'center',
  lineHeight: '10px',
  cursor: 'pointer',
}

const divDataStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw'
}

function Login() {
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ buttonClicked, setButttonClicked ] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const data = useSelector(state => state.users)

  const handleSubmit = (e) => {
    e.preventDefault()
    setButttonClicked(!buttonClicked)
  }

  return (
    <div>
        <Header />
      <form onSubmit={handleSubmit}  action="">
        <div style={{ ...divStyles, flexDirection: "column", height: '100vh', width: '100vw' }}>
          <div style={divStyles}>
            
            <input 
              style={inputStyles} 
              placeholder='Digite seu email...' 
              type="email"
              onChange={(e) => setEmail(e.target.value)} 
            />

            <input 
              style={inputStyles}
              placeholder='Digite sua senha...'
              type="password" 
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>
          <button type="submit" style={buttonStyles}>Confirmar</button>
          <div style={divDataStyles}>
            {
              buttonClicked && (
                data.users.map(user => (
                  <>
                    <div key={user._id}>
                      <p>ID: {user._id}</p>
                      <p>Email: {user.email}</p>
                      <p>Senha: {user.password}</p>
                    </div>
                    <br />
                  </>
                ))
              )
            }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;


