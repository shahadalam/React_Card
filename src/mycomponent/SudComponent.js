import React from "react";
import MyComponent from '../mycomponent/testcomponent';


const SubComponent = (props) => {
    console.log("this is sub", props)
return(

    <div className="df">

{
  props.item.map(
    items  => (
<MyComponent 

title = {items.title}
image = {items.image} 
description={items.description}
price ={items.price}

  />
    )
     
  )
}
    {/* <MyComponent 

  title = {props.item[0].title}
  image = {props.item[0].image} 
  description={props.item[0].description}
  price ={props.item[0].price}

    />
       
       <MyComponent 
  title = {props.item[1].title}
  image = {props.item[1].image} 
  description={props.item[1].description}
  price ={props.item[1].price}
    />
     <MyComponent 
  title = {props.item[2].title}
  image = {props.item[2].image} 
  description={props.item[2].description}
  price ={props.item[2].price}
    />
    <MyComponent 
  title = {props.item[1].title}
  image = {props.item[0].image} 
  description={props.item[2].description}
  price ={props.item[1].price}

    /> */}
    </div>
)

}
export default SubComponent;


