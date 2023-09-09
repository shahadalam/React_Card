import React from 'react';
// import keyConceptsImage from '../assets/images/keyconcepts.png';
import NewCard from '../Newcomponent/NewCard';

function Nestcomponent(props) {
//   console.log(props.Htitle)

    return (
      <div>
        <header>
          <NewCard/>
          </header>
       {/* <header>
          <img src={props.img} alt="Medal badge with a star" />
          <h1>{props.title1}</h1>
          <p>{props.des}</p>
        </header> */}

       
      </div>
    );
  }
  
  export default Nestcomponent;
  