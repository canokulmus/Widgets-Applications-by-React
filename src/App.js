import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import TextDesign from "./components/TextDesign";
import Translate from "./components/Translate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Route from "./components/Route";


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

    return (

        <div className="container-fluid p-0">

            <Navbar />

            <div className="ui container" style={{ marginTop: 30 }}>

                <Route path="/" >
                    <Accordion items={items} />
                </Route>


                <Route path="/translate" >
                    <Translate />
                </Route>


                <Route path="/search" >
                    <Search />
                </Route>


                <Route path="/text" >
                    <TextDesign
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>

            </div>

            <Footer />
        </div>
    );

}


export default App;