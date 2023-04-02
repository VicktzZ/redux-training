import { useState } from "react"
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

function Register() {
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ confirmarSenha, setConfirmarSenha ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, senha)
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

            <input 
              style={inputStyles}
              placeholder='Confirme sua senha...'
              type="password" 
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

          </div>
          <button type="submit" style={buttonStyles}>Confirmar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;


