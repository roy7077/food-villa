
//-----------body part-----------------//
import '../App.css';

const data={
    Name:"New panna sweets",
    img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/upm1vaopvuy5zhzhtkbq",
    tags:["North indian","sweet chinese"],
    rating:"4.5",
    price:"250"
  };
  
  const Card=({imgd})=>{
    return(
      <div className='card'>
      <img alt="food-img" src={imgd}/>
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
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e685c41d65c08836c9fea128bdf2c164" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0j6qdb7yi3yjvi2jdun" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f4a6db4d707152b765950d9bb4cd0f47" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmessz1bb5rguc5rqqqh" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c6z7jwph8tuzt5d73obu" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrrxcxw1yvw9yitglfpt" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/znv9fpbtcac4pmutkscj" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r3zzte9lskqd6x3t2t0u" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/laaljpr9acp0tmuspwbq" /> 
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e685c41d65c08836c9fea128bdf2c164" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0j6qdb7yi3yjvi2jdun" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f4a6db4d707152b765950d9bb4cd0f47" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmessz1bb5rguc5rqqqh" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c6z7jwph8tuzt5d73obu" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrrxcxw1yvw9yitglfpt" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/znv9fpbtcac4pmutkscj" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r3zzte9lskqd6x3t2t0u" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/laaljpr9acp0tmuspwbq" /> 
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e685c41d65c08836c9fea128bdf2c164" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0j6qdb7yi3yjvi2jdun" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f4a6db4d707152b765950d9bb4cd0f47" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmessz1bb5rguc5rqqqh" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c6z7jwph8tuzt5d73obu" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrrxcxw1yvw9yitglfpt" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/znv9fpbtcac4pmutkscj" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r3zzte9lskqd6x3t2t0u" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/laaljpr9acp0tmuspwbq" /> 
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e685c41d65c08836c9fea128bdf2c164" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0j6qdb7yi3yjvi2jdun" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f4a6db4d707152b765950d9bb4cd0f47" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmessz1bb5rguc5rqqqh" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c6z7jwph8tuzt5d73obu" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jrrxcxw1yvw9yitglfpt" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/znv9fpbtcac4pmutkscj" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r3zzte9lskqd6x3t2t0u" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/laaljpr9acp0tmuspwbq" /> 
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e685c41d65c08836c9fea128bdf2c164" /> 
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r3zzte9lskqd6x3t2t0u" />
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/laaljpr9acp0tmuspwbq" /> 
      <Card imgd="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e685c41d65c08836c9fea128bdf2c164" /> 
      </div>
    )
  }

export default Body;