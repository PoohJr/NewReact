import React, {useState, useEffect} from "react";

function ClockApp(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date())
        }, 1000)

        
    return () => {
        clearInterval(intervalId);
    }
    }, [])

    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"; 

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)}:${meridiem}`;

        function padZero(num){
            return (num < 10 ? "0" : "") + num;
         }
    }

    return(<>
        <div className="container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    </>)
}

export default ClockApp

// Steps to study 
//  1. useEffect we are rendering the inerval every sec and made an array function to set new date we upfate time using
//  setTime() 
// 2. and use the cleam up whenb it unmounts or get taken off the DOM, to stop the interval if something ever happened
// 3. then make a functions to formnat the time & Add a return all thr time in `${Thes}`
// 4. make a function to add a zero behind the number if its single digits thats why the const are warpped in that function
// 5. and That s all Folk
//