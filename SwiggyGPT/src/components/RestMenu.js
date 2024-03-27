
import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";

import {useParams} from "react-router-dom";

import useRestMenu from "../utils/useRestMenu"; 

import RestCategory from "./RestCategory";

const RestMenu = () =>
{
    const {resId} = useParams();

    //trying to take out the menu fetching logic
    //and use it inside the hook

    //Now, RestMenu comp has a single responsibility of 
    //getting the data and displaying the menu onto the ui
    //it does not have to worry about HOW to get the data

    //I want a particular 'resId' 's menu information
    //into the component
    const resInfo = useRestMenu(resId);

    //by default - nothing is open
    const [showIndex ,setShowIndex] =useState(null);

    // const toggleAccordian = (index) => {
    //     setShowIndex((prevIndex)=>(prevIndex === index ? null : index));
    // }

    if(resInfo === null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage} = 
    resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo?.cards[1]);
                                                                                                        
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
                            //JS doesn't recognise @ -> hence ["@type"] -> same as @type
    (c=>c?.["card"]?.["card"]?.["@type"]==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
         
       console.log(categories);
       //iterate through the item cards and make them into list items <li> 
    
    
    return(
        <div className = "text-center">

        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h2 className="font-bold text-lg">{cuisines.join(" , ")}</h2>
        <p>{costForTwoMessage}</p>
        
        {/* categories accordians
        each accordian has a -> Header and Body 
        We will loop onto the categories.

        build an accordian for each category

        for each 'category', return a RestCategory
        */} 

        {categories.map( (category,index)=> (
            //passing a prop which is card data -> calling it as 'data'
        <RestCategory key = {category?.card?.card?.title}
        data = {category?.card?.card}
        showItems = {index === showIndex ? true : false} 
        //toggleAccordian = {()=>toggleAccordian(index)}
        setShowIndex = {()=>setShowIndex(index)} //passing the function to the children 
        />))} 
        </div>
    );
};

export default RestMenu;

/*
showItems = {index === 0 && true} -> this means:
if the index is 0, then send true.          //index comes from map function
Means, if the first one is clicked, send a true
otherwise all are false

Create an index state variable to imply that at one time, only one acordian is open

Now what we want is, that when the showIndex changes, that index's accordian is opened.

The showIndex has to be changed by RestCategory (child) due to the onClick function.
But,how can a Child modify a Parent?  
    You cannot do it directly, but can do it indirectly

    We pass the function to the children component
*/
