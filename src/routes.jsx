import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import RegisterProducts from './pages/RegisterPoducts/indexProducts'

function Routers() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/register"  element={<RegisterProducts />} />
      </Routes>
      </BrowserRouter>
  )
}

export default Routers