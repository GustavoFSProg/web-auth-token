import { useEffect, useState } from 'react'
import  {Input}  from '../../Components/Input/index'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  width: 33%;
  height: 4rem;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: #009999;
  color: white;
  margin-top: -30px;
  transition: all ease 0.8s;

  :hover {
    background: #999900;
  }

  @media screen and (max-width: 800px) {
    width: 115%;
  }
`
const ContainerForm = styled.button`
  width: 100%;
  height: 12rem;
  display: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: -30px;
  }
`

function RegisterProducts() {
  const [email, setEmail] = useState([])

  return (
    <div>
      <h2>CADASTRAR</h2>
      <br />
     

      <Link to="/">Home</Link>
      <br />
      <br />
      
    

      <form
       
      >
        <div style={{
          height: '12rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',

        }} >
        <Input placeholder="Email" type="email"  />
          <div style={{marginTop: '-42px'}}>
           
          <Input placeholder="Senha" type="password" />
          </div>
          <Button>Cadastrar</Button>
      </div>
        </form>

    </div>
  )
}

export default RegisterProducts
