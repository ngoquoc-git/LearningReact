import React from 'react';
import ReactDOM from 'react-dom';

const Calculator = () =>{
    return(
        <div className="Calculator">
            <h1>Hello World</h1>
            <div className="display"><input disabled></input></div>
            <div className="C">C</div>
            <div className="plus">+</div>
            <div className="minus">_</div>
            <div className="multiple">*</div>
            <div className="divide">/</div>
            <div className="9">9</div>
            <div className="8">8</div>
            <div className="7">7</div>
            <div className="6">6</div>
            <div className="5">5</div>
            <div className="4">4</div>
            <div className="3">3</div>
            <div className="2">2</div>
            <div className="1">1</div>
            <div className="0">0</div>
            <div className="equal">=</div>
        </div>
    );
}

export default Calculator;