
//input -> Not needed from the caller 
                            //caller -> where this hook will be used
//output -> 

import { useState , useEffect} from "react";
const useOnlineStatus = () => {
    
    //check- if internet working -> onlineStatus = true, 
    //      if internet not working-> onlineStatus = false
    //default value - true

    const[onlineStatus, setOnlineStatus] = useState(true);

    //i need to just put the event Listener once, hence empty dependency array
    useEffect ( ()=>{
         //Event Listener-> superpower given to us by browsers
    //tracks when the internet is online or offline
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    },[])
   

    //return boolean value
    return onlineStatus;


};

export default useOnlineStatus; 