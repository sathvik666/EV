import React,{useState} from 'react'
import photo from '../Components/Assets/red.png'
import logo from '../Components/Assets/Rhyno Logo .png'
import './Home.css'
import photo2 from '../Components/Assets/grp.png'
import photo3 from '../Components/Assets/bike.png'
import photo4 from '../Components/Assets/black.png'
import photo5 from '../Components/Assets/blue.png'
import photo7 from '../Components/Assets/final design try 2 cross view.182.png'
import photo8 from '../Components/Assets/final design try 2 side view.151.png'
import photo9 from '../Components/Assets/golden.png'
import photo10 from '../Components/Assets/img.jpg.png'
import photo11 from '../Components/Assets/rhyno final.95.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const[menu,setMenu]= useState("home")
  return (
    
    <div className='home '>
    <div className="home1  ">
   <figure className="text-center">
  <blockquote className="blockquote ">
    <h1 id='frontline'>“Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style."</h1>
  </blockquote>
  <figcaption className="blockquote-footer">
     <cite title="Source Title">RHYNO</cite>
  </figcaption>
</figure>
</div>
<div id="carouselExampleRide" className="carousel slide " data-bs-ride="true">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={photo} className="d-block w-100"  id='img' alt="..."/>
        <div className="carousel-caption d-none d-md-block"
        id='prebook'>
    <h5 id='qq'>Rhyno</h5>
    <p id='qq'>"The future of transportation is electric, and it's here today."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
      </div>
      
    <div className="carousel-item">
      <img src={photo5} className="d-block w-100" id='img' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 id='qq'>Rhyno</h5>
      <p id='qq'>"Drive the change, embrace the future – ride electric."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={photo8} className="d-block w-100" id='img' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 id='qq'>Rhyno</h5>
      <p id='qq'>"Electric vehicles: Revolutionizing mobility, one charge at a time."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={photo9} className="d-block w-100" id='img' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 id='qq'>Rhyno</h5>
      <p id='qq'>"Eco-friendly rides for a sustainable tomorrow."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={photo10} className="d-block w-100" id='img' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 id='qq'>Rhyno</h5>
      <p id='qq'>"Unleash the potential of electric energy with every ride."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
    </div>

    <div className="carousel-item">
      <img src={photo11} className="d-block w-100" id='img' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 id='qq'>Rhyno</h5>
      <p id='qq'>"Charge your life, drive an electric bike."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={photo2} className="d-block w-100" id='img' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 id='qq'>Rhyno</h5>
      <p id='qq'>"Ride clean, ride green, ride electric."</p>
        <button type="button" className="prebook" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'> PreBook Now </Link>{menu==="prebook"?<hr/>:<></>}</button>
      </div>
    </div>
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
     
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div id='card' className="card  ">
      <div className="card-body">
        <h4 className="card-title"id='heading'>LFP Battery </h4>
        <p className="card-text"> Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
renowned for their safety features—eliminating the risk of fire associated with other
Lithium batteries. These batteries boast a broader temperature range, ideal for the
diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
by an Active Balancing Smart Battery Management System (BMS) for extended life
and reduced maintenance. Each battery undergoes rigorous waterproofing tests
according to IP76 standards. But it doesn't stop there—our technology goes the extra
mile in ensuring the battery's lasting durability. Connect with us to discover the
thoughtful engineering behind our batteries!</p>
        </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div id='card' className="card ">
      <div className="card-body ">
        <h4 className="card-title"id='heading'>Wider tyres</h4>
        <p className="card-text"> Now, say goodbye to skidding and embrace the leaning turns!
Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
beast that ensures stability on different terrains such as wet roads, mud, and sand.
</p>
        
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item" data-bs-interval="200">
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div id='card' className="card ">
      <div className="card-body">
        <h4 className="card-title"id='heading'>Range prediction</h4>
        <p className="card-text"> Many budget-friendly electric scooters overlook this crucial
feature, causing riders to experience range anxiety. With Rhyno, you can ride with
peace of mind, thanks to the scooter providing precise information about the
remaining battery.</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div id='card'className="card ">
      <div  className="card-body">
        <h4 className="card-title" id='heading'>Extraordinery Experience</h4>
        <p className="card-text"> Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!</p>
       
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item">
    
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div id='card' className="card  card-last">
      <div className="card-body">
        <h5  className="card-title" id='heading'> Rugged and simple Design</h5>
        <p  className="card-text"> We’ve had enough of the EVs looking and feeling like
fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
ending up spending weeks and months at service stations for complex repairs. We
took a bold step of making something raw, rugged, and practical. We kept it so
simple that even your trusted local mechanic can understand and repair most of it. If
you have reached this far, why not to take a test ride? Click here to locate your
nearest dealership or book a test ride at your home!</p>
        
      </div>
    </div>
  </div>
  
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    
  );
}

export default Home
