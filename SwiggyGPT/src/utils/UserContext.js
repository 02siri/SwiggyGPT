import { createContext } from "react";

//we give in some piece of information in the createContext
const UserContext = createContext({
    //default values
    loggedInUser : "Default User"
});

export default UserContext;