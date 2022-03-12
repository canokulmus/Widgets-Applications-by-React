import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';


const TextDesign = ({ options, selected, onSelectedChange }) => {

    const [size, setSize] = useState(30);
    const [text, setText] = useState("");
    const [weight, setWeight] = useState("bold");


    useEffect(() => {
        setText(`The text is ${selected.value}.`)
    }, [selected])


    return (
        <div className="">

            <Dropdown
                label = "Select a Color"
                selected={selected}
                onSelectedChange={onSelectedChange}
                options={options}
                isColored={() => true}
            />

            <div style={{ marginTop: 20 }} className="ui form">
                <div className="field">
                    <label htmlFor="" className="label">Modify Text Size</label>

                    <button
                        onClick={() => size <= 10 ? null : setSize(size - 10)}
                        className="ui labeled icon button">
                        <i className="down arrow icon"></i>
                        Decrease
                    </button>
                    <button
                        onClick={() => setSize(size + 10)}
                        className="ui right labeled icon button">
                        <i className="up arrow icon"></i>
                        Increase
                    </button>

                </div>
            </div>
            <div style={{ marginTop: 20 }} className="ui form">
                <div className="field">
                    <label htmlFor="" className="label">Text type</label>

                    <div
                        onClick={() => setText(text.toUpperCase())}
                        className="ui button" tabIndex="0">
                        Uppercase
                        <span> (AA)</span>
                    </div>
                    <div
                        onClick={() => setText(text.toLowerCase())}
                        className="ui button" tabIndex="0">
                        Lowercase
                        <span> (aa)</span>
                    </div>
                    <div
                        onClick={() => {

                            const lower = text.toLowerCase();
                            setText(text.charAt(0).toUpperCase() + lower.slice(1));

                        }}
                        className="ui button" tabIndex="0">
                        Capitalize
                        <span> (Aa)</span>
                    </div>

                </div>
            </div>
            <div style={{ marginTop: 20 }} className="ui form">
                <div className="field">
                    <label htmlFor="" className="label">Font Weight</label>

                    <div
                        onClick={() => setWeight("normal")}
                        className="ui button" tabIndex="0">
                        Normal
                    </div>
                    <div
                        onClick={() => setWeight("bold")}
                        className="ui button" tabIndex="0">
                        Bold
                    </div>

                </div>
            </div>
            {/* <h1 id='theText' style={{ color: selected.value, fontSize: size }}>The text is {selected.value}.</h1> */}
            <h1 id='theText' style={{ color: selected.value, fontSize: size, fontWeight: weight }}>{text}</h1>
        </div>


    );



}


export default TextDesign;