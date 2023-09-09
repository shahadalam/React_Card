import React ,{useState} from "react";
import '../Newcomponent/NewCardForm.css';


const Newcardform = (props) => {
 const [title, setTitle] = useState('');
 const [Discripton, setDiscripton] = useState('');
 const [Price, setPrice] = useState('');
 const [Image, setImage] = useState('');



    const AddTitle = (event) =>{
        setTitle(event.target.value)
    };
    const AddDiscripton = (event) =>{
        setDiscripton(event.target.value)
    };
    const AddPrice = (event) =>{
        setPrice(event.target.value)
    };
    const Addimage = (event) =>{
        setImage(event.target.value)
    };
const submitform = (event) =>{
event.preventDefault();

const NewcardData ={
    title:title,
    description: Discripton,
    price : Price , 
    Image : Image
}
// Store NewcardData in local storage
localStorage.setItem('newCardData', JSON.stringify(NewcardData));
console.log("data",JSON.parse(localStorage.getItem('newCardData')));
console.log("new card data",NewcardData);
props.saveNewCardData(NewcardData);

 // this is used to clear the input field after submitting it

setTitle('')
setDiscripton("")  ;   
setPrice("");
setImage("")
}
    return (
        <div className="new-card">
            <h1>Add a new card</h1>
            <form onSubmit={submitform}>
                <label>image</label>
                <div>
                    <input type='file' value={Image} onChange={Addimage}/>
                </div>
            <label>Title</label>
                <div>
                
                <input type='text' placeholder='Enter title' value={title} onChange={AddTitle} />
                </div>
                <label>Description</label>
                <div>
             
                <textarea id="review" name="review" rows="4" cols="50" value={Discripton} onChange={AddDiscripton}></textarea>
                </div>
                <label>Price</label>
                <div>
                
                <input type='text' placeholder='Enter Price' value={Price} onChange={AddPrice} />
                </div>
                <div>
                <button className='button' >submit</button>
                </div>



            </form>
        </div>
    )
}
export default Newcardform