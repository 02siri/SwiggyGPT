
import React from "react";

class UserClass extends React.Component {

    constructor (props)
    {
        super(props);
        //console.log("Child Constructor called");

        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Dummy location",
                avatar_url: "Dummy URL",
            },
        }
    }

    //When this component is loaded,
    // 1) Constructor called
    // 2) Render Called 
    // 3) Once the class based comp is mounted onto the dom, then 'componentDidMount' is called
   
   
    /* 
   async componentDidMount()
    {
        //console.log(this.props.name + "Child componentDidMount called");
        //API call
        const data = await fetch("https://api.github.com/users/02siri");
        const json = await data.json();

        this.setState(
            {
                userInfo: json,
            }
        );
        console.log(json);
    } 
    */
   
    componentDidMount()
    {
        //call NamasteReact after each second
        this.timer = setInterval( () => {
            console.log("NamasateReact");
        },1000);
    }
    //problem with single page application is, that if you move to another page
    //it will still continue to print NamasteReact
    //because it is not reloading the page, it is just reconciling/re rendering 
    //the component

    //If you come back to the About page, now it will start two intervals
    //and start calling NamasteReact two times 

    componentDidUpdate()
    {
        console.log("Component Did Update");
    }    

    componentWillUnmount()
    {   clearInterval(this.timer);

        console.log("Component Unmounted");
    }
    //Now if i go back to the home/contact page, it will stop calling NamasteReact
    render() 
    {  
        //console.log(this.props.name + "Child Render called");

        const {name,location,avatar_url} = this.state.userInfo;
        return (
         <div className = "userCard">
        <img src = "avatar_url"></img>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : sksrishtikhosla111@gmail.com</h2>
        </div>
        );
    };
 }

 export default UserClass;


 /*
 React is fast because at the time of rendering a component, it comes in two phases.


 First - render phase 
    Constructor Called
    Render Called

 Second - commit phase  
    React updates the DOM
    Once DOM updated, then compDidMount() called 
 
because there are two children, REACT will optiimize this and 
NOT CALL compDidMount() for the first child. 

Instead, it will BATCH / CLUB the render phase for both of these children 

This is done to make the commit phase fast 
because, Once the commit phase starts, REACT tries to update the DOM.
DOM Manipulation is the most expensive thing when we are 
updating a component - it takes a lot of time 

 This mounting life cycle happens for every child, component

Parent Constr                   ]     
Parent Render                   ]
    Child 1 Constr              ]               RENDER 
    Child 1 Render              ]               PHASE
    
    Child 2 Constr              ]
    Child 2 Render              ]
     
    <DOM UPDATED - IN SINGLE BATCH>
    Child 1 CompDidMount()      ]
    Child 2 CompDidMount()      ]           COMMIT
                                            PHASE
Parent CompDidMount()           ]   
 */ 