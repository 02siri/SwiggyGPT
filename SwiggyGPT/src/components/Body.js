import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import {useState,useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRest,setlistOfRest]=useState([]);

    const [filteredRest, setFiltRest] = useState([]);

    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    console.log(listOfRest);

    useEffect(()=>{ 
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch
        ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4231993&lng=77.07521059999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFiltRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    {
        return (
        <div>
        <h1>Looks like you're offline</h1>
        <h2>Please check your internet</h2>
        </div>
        );
    }

    const {setUserName, loggedInUser} = useContext(UserContext);

    return listOfRest.length===0?<Shimmer/>:(
      <div className ="body">
          <div className ="filter flex">
            <div className = "search m-4 p-4">
                <input type = "text" 
                className = "border border-solid border-blue-950" 
                value = {searchText} 
                onChange ={ (e) =>{
                    setSearchText(e.target.value);
                } } >   
                </input>
                <button className = "px-4 py-2 bg-green-200 m-4 rounded-2xl"
                onClick = { () =>
                { //Filter the restaurants and update the ui
                    //searchText
                    console.log(searchText);

                    const filteredRest = listOfRest.filter
                    ((res)=>res.info.name.toLowerCase().includes(searchText) );

                    setFiltRest(filteredRest);
                }}>Search</button>
            </div>

            <div className = "toprated m-4 p-4">
            <button className = "px-4 py-2 bg-green-200 m-4 rounded-2xl"
            onClick = {() => 
            {   
                 //filter-logic here
                const filteredList = listOfRest.filter( 
                    (res) => res.info.avgRating>4.3
                    );
                setlistOfRest(filteredList);

            }}>
                Top Rated Restaurants 
                </button>
            </div>


           {/* updating the React Context with whatever is written in the input box */}
            <div className="m-4 p-4 flex items-center">
                <label>UserName: </label>
                <input className="border border-blue-900 p-2 m-2"
                value = {loggedInUser} //using the default value
                //it is changing as soon as i change the value inside the input box 
                //(which is being targeted by this onChange function))

                //basically it is changing wherever you have mentioned the context
                onChange={(e)=>setUserName(e.target.value)}/> 
            </div>


          </div>
              <div className="flex flex-wrap">
                  {
                      filteredRest.map((restaurant) => (
                          <Link 
                          key = {restaurant.info.id}
                          to= {"/restaurants/" + restaurant.info.id}>

                            {/* if the restaurant is promoted,
                            then add a promoted label to it */}
                            {restaurant.info.isOpen?
                            (<RestaurantCardPromoted resData = {restaurant}/>) : 
                            (<RestaurantCard resData = {restaurant}/>)
                            }


                          </Link>
                      ))
                  }
          </div>
      </div>
    );  
  };  
   
  export default Body;
