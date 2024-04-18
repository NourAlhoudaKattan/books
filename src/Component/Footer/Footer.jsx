import './Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../Contexts/theme'



const Footer = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  return (
    <div className='footer'>
        <p style={{color: theme.color}}>© All copyrights are reserved. B-World 2022.  </p>
    </div>
  )
}

export default Footer