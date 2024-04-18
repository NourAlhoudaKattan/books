
import Eric from '../Component/Eric/Eric.jsx'
import Books from '../Component/Books/Books'
import Map from '../Component/Map/Map.jsx'

import imgbook from '../assets/img/book.png'


const Home = () => {

  return (
    <div>

      <Eric btn1="Author of august" title="Eric-Emanuel Schmitt " text="Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages." btn2="View his boooks" imgbook={imgbook} />
      <Books  />
      <Map title="Did you know us? " text="We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. 
       If you are about books, you must to subscribe to our newsletter. " btn3="Subscribe"  />   
     
    
    </div>
    
  )
}

export default Home