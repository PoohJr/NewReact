// useContext() = React Hooks that allow you to share values
//                between multiple levels of componets 
//                without passing props through each level

    import  React, {useContext} from "react";
    import { UserContext } from "./capHook.jsx";

    
function CapHook4(){

    const user = useContext(UserContext)

    return(
    <>
    <div className="box">
        <h1>Cap Hook 4</h1>
        <h2> {`Bye ${user}`}</h2>
    </div>
    </>)
}

export default CapHook4