import './Eric.css'
import { ThemeContext } from '../../../Contexts/theme'
import { useContext } from 'react'

const Eric = ({ btn1, title, text, btn2, imgbook }) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  return (
    <div className='Eric'>
      <div className="parentbook">
        <div className='booktext'>
          <button className='btn1'>{btn1}</button>
          <h3 style={{color: theme.color }}>{title}</h3>
          <p style={{color: theme.color }}>{text}</p>
          <button className='btn2'>{btn2}</button>
        </div>

        <div className='bigbook'><img src={imgbook} alt="" /></div>



      </div>

    </div>
  )
}

export default Eric