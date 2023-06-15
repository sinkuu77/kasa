import Header from "./Header"
import { Route, Routes } from 'react-router-dom'
import "../styles/base.scss"
import Home from "../pages/Home"
import Apropos from "../pages/Apropos"

function App() {
  return (
  <main className='main'>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/accueil' element={<Home />}/>
    <Route path='/apropos' element={<Apropos />}/>
  </Routes>
  </main>
  )
}

export default App;
