
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ShowDetlies from './Component/ShowDetlies/ShowDetlies'
import NavBar from './Component/NavBar/NavBar'
import Footer from './Component/Footer/Footer'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/theme'



function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

      <NavBar menu={["Home", "News", "promotion of the Mount", "publishs", "Subscribe To The Newsletter"]} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ShowDetlies/:id' element={<ShowDetlies />}></Route>
      </Routes>
      <Footer />


    </div>
  )
}

export default App
