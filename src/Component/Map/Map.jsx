
import './Map.css'

const Map = ({title,text,btn3}) => {
  return (
    <div className="pMap">
      <div className='textmap'>
        <h1>{title}</h1>
          <p>{text}</p> 
         <div className='fo' >
        <input type="text" placeholder="Your name "/>
        <input type="text" placeholder="Your e-mail"/>
        <button>{btn3}</button>
        </div>  
       

      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52204.784301574226!2d36.75040895!3d35.13668869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1524828fcdd5b865%3A0x62d43f56ee62b5ef!2z2K3Zhdin2KnYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1707419191152!5m2!1sar!2s"
       width="600"
       height="462"
       style={{border:0}}
      >

       </iframe>
    </div>
    
  )
}

export default Map