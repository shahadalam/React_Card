import React, {useState} from 'react';
// import keyConceptsImage from '../assets/images/keyconcepts.png';
// import componentsImage from '../assets/images/components.png';
// import stateImage from '../assets/images/state.png';
// import eventsImage from '../assets/images/events.png';




const Testcomponent = (props) => {
  // array destructuring and use usestate
  // const [newtitle, setNewTitle] = useState();

  // const [title, setTitle] = useState(props.title);
//  let title =props.title


//   const clickHandler = () => {

//   setTitle(newtitle)
//     // title ="new title"
//   // console.log(title)
//  }
//  const changeHandler = (event) => {
// setNewTitle(event.target.value)
//  }
  return (
    <div className='wrp'>
   
      <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h4>${props.price}</h4>
       
            
            {/* <input type="text"
              class="form-control"  value={newtitle} onChange={changeHandler} />
            
         
          <button className='button' onClick={clickHandler}>Change Title</button>
          <small id="helpId" class="form-text text-muted">Help text</small> */}
        </li>
      </ul>
    </div>
  );
}

export default Testcomponent;

