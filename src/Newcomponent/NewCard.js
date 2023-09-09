import React from "react";
import'../Newcomponent/NewCard.css';
import Newcardform from "./NewCardForm";

const NewCard = (props) => {
const saveNewCard =(enterCardData)=>{
    const cardData={
        ...enterCardData,
        id:Math.random().toString()
    }
    props.onAddCard(cardData)
    console.log("new card",cardData);
}  
    return (
        <div className="Newcard">
             
            <div>
            <Newcardform
            saveNewCardData={saveNewCard}/>
            </div>
           
        </div>
        
    )

}
export default NewCard;