import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert';


const options = [

    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Dutch",
        value: "nl"

    },
    {
        label: "English",
        value: "en"

    },
    {
        label: "French",
        value: "fr"

    },
    {
        label: "German",
        value: "de"

    }
]


const Translate = () => {

    const [language, setLanguage] = useState(options[5]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text:</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <br />
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className='ui header'>Output:</h3>

            <Convert
                language={language}
                text={text}
            />
        </div>
    );

}


export default Translate;