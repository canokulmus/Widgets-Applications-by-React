import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('React Js');
    const [results, setResults] = useState([])

    useEffect(() => {

        const search = async () => {

            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {

                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            })

            setResults(data.query.search);

        }


        if (term && !results.length) {

            search();
        } else {

            const timeOutId = setTimeout(() => {

                if (term) {
                    search();
                }
            }, 500)


            // to cancel old timeOut for new request 
            return () => {
                clearTimeout(timeOutId)
            }
        }




    }, [term]);


    const renderedResults = results.map((result) => {

        const regex = /(<([^>]+)>)/gi;  //NEW
        const cleanSnippet = result.snippet.replace(regex, ""); //NEW 

        return <div key={result.pageid} className="item" style={{marginTop:10}}>
            <div className="right floated content" >
                <a
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button"
                >
                    Go
                </a>
            </div>
            <div className="content" style={{marginTop:30}}>
                <div className="header">
                    {result.title}
                </div>
                {cleanSnippet}
            </div>
        </div>

    })


    return (

        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>

    );

}



export default Search;