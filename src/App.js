
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

//-----------header part---------------//
const Title=()=>{
  return (
    <div className='title'>
    <img alt="logo" src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" />
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
    </div>

  )
}

//-----------body part-----------------//

const data={
  Name:"New panna sweets",
  img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/upm1vaopvuy5zhzhtkbq",
  tags:["North indian","sweet chinese"],
  rating:"4.5",
  price:"250"
};

const Card=()=>{
  return(
    <div className='card'>
    <img alt="food-img" src={data.img}/>
    <div className='about-food'>
      <h3>{data.Name}</h3>
      <h3>{data.tags.join(",")}</h3>
      <h3>{data.rating} star</h3>
      <h3>{data.price}</h3>
    </div>
 </div>
  )
}
const Body=()=>{
  return(
    <div className='card-list'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  )
}

//---------footer part-----------//

const Lowest=()=>{
  return(
    <div className='lowest'>
      <h2>FOOD_VILLA</h2>
      <h2>© 2023 Swiggy</h2>
      <div className='social-media'>
      <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}
const Footer=()=>{
  return (
    <div className='footer'>

    <div className='footer-1'>
    <div className='company'>
        <h3>COMPANY</h3>
        <ul>
          <li>About us</li>
          <li>Team</li>
          <li>Careers</li>
          <li>Swiggy Blog</li>
          <li>Bug Bounty</li>
          <li>Swiggy One</li>
          <li>Swiggy Corporate</li>
          <li>Swiggy Instamart</li>
          <li>Swiggy Genie</li>
        </ul>
        </div>
        

        <div className='contact'>
        <h3>CONTACT</h3>
        <ul>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
        </div>

        <div className='legal'>
        <h3>LEGAL</h3>
        <ul>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Offer Terms</li>
          <li>Phishing & Fraud</li>
          <li>Corporate – Swiggy Money Codes Terms and Conditions</li>
          <li>Corporate - Swiggy Discount Voucher Terms and Conditions</li>
        </ul>
        </div>

    </div>
     
        <div className='footer-2'>
          <Lowest/>
        </div>

      </div>
  )
}

const App=()=>{
  return (
    <>
      <Title/>
      <Body/>
      <Footer/>
    </>
  )
}
export default App;
