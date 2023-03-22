import { useEffect, useState } from 'react'
import './App.css'
import api from './api'
import { Link } from 'react-router-dom'


function App() {
  const [products, setProducts] = useState([])

  async function handleGetProducts() {
    
    const { data } = await api.get("/get-all")
    
    setProducts(data.data)
  }

  useEffect(() => {
    handleGetProducts()
  }, [])


  return (
    <div className="App">
      <Link to="/register">
        Cadastro
      </Link>
      <br />
      <br />

      {products.map((item => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="imagem" />
            <p>
              {item.title}
            </p>

            <p>
              {item.price}
            </p>
            </div>
        )
      }))}
    
  
    </div>
  )
}

export default App
