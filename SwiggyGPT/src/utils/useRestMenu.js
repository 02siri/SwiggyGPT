//creating custom Hooks in Utils 
    //because hooks are bascially normal JS utility functions.

    //Good practice -> Separate file for separate hooks. 

//get a resId -> fetch the data -> return resInfo

import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useRestMenu = (resId) =>
{     
    const [resInfo,setResInfo] = useState(null);
    //fetch data - fetching the same way we used to fetch the data in the component
    useEffect( ()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();

        setResInfo(json.data);
       };
       //resInfo is basically a local variable for this hook 

    return resInfo;
};

export default useRestMenu;
