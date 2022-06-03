import Scoop from '../../assets/saher-suthriwala-xs32jGtAOv4-unsplash.jpg'
import Waffle from '../../assets/slashio-photography-uMYxldWYSZk-unsplash.jpg'
import './Menu.css';


const Menu = () => {
  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className='menu'>
      <div className='menu1-container'>
        <br />
        <h1 className='title'>Scoops</h1>
        <div className='scoops'>
          <br />
          <br />
          <p>Single&nbsp; ......................................&nbsp; → &nbsp;$4.75</p>
          <p>Double&nbsp; ....................................&nbsp; → &nbsp;$7.00</p>
          <p>Split&nbsp; ......................................... &nbsp;→ &nbsp;$5.25</p>
          <p>Flight&nbsp; ......................................&nbsp; &nbsp;→&nbsp; $6.00</p>
          <br />
          <br />
        </div>
        <div className='img1-container'>
          <div className='image-scoop'>
            <img src={Scoop} className='img' alt='' />
          </div>
        </div>
        <br />
      </div>
      <div className='menu2-container'>
      <br />
        <h1 className='waffle-title'>Waffle Cones, Affogato's & Pints</h1>
        <div className='waffle'>
          <br />
          <p>Regualr Waffle Cone&nbsp;........................... &nbsp;&nbsp;→&nbsp; $1.25</p>
          <p>Speciality Waffle Cone&nbsp; ........................&nbsp; →&nbsp; $2.50</p>
          <p>Affogato&nbsp; ............................................&nbsp;&nbsp; → &nbsp;$6.00</p>
          <p>Pints &nbsp;..................................................&nbsp;&nbsp; → &nbsp;$11.00</p>
          <p>Waffle Sandwich &nbsp;................................&nbsp;&nbsp; →&nbsp; $6.00</p>
          <p>Milk Shake&nbsp; .........................................&nbsp;&nbsp; → &nbsp;$8.50</p>
          <br />
        </div>
        <div className='img2-container'>
          <div className='image-waffle'>
            <img src={Waffle} className='img' alt='' />
          </div>
        </div>
        <br />
      </div>
    </div>

   )
}

export default Menu;