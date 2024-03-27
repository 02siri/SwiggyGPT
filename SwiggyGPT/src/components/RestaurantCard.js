import  CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name,cuisines,cloudinaryImageId,avgRating} = resData?.info;

   return (<div className = "m-4 p-4 w-[250px] bg-slate-300 rounded-lg hover:shadow-xl" >
       <img className = "rounded-lg py-3"
       alt = "res-logo" src =  {CDN_URL + cloudinaryImageId}></img>
       <h3 className="font-bold text-lg">{name}</h3>
       <h3 className="">{cuisines.join(", ")}</h3>
       <h3>{avgRating}</h3>
   </div>
   );
};

//Higher Order Component

//input - RestaurantCard
//output - RestaurantCardPromoted

                            //RestaurantCard- input
export const withPromotedLabel = (RestaurantCard) => {

    //returning a component - which is basically a function

    //adding the label 'Promoted' over the restaurant card

    //the resData in Body.js is being passed as a prop in this component

    //the ...props (spread operator with props), will pass all 
    //the props into the RestaurantCard
    return (props)=>{
        return (
            <div>
                <label className = "absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label> 
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;

//Higher Order Components are PURE FUNCTIONS. 
        //PURE FUNCTIONS means that it will not change the behaviour of the 
        //inputted component, RestaurantCard in this case 