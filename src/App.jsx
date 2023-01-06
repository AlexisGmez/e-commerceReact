import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/app/ProtectedRoute'
import Header from './layout/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/products/:id' element={ <ProductId /> } />

        <Route element ={ <ProtectedRoute /> }>
          <Route path='/purchases' element={ <Purchases /> } />
          <Route path='/cart' element={ <Cart /> } />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
