import React,{useState} from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
 const[menu,setMenu]= useState("home")
  return (
   <div className="foot">
   

    <footer className="footer">
      <ul className="footer-links">

 
<button type="button" id='button' className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
Privacy Policy
</button>
<button type="button" id='button' className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal2">
Refund Policy</button>
<button type="button"id='button' className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
Website Policy
</button>


<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Privacy Policy</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>This policy is applicable to the Processing of customers' Personal Data at all companies included in the ivoomi innovations pvt ltd ("IVOOMI", “our”, “us” or "we"). The purpose of this policy is to provide our current, former and potential customers (jointly referred to as "customers" or "you") with a general understanding of:

The circumstances under which we collect and process your Personal Data
The types of Personal Data we collect
The reasons for collecting your Personal Data
How we handle your Personal Data
Distribution of responsibility for the Processing of Personal Data between various legal entities at IVOOMI, and
Contact details for us so you can receive information about and claim your rights in relation to our processing of your Personal Data.
This policy is updated continuously to reflect the measures taken by us in relation to your Personal Data.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div>
  <div>


<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Refund Policy</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>The user hereby agrees, acknowledges and confirms that the user: (i) is a holder of a valid driving licence issued under the Motor Vehicles Act, 1988; (ii) is not prohibited from owning a vehicle in the jurisdiction of purchase; (iii) can understand and agrees with the contents herein; and (iv) has read, understood and agrees to be bound by these Terms (By clicking on the check box)

The user acknowledges the images and colours on the Platform are representation of the actual Revolt vehicle. Revolt has taken every effort to make a true representation. However, the actual images and colour depends on the purchased vehicle of the user and cannot be guaranteed by Revolt.

If the user is booking or purchasing on behalf of another person, the necessary details of such other person is required to be mentioned and the requisite details of such other person are required to be produced at the Dealership.

The user agrees and declares that the below information shared by the user on the Platform for the booking of the Revolt vehicle is true</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div> </div>



<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Website Policy</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>The user hereby agrees, acknowledges and confirms that the user: (i) is a holder of a valid driving licence issued under the Motor Vehicles Act, 1988; (ii) is not prohibited from owning a vehicle in the jurisdiction of purchase; (iii) can understand and agrees with the contents herein; and (iv) has read, understood and agrees to be bound by these Terms (By clicking on the check box)

The user acknowledges the images and colours on the Platform are representation of the actual Revolt vehicle. Revolt has taken every effort to make a true representation. However, the actual images and colour depends on the purchased vehicle of the user and cannot be guaranteed by Revolt.

If the user is booking or purchasing on behalf of another person, the necessary details of such other person is required to be mentioned and the requisite details of such other person are required to be produced at the Dealership.

The user agrees and declares that the below information shared by the user on the Platform for the booking of the Revolt vehicle is true</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div>
 
       <button type='button' className='btn ' onClick={()=>{setMenu("contact")}}><Link className='rentall' to='/contact'>Contact us</Link></button>
        
<button type="button" className="btn " onClick={()=>{setMenu("rentals")}}><Link className='rentall' to='/rentals'> Rentals </Link></button>
     <button type='button' className='btn '><a href="https://in.linkedin.com/company/rhyno-wheels" target="_blank" rel="noopener noreferrer" className='rentall' >
            Career
          </a></button> 
       
        
      </ul>
     
     
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/company/rhyno" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        
        
      </div>
      <hr id='hr' />
      <p className="copyright">© 2024 Rhyno EV. All rights reserved.</p>

    </footer>
 
   
    </div>
   
  )
}

export default Footer
