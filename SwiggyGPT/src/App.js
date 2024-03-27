import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";

import Body from "./components/Body.js";

//import About from "./components/About.js";

import { useState,useEffect } from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ContactUs from "./components/ContactUs.js";

import Error from "./components/Error.js";

import RestMenu from "./components/RestMenu.js";

import UserContext from "./utils/UserContext.js";

import Cart from "./components/Cart.js";

import {Provider} from "react-redux"; 

import appStore from "./utils/appStore.js";


//lazy->function that comes from React->named export
//import it

//lazy takes a callback function
//in it, 'import' is not a keyword but a function
//it will take the path of the Grocery component

const Grocery = lazy(()=>import ("./components/Grocery") );

const About = lazy(()=>import ("./components/About") );

//App component
const AppLayout = () => {

    const [userName,setUserName] = useState();

    //authentication
    
    useEffect( ()=> {
        //Make an API call and send username and password
        const data = {
            name : "Srishti Khosla"
        };

        setUserName(data.name)
    },[])
    

    return (
        <Provider store ={appStore}>
        <UserContext.Provider value = { {loggedInUser: userName ,setUserName}} >
        <div className = "app">
            {/* Harsh Pruthi name will be updated only for the Header
            <UserContext.Provider value = { {loggedInUser:"Harsh Pruthi"}} >
             <Header/>
             </UserContext.Provider> */}
             <Header/>
        <Outlet/>
        </div>
    </UserContext.Provider>
    </Provider>
    );
};

const appRouter = createBrowserRouter( [
{
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
        {
            path: "/",
            element: <Body></Body>,
        },
        {
            path: "/about",
            element: (<Suspense fallback = {<h1>Loading...</h1>}>
                <About></About>
                </Suspense>)
        },
        {
            path: "/contact",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/restaurants/:resId",
            element:<RestMenu></RestMenu>
        },
        {
            path:"/grocery",
            element: (<Suspense fallback = {<h1>Loading...</h1>}>
                <Grocery></Grocery>
                </Suspense>),
        },
        {
            path: "/cart",
            element: <Cart/>
        }
    ],
    errorElement: <Error></Error>
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


//When you're on the home page, your code of Grocery is not there.
//React tries to load it, but cannot load, since the Grocery file isn't loaded yet.
//So, the browsers throws an error of:
//     A component suspended while responding to synchronous input.

//Intermediately, react wants something to be on the screen when the Grocery page
//isn't loaded

//For this, we use a 'Suspense' component given to us by React.
//We wrap up our component inside this suspense component.

//We pass a fallback inside suspense which tells what to be on the screen in the meantime.
//You write JSX in it - you can also load Shimmer in it 



