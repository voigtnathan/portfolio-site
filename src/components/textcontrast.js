import React, { Component } from "react"
import brain from "brain.js";

class TextContrast extends Component {

    // {/* <script src="https://unpkg.com/brain.js@1.1.2/browser.min.js"></script> */}

    state = {
        hexColor: '#000000',
        rgb: null
    }
    // converts hexadecimal color code to rgb values
    convertRgb = (hex) => {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        
        console.log(result ? {
            r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
            g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
            b: Math.round(parseInt(result[3], 16) / 2.55) / 100
        } : null)

        // this.setState({
        //     rgb: result ? {
        //         r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        //         g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        //         b: Math.round(parseInt(result[3], 16) / 2.55) / 100
        //     } : null
        // })

        console.log(this.state.rgb)
    }

    handleNewColor = (event, propertyName) => {
        this.setState({
            [propertyName]: event.target.value
        });
    }
    // end handleChange
   
    componentDidUpdate(prevState){
        if(this.state.hexColor !== prevState.hexColor){
            this.convertRgb(this.state.hexColor);
        }
       
    }

    // // create new neural network
    // input.addEventListener("change", (event) => {
    //     const rgb = convertRgb(event.target.value);
    //     const network = new brain.NeuralNetwork();



    // training neural network
    // network.train([
    //     { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { dark: 1 } },
    //     { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { light: 1 } },
    //     { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { light: 1 } },
    //     { input: { r: 0.0431, g: 0.3458, b: 0.2627 }, output: { light: 1 } },
    //     { input: { r: 0.9333, g: 0.8784, b: 0.5686 }, output: { dark: 1 } },
    //     { input: { r: 0.3490, g: 0.2705, b: 0.8901 }, output: { light: 1 } },
    //     { input: { r: 0.3843, g: 0.4862, b: 0.0941 }, output: { light: 1 } },
    //     { input: { r: 0.2274, g: 0.0078, b: 0.8627 }, output: { light: 1 } },
    //     { input: { r: 0.3764, g: 0.3843, b: 0.6941 }, output: { light: 1 } },
    //     { input: { r: 0.2862, g: 0.5960, b: 0.0470 }, output: { light: 1 } },
    //     { input: { r: 0.6549, g: 0.7019, b: 0.7098 }, output: { dark: 1 } },
    //     { input: { r: 0.0431, g: 0.0666, b: 0.4862 }, output: { light: 1 } },
    //     { input: { r: 0.8431, g: 0.4431, b: 0.2627 }, output: { light: 1 } },
    // ]);




    // neural network uses training cases to estimate whether or not text should be light or dark. 
    // estimates are returned as a confidence percentage between 0 & 1

    // const result = brain.likely(rgb, network);
    // console.log(result);
    // panel.style.background = event.target.value;
    // panel.style.color = result === "dark" ? "black" : "white";
    // });
    render() {
        return (
            <div>
                <input type="color" value={this.state.hexColor}
                    onChange={(event) => this.handleNewColor(event, 'hexColor')} />
                <div id="panel">Text Matches To Background</div>
            </div>
        )
    }
}

export default TextContrast;