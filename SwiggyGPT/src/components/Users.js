
/* 
    useEffect ( () => {
       const timer =  setInterval 
        ( ()=> {
            console.log("Hello");
            },1000);
        console.log("useEffect");      2

        THIS FUNCTION IS BASICALLY CALLED 
        WHEN YOU ARE UNMOUNTING A COMPONENT
        return ()=>{
            
            clearInterval(timer);
            console.log("useEffect return");    3
        }

    },[]);
    console.log(render);        1
*/


const Users = (props) =>{
return <div className = "userCard">
<h2>Name : {props.name}</h2>
<h2>Location : Melbourne</h2>
<h2>Contact : sksrishtikhosla111@gmail.com</h2>
</div>
};

export default Users;