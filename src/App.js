
import React, {useState} from 'react';
// import NewCard from './Newcomponent/NewCard';
import SubComponent from './mycomponent/SudComponent';
 // Import your component

import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import componentsImage from './assets/images/components.png';
import keyConceptsImage from './assets/images/keyconcepts.png';
// import stateImage from './assets/images/keyconcepts.png';
import NewCard from './Newcomponent/NewCard';
import './App.css';
let Dmmy_concepts = [
  {
  //   title: 'Components',
  //   image: componentsImage,
  //   description:
  //     'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  // price: "$120"
  //   },
  // {
  //   title: 'State',
  //   image: stateImage,
  //   description:
  //     'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  //     price: "$100"
  //   },
  // {
  //   title: 'Events',
  //   image: eventsImage,
  //   description:
  //     'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  //     price: "$90"
     },
];

const App = () => {
  // let Himg = keyConceptsImage;
  // let Htitle = "Key React Concepts";
  // let Hdescription ="Selected key React concepts you should know about"
  // let title = 'State';
  // let  image = stateImage ;
  // let  description ='State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.'
const [concepts, setconcepts] = useState(Dmmy_concepts)
  const addCardHandleer = (Card) =>{
    const updatedConcepts =[Card, ...Dmmy_concepts]
    setconcepts(updatedConcepts)
    console.log("this is new card",Card)
  }
  
  return (
    <div className="App">
    
     {/* <NSComponent onAddCard={addCardHandleer}
     /> */}
     <header>
          <NewCard
          onAddCard={addCardHandleer}
          />
          </header>
     <SubComponent
       item={concepts}
     />
     {/* <div className="df">
     <MyComponent 

   title = {concepts[0].title}
   image = {concepts[0].image} 
   description={concepts[0].description}
   price ={concepts[0].price}

     />
        
        <MyComponent 
   title = {concepts[1].title}
   image = {concepts[1].image} 
   description={concepts[1].description}
   price ={concepts[1].price}
     />
      <MyComponent 
   title = {concepts[2].title}
   image = {concepts[2].image} 
   description={concepts[2].description}
   price ={concepts[2].price}
     />
     <MyComponent 
   title = {concepts[1].title}
   image = {concepts[0].image} 
   description={concepts[2].description}
   price ={concepts[1].price}

     />
     </div> */}
    </div>
  );


}

export default App;
