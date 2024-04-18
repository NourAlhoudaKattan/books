
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {  useContext} from 'react'
import axios from "axios"
import './ShowDetlies.css'
import dec from '../../assets/img/dec.png'
import inc from '../../assets/img/inc.png'
import decdark from '../../assets/img/decdark.svg'
import incdark from '../../assets/img/akar-icons_circle-plus (1).svg'
import { ThemeContext } from '../../../Contexts/theme'
const ShowDetlies = () => {
  const [{theme,isDark},toggleTheme] =useContext(ThemeContext)
  const [detiles, setdetiles] = useState({})
  let { id } = useParams()

  useEffect(() => {
    axios.get(`https://example-data.draftbit.com/books/${id}`)
      .then(res => {
        console.log(res.data)
        setdetiles(res.data)
      })
  }, [id])


  return (
    <div className="pshow">


      <div className="item-img-det">
        <img src={detiles.image_url} alt="" />
      </div>

      <div className="item-text-det">
        <h1>{detiles.title}</h1>

        <h6>{detiles.authors}</h6>
        <h3>About Book:</h3>
        <p className="description">{detiles.description}</p>

        <div className="dec-inc">
          <img src={isDark?decdark:dec} alt="" />
          <p>1</p>
          <img src={isDark? incdark :inc} alt="" />
        </div>

         <div className="Add-Fav">
          <button className="btn1-det">Add to cart</button>
          <button className="btn1-det Favorite ">Favorite</button>
        </div> 
        <hr />
         <div className="Number">
          <div className="Pages">  <span>Pages Number :</span> <p> {detiles.num_pages}</p> </div>
          <div className="Pages">  <span>Rating Count :</span><p>{detiles.review_count}</p></div>
          <div className="Pages">   <span>Reviews:</span>  <p>{detiles.rating_count}</p></div>
        </div> 





      </div>

    </div>

  )

}
export default ShowDetlies