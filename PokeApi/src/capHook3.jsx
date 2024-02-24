// useContext() = React Hooks that allow you to share values
//                between multiple levels of componets 
//                without passing props through each level
    import CapHook4 from "./capHook4.jsx";
    import React, {useContext} from "react";

    import { UserContext } from "./capHook.jsx";

   


function CapHook3(){

    const user = useContext(UserContext)

    return(<>
    <div className="box">
        <h1>Cap Hook 3</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <CapHook4 />
    </div>
    </>)
}

export default CapHook3