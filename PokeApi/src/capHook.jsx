// useContext() = React Hooks that allow you to share values
//                between multiple levels of componets 
//                without passing props through each level

//PROVIDE COMPONET
// 1. import {createContext} from "react"
// 2. export const MyContext = createContext(); 
// 3. <MyContext.Propvider value={value}>
//  <Child />
//</MyContext.Provider>
// or the component that we wanna pass 
// QB



// CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react'
//    import {MyContext} from './CapHook' 
// 2. const value =  useContext(MyContext)
// or the component we wanna pass too
// RC
//
    import CapHook2 from "./capHook2.jsx";
    import {useState, createContext} from "react";

    export const  UserContext = createContext();


function CapHook(){

        const  [user, setUser] = useState("Pooh_Jr")

    return(<>
    <div className="box">
        <h1>Cap Hook 1</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
             <CapHook2 user= {user}/>
        </UserContext.Provider>
    </div>
    </>)
}

export default CapHook