import '../App.css';
import rest from "./constants";
import { IMG_URL } from './constants';

const Card=({resti})=>{
    
    const name=resti.name;
    const cuisines=resti.cuisines;
    const deliveryTime=resti.deliveryTime;
    const costForTwo=resti.costForTwo;
    const cloudinaryImageId=resti.cloudinaryImageId;
    //console.log(cloudinaryImageId);
    return(
      <div className='card'>
      <img alt="food-img" src={IMG_URL+cloudinaryImageId}/>
      <div className='about-food'>
        <h3>{name}</h3>
        <h3>{cuisines.join(" ")}</h3>
        <h3>{deliveryTime} Min</h3>
        <h3>{costForTwo}</h3>
      </div>
   </div>
    )
  }

  export default Card;