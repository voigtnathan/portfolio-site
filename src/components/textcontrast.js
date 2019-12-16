import React, { useState, useEffect } from "react"
import brain from "brain.js";
import "../../src/style.css";

function TextContrast() {
    //useState for instant local state in sync with browser
    let [hexColor, setHexColor] = useState('#6f42c1');
    let [textShade, setTextShade] = useState('#000000');
    //create neural network
    let network = new brain.NeuralNetwork();

    //set new bg color state and call converter to make the info usable for the AI
    function handleChange(event) {
        setHexColor(event.target.value);
        convertRgb(event.target.value);
    }

    // converts hexadecimal color code to rgb values
    function convertRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        //check rgb setup
        console.log(result ? {
            r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
            g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
            b: Math.round(parseInt(result[3], 16) / 2.55) / 100
        } : null)


        //convert rgb to object within AI boundaries
        let finalResult = {
            r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
            g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
            b: Math.round(parseInt(result[3], 16) / 2.55) / 100
        }

        //call AI
        getTextColor(finalResult);

    }


    function getTextColor(rgb){
        
        // training neural network
        network.train([
            { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { dark: 1 } },
            { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { light: 1 } },
            { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { light: 1 } },
            { input: { r: 0.0431, g: 0.3458, b: 0.2627 }, output: { light: 1 } },
            { input: { r: 0.9333, g: 0.8784, b: 0.5686 }, output: { dark: 1 } },
            { input: { r: 0.3490, g: 0.2705, b: 0.8901 }, output: { light: 1 } },
            { input: { r: 0.3843, g: 0.4862, b: 0.0941 }, output: { light: 1 } },
            { input: { r: 0.2274, g: 0.0078, b: 0.8627 }, output: { light: 1 } },
            { input: { r: 0.3764, g: 0.3843, b: 0.6941 }, output: { light: 1 } },
            { input: { r: 0.2862, g: 0.5960, b: 0.0470 }, output: { light: 1 } },
            { input: { r: 0.6549, g: 0.7019, b: 0.7098 }, output: { dark: 1 } },
            { input: { r: 0.0431, g: 0.0666, b: 0.4862 }, output: { light: 1 } },
            { input: { r: 0.8431, g: 0.4431, b: 0.2627 }, output: { light: 1 } },
            { input: { r: 0.6, g: 0.4, b: 0.2 }, output: { dark: 1 } },
            { input: { r: 0, g: 0, b: 1 }, output: { light: 1 } },
            { input: { r: 1, g: 0, b: 0 }, output: { dark: 1 } },
            { input: { r: 0, g: 1, b: 0 }, output: { dark: 1 } },
            { input: { r: 1, g: 0, b: 1 }, output: { dark: 1 } },
            { input: { r: 0, g: 1, b: 1 }, output: { dark: 1 } },
            { input: { r: 1, g: 1, b: 0 }, output: { dark: 1 } },
            { input: { r: 0, g: 0, b: 0 }, output: { light: 1 } },
            { input: { r: 1, g: 1, b: 1 }, output: { dark: 1 } },
            { input: { r: 0.5, g: 0, b: 0.5 }, output: { light: 1 } },
            { input: { r: 0.5, g: 0.5, b: 0 }, output: { light: 1 } },
        ]);
        //let AI guess based on training
        let result = brain.likely(rgb, network);

        let newTextShade;
        if (result === "dark") {
            newTextShade = "#000000"
        } else {
            newTextShade = "#fff"
        };
        //set new text shade state
        setTextShade(newTextShade);
    }


    return (
        <div>
            <div id="demos">
                <input type="color" value={hexColor} 
                    onChange={handleChange} /><p>Pick a color! </p>
            </div>
            <div id="demos">
                <div id="panel" style={{ backgroundColor: hexColor }}>
                    <h1 className="title-contrast" style={{ color: textShade }}>
                        Text Matches To Background!
                            </h1>
                </div>
            </div>
        </div>
    )
}

export default TextContrast;