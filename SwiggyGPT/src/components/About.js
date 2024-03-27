import Users from "./Users";
import UserClass from "./UserClass";

import React from "react";

import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props)
    {
        super(props);
        console.log("Parent constructor called");
    }
    //About  component Loaded
    // 1) Parent Constructor Called
    // 2) Parent Render Called 
    //      1)Child Constructor Called
    //      2)Child Render Called
    //      3)Child compMount called
    // 3) Parent CompMount Called 
    componentDidMount()
    {
        console.log("Parent componentDidMount called");
    }   
    
    render()
    { 
        console.log("Parent render called");
        return (
        <div>
            <h1>About</h1>
            <h3>This is the About Us page</h3>
            <div>
                <UserContext.Consumer>  
                    {({loggedInUser})=> (
                    <h1 className="font-bold">{loggedInUser}
                    </h1>)}
                </UserContext.Consumer>
            </div>
            <UserClass name ={"Srishti Khosla (class)"} 
            location = {"Melbourne (class)"}/>
        </div>
    );
    }
}

export default About;


/* 
Class Based Components cannot use hooks,
so to access React Context: 
    1. Import UserContext
    2. Creating a div
    3. <UserContext.Consumer></UserContext.Consumer>
    4. Use a callback function in this and pass the data -> all written in JSX
*/