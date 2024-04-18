import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from 'react'
import './Books.css'
import open_book from '../../assets/img/book-open-01.svg'
import star from '../../assets/img/bi_star-fill.svg'
import { Link } from "react-router-dom"
import { ThemeContext } from '../../../Contexts/theme'



const Book = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books?_limit=8")
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            })
    }, [])




    return (
        <div>
            <p className="h1-books">Selected for you</p>
            <div className="card">
                {data.map((e, index) => {
                    return <div key={index}>
                        <img src={e.image_url} alt="" className="imgcard" />
                        <h1 style={{ color: theme.color }}>{e.authors}</h1>
                        <div className="top">
                            <div className="top1">
                                <img src={open_book} alt="" />
                                <span style={{ color: theme.color }} >{e.num_pages} page</span>
                            </div>
                            <div className="top2">
                                <img src={star} alt="" />
                                <span style={{ color: theme.color }}>{e.rating}</span>
                            </div>
                        </div>
                        <Link to={`/ShowDetlies/${e.id}`}><button className='unclick' >show detiles</button></Link>
                    </div>

                })
                }
            </div>


        </div>

    )
}

export default Book