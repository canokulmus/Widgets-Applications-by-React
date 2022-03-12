import React, { useState, useEffect, useRef } from 'react'




const Dropdown = ({ selected, onSelectedChange, options, isColored, label }) => {

    const [open, setOpen] = useState(0);

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (event) => {

            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        },
            { capture: true }
        );
    }, []);



    const renderedOptions = options.map((option) => {

        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    onSelectedChange(option);
                }}
            >

                {option.label}

                {isColored ? <i style={{ float: "right", color: option.value}} className="circle icon"></i> : "" }
                

            </div>
        )
    })

    return (
        <div>

            <div ref={ref} className="ui form">
                <div className="field">
                    <label htmlFor="" className="label">{label}</label>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>);

}


Dropdown.defaultProps = {

    isColored:false
}


export default Dropdown;