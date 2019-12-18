import React, { useState, useEffect, useRef } from "react";
import "../../src/style.css";
import moment, { utc } from "moment";
// import { string } from "prop-types";

export default function WorldClocks(){

    let [time, setTime] = useState(moment().format('LTS'));
    let [delay, setDelay] = useState(1000);


    //custom use interval hook since setInterval does NOT work with hooks
    function useInterval(callback, delay) {
       let savedCallback = useRef();

        // Access most recent callback 
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval for tick
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            //clean up side-effect of useEffect
            //delay is interval between ticks
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    //increment the clock by 1000ms
    useInterval(() => {
      let nextTick = moment().format('LTS');
        setTime(nextTick);
    }, 1000);

    return (
        <div id="demos">
            <h1>Saint Paul Time - {time}</h1>
        </div>
        
    )
}