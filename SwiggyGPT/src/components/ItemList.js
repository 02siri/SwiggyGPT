import  CDN_URL from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {
    console.log(items);
    
    
    const dispatch = useDispatch();

    
    const handleAddItem = (item)=> {
        
        dispatch(addItem(item))
    };


    return (
        <div>
                {items.map(item =>
                     <div key = {item.card.info.id}
                      className="p-2 m-2 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name} - </span>
                                <span>₹{item.card.info.price/100}</span>
                            </div>
                            <p className="text-xs">
                                {item.card.info.description}
                            </p>
                        </div>

                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button 
                                className = "p-2 mx-5 rounded-lg bg-black text-white shadow-lg"
                                onClick={() => handleAddItem (item)}>
                                 Add +
                                </button>
                            </div>

                            <img src = {CDN_URL + item.card.info.imageId}>
                            </img>
                        </div>

                     </div>)}
        </div>
    )
}

export default ItemList; 

/**
 * diff bw {() => handleAddItem(item)} -> using a callback function
 * and {handleAddItem(item)}y-> calling the function right away
 * and {handleitem} ->
 */ 
 


