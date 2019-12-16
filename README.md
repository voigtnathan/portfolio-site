## How to run
- visit natevoigt.org
- fork repo
- run npm install
- run gatsby develop

## Code that didn't work
-this is for my own personal reference but feel free to read through it all, myabe you'll save yourself some time!

- text contrast detector as a class component(uses hook in class component)

<!-- 
// import React, { Component } from "react"
// import brain from "brain.js";
// import "../../src/style.css";

// class TextContrast extends Component {

//     state = {
//         hexColor: '#6f42c1',
//         textShade: '#000000',
//         rgbObject: {r: 0.44, g: 0.26, b: 0.76}
//     }
//     // converts hexadecimal color code to rgb values
//     convertRgb = (hex) => {
//         // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//         var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//         hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//             return r + r + g + g + b + b;
//         });

//         let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

//         console.log(result ? {
//             r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
//             g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
//             b: Math.round(parseInt(result[3], 16) / 2.55) / 100
//         } : null)

//         let finalResult = {
//             r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
//             g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
//             b: Math.round(parseInt(result[3], 16) / 2.55) / 100
//         }

//        this.getTextColor(finalResult);

//     }

//     handleNewColor = (event, propertyName) => {
//         this.setState({
//             [propertyName]: event.target.value
//         }, () => {
//             this.convertRgb(this.state.hexColor);
//         });

//     }


//     getTextColor = (rgb) => {
//         // create new neural network
//         const network = new brain.NeuralNetwork();

//         // training neural network
//         network.train([
//             { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { dark: 1 } },
//             { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { light: 1 } },
//             { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { light: 1 } },
//             { input: { r: 0.0431, g: 0.3458, b: 0.2627 }, output: { light: 1 } },
//             { input: { r: 0.9333, g: 0.8784, b: 0.5686 }, output: { dark: 1 } },
//             { input: { r: 0.3490, g: 0.2705, b: 0.8901 }, output: { light: 1 } },
//             { input: { r: 0.3843, g: 0.4862, b: 0.0941 }, output: { light: 1 } },
//             { input: { r: 0.2274, g: 0.0078, b: 0.8627 }, output: { light: 1 } },
//             { input: { r: 0.3764, g: 0.3843, b: 0.6941 }, output: { light: 1 } },
//             { input: { r: 0.2862, g: 0.5960, b: 0.0470 }, output: { light: 1 } },
//             { input: { r: 0.6549, g: 0.7019, b: 0.7098 }, output: { dark: 1 } },
//             { input: { r: 0.0431, g: 0.0666, b: 0.4862 }, output: { light: 1 } },
//             { input: { r: 0.8431, g: 0.4431, b: 0.2627 }, output: { light: 1 } },
//             { input: { r: 0.6, g: 0.4, b: 0.2 }, output: { dark: 1 } },
//             { input: { r: 0, g: 0, b: 1 }, output: { light: 1 } },
//             { input: { r: 1, g: 0, b: 0 }, output: { dark: 1 } },
//             { input: { r: 0, g: 1, b: 0 }, output: { dark: 1 } },
//             { input: { r: 1, g: 0, b: 1 }, output: { dark: 1 } },
//             { input: { r: 0, g: 1, b: 1 }, output: { dark: 1 } },
//             { input: { r: 1, g: 1, b: 0 }, output: { dark: 1 } },
//             { input: { r: 0, g: 0, b: 0 }, output: { light: 1 } },
//             { input: { r: 1, g: 1, b: 1 }, output: { dark: 1 } }
//         ]);
//         let result = brain.likely(rgb, network);

//         console.log(result + ' XXXXXXXXXXXXXXXXXXXX  result')

//         let newTextShade;

//         if (result === "dark") {
//             newTextShade = "#000000"
//         } else {
//             newTextShade = "#fff"
//         };

//         // const newTextShade = result === "dark" ? "#000000" : "#fff";
//         console.log(newTextShade + ' XXXXXXXXXXXXXXXXX   NEW')

//         // this.setTextShade(newTextShade);
//         this.setState({
//             textShade: newTextShade
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div id="demos">
//                     <input type="color" label="Pick a color!" value={this.state.hexColor}
//                         onChange={(event) => this.handleNewColor(event, 'hexColor')} />
//                 </div>
//                 <div id="demos">
//                     <div id="panel" style={{ backgroundColor: this.state.hexColor }}>
//                         <h1 className="title-contrast" style={{ color: this.state.textShade }}>Text Matches To Background!</h1>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default TextContrast; -->