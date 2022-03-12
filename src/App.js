import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import TextDesign from "./components/TextDesign";
import Translate from "./components/Translate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const items = [
    {
        title: "What is react?",
        content: "React is a front-end javascript framework."
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers."
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components."
    },
    {
        title: "How many widgets does this application have?",
        content: "This application have 4 widgets namely Accordion, Wikipedia Search, Text Design and Google Translate"
    },

]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A shade of Blue",
        value: "blue"
    },
    {
        label: "The Color Purple",
        value: "purple"
    },
    {
        label: "The Color Orange",
        value: "orange"
    },
    {
        label: "The Color Brown",
        value: "brown"
    },
    {
        label: "The Color Pink",
        value: "pink"
    }
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    const [activeWidget, setActiveWidget] = useState("text")

    const [renderedResult, setRenderedResult] = useState("");

    useEffect(() => {
        const result = () => {

            if (activeWidget === "accordion") {

                setRenderedResult(<Accordion items={items} />)

            }
            else if (activeWidget === "search") {

                setRenderedResult(<Search />);

            }
            else if (activeWidget === "text") {
                setRenderedResult(<TextDesign
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />);
            }
            else if (activeWidget === "translate") {
                setRenderedResult(<Translate />);
            }
        }

        result();

    }, [activeWidget, selected])


    return (

        <div className="container-fluid">

            <Navbar

                activeWidget={activeWidget}
                setActiveWidget={setActiveWidget}
            />

            <div className="ui container" style={{ marginTop: 30 }}>

                {renderedResult}

            </div>


            <Footer/>
        </div>
    );

}


export default App;