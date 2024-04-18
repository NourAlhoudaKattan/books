import './NavBar.css'
import logo from '../../assets/img/Logo-Light.svg'
import logoDark from '../../assets/img/Logo-Dark.svg'
import moon from '../../assets/img/moon-01 (1).svg'
import sun from '../../assets/img/sun.svg'
import menue from "../../assets/img/Menu.svg"
import X from '../../assets/img/X.svg'
import dark from '../../assets/img/dark-m.svg'
import light from '../../assets/img/light-m.svg'
import {  useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../../Contexts/theme'


const NavBar = ({ menu }) => {
    const [{theme,isDark},toggleTheme] =useContext(ThemeContext)
    console.log(theme)
     const [list, setlist] = useState(false)
   

      

    return (
        <div >
            <div className='nav'>
                <img src={(isDark)?logoDark:logo}alt="" />
                <ul >
                    {
                        // eslint-disable-next-line react/prop-types
                        menu.map((e, index) => {
                            return <NavLink key={index} to="/"> <li key={index} style={{color:theme.color}} >{e}</li></NavLink> 
                        })
                    }

                </ul>
                
                <div className='iconnav'><img src={isDark?moon:sun} alt="" onClick={toggleTheme} /><span>Dark mood</span></div>
                <img src={menue} alt="" className='menuicon' onClick={() => setlist(!list)} />

            </div>

            <div className='pdivleft' >
                <div className='divleft' style={{backgroundColor:theme.backgroundColor,color:theme.color,display: (list) ? "block" : "none" }}>
                    <img src={X} alt="" onClick={() => setlist(!list)} className='X' />

                    <ul >
                        {
                            menu.map((e, index) => {
                                return <NavLink key={index} to="/"> <li key={index} style={{color:theme.color}}>{e}</li></NavLink>
                            })
                        }

                    </ul>
                <hr id='line'/>
                <div className='text-light'>
                <span id='light'  >Dark mood</span>
                <img src={(isDark)?dark:light}  onClick={toggleTheme} alt="" />
                    
                </div>
                
                </div>
            </div>


        </div>
    )
}

export default NavBar