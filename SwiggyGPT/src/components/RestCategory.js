import ItemList from "./ItemList";
import { useState } from "react";


const RestCategory = ({data,showItems,setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();     //on click of the button, the setShowIndex will be called 
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            {/* Accordian Header */}

            <div className="flex justify-between cursor-pointer"
            onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}</span>
            <span>⬇️</span>
            </div>
             {/* Accordian Body*/}

             {/* if my showItems is true, then only show the ItemList*/}
            { showItems && <ItemList items = {data.itemCards}/>}
            
            
        </div>
    )
} 

export default RestCategory;


/*
Right now, the power to show and hide a title is with RestCategory component.
I Want the previous accordian to collapse/close when another accordian is opened.

To do this, I have to give the power of show/hide to the parent component, 
i.e. RestMenu.

basically -> LIFTING THE STATE UP from RestCategory (child) to RestMenu (parent)

So, now I don't want my RestCatgory to have a state variable showItems;
I will pass it as a prop in my component ; Props come from Parent component

NOW, RestCategory is a CONTROLLED COMPONENT because the RestMenu is controlling it. 

When RestCategory had its own state, it was an UNCONTROLLED COMPONENT.  

//famous Interview Question -> Controlled and Uncontrolled Components. 


*/
