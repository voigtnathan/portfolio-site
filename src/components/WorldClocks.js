import React, { Component } from 'react';
import "../../src/style.css";
import moment from "moment";


class WorldClocks extends Component {

    state = {
        timeZones: {
            mn: moment().format('LTS'),
            hk: moment().subtract(14, 'hours').format('LTS'),
            lon: moment().add(6, 'hours').format('LTS')
        }
    }
    //on mount set the increment interval for all clocks to 1 sec
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //gets rid of interval on unmount to ensure no memory leaks
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        this.setState({
            timeZones: {
                mn: moment().format('LTS'),
                hk: moment().subtract(14, 'hours').format('LTS'),
                lon: moment().add(6, 'hours').format('LTS')
            }
        })
    }

    render() {
        return (
            <div id="demos">
                <ul>
                    <li><h4>Saint Paul Time - {this.state.timeZones.mn}</h4></li>
                    <li><h4>Hong Kong Time - {this.state.timeZones.hk}</h4></li>
                    <li><h4>London Time - {this.state.timeZones.lon}</h4></li>
                </ul>
            </div>
        )
    }
}

export default WorldClocks;




// export default function WorldClocks() {

//     let [times, setTimes] = useState({
//         mn : moment().format('LTS'),
//         hk : moment(-14, 'hours').format('LTS')
//     });
//     // let [time, setTime] = useState();
//     // let [delay, setDelay] = useState(1000);


//     //custom use interval hook since setInterval does NOT work with hooks
//     function useInterval(callback, delay) {
//         let savedCallback = useRef();

//         // Access most recent callback 
//         useEffect(() => {
//             savedCallback.current = callback;
//         }, [callback]);

//         // Set up the interval for tick
//         useEffect(() => {
//             function tick() {
//                 savedCallback.current();
//             }
//             //clean up side-effect of useEffect
//             //delay is interval between ticks
//             if (delay !== null) {
//                 let id = setInterval(tick, delay);
//                 return () => clearInterval(id);
//             }
//         }, [delay]);
//     }

//     //increment the clock by 1000ms for each time zone
//     useInterval(() => {


//           setTimes({
//               mn: moment().add(1000,'milliseconds').format('LTS'),
//               hk: moment(-14, 'hours').add(1000,'milliseconds').format('LTS')
//             });

//     }, 1000);


//     return (
//         <div id="demos">
//             <ul>
//                 <li><h1>Saint Paul Time - {times.mn}</h1></li>
//                 <li><h1>Hong Kong Time - {times.hk}</h1></li>
//             </ul>
//         </div>

//     )
// }