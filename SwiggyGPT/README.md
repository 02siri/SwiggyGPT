# Namaste React
//heading constant
//creating element h1
//{} - attributes of h1 tag

//const heading = React.createElement("h1",{},"Hello World from React :)");

//h1 is a type of object with the following props
//children : Hello from React
//id: heading 
//scope1 constant
//creates a root or a code inside the div id "root"

//const scope1 = ReactDOM.createRoot(document.getElementById("root"));


//and injects / puts 'heading' inside that root
//scope1.render(heading);

//CREATING NESTED DIV STRUCTURE
/*
<div id = root>
    <div id = parent>
        <div id = child>
            <h1>I am an h1 tag</h1>
        </div>
    </div>
</div>
*/
  
// const parent = React.createElement
// ("div",{id:"parent"},React.createElement
// ("div",{id:"child"},React.createElement
// ("h1",{},"I am an h1 tag")));

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//CREATING SIBLINGs
/*
<div id = root>
    <div id = parent>
        <div id = child>
            <h1>I am an h1 tag</h1>   // THESE TWO
            <h2>I am an h2 tag</h2>  // ARE SIBLINGS
        </div>
    </div>
</div>
*/

import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComp = () => {
    return <h1>This is a React Functional Component</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComp/>);



INDEX.CSS
.header {
    display:flex;
    justify-content: space-between;
    border: 1px solid black;
}

.logo
{
    display: flex;
   width: 200px;
   height: 200px;
}

.nav-items
{
    padding: 0px 20px;
}
.nav-items> ul{
    display:flex;
    list-style-type: none;
    font-size: 24px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;

}

.nav-items> ul >li{
   padding: 10px;
   margin: 10px;
}

.restContainer
{
    display:flex;
    flex-wrap: wrap;
}
.res-card
{
    margin: 5px;
    padding: 5px;
    width: 200px;
    
}

.res-card:hover{
    cursor:pointer;
    border:1px solid black;
}

/* .filter-btn
{
    margin: 10px;
    cursor: pointer;
} */

.res-logo
{
    width: 100%;

}

.shimmer-container
{   
    display:flex;
    flex-wrap: wrap;
}



.shimmer-cards
{
    height : 400px;
    width:  200px;
    margin: 20px;
    background-color: #F0F0F0;

}

.login
{
    padding: 0 20px;
    cursor: pointer;
}

.filter
{
    display: flex;
}

.userCard
{
    padding: 10px;
    border: 1px solid black;
}