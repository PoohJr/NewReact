// useContext() = React Hooks that allow you to share values
//                between multiple levels of componets 
//                without passing props through each level
    import CapHook3 from "./capHook3.jsx";
    import React, {useState, useEffect, useContext} from "react";


function capHook2(){


    return(<>
    <div className="box">
        <h1>Cap Hook 2</h1>
        <CapHook3/>
    </div>
    </>)
}

export default capHook2