import React from 'react';
import "../css/style.css"

const Homepage = () => {


    return (
        <div className="container-fluid first-screen d-flex flex-column justify-content-center bg-home">

            <div className="row d-flex flex-row justify-content-center ">

                <div className="card bg-transparent col-2  left-0 top-0" >

                    <a href="/accordion" className='py-3'>
                        <div className="card-body text-center ">

                            <img src="/accordion.png" className='img-fluid' width="70px" height="70px" alt="" />

                            <button className="btn btn-lg text-dark w-100 mt-2 bold">Accordion</button>
                        </div>

                    </a>
                </div>
                <div className="card bg-transparent col-2  right-0 top-0" >
                    <a href="/search" className='py-3'>
                        <div className="card-body text-center">

                            <img src="/wiki.png" className='img-fluid' width="70px" height="70px" alt="" />

                            <button className="btn btn-lg text-dark w-100 mt-2 bold">Wikipedia Search</button>
                        </div>
                    </a>

                </div>

            </div>

            <div className="row d-flex flex-row justify-content-center ">

                <div className="card bg-transparent col-2  left-0 bottom-0" >
                    <a href="/text" className='py-3'>
                        <div className="card-body text-center">
                            <img src="/text.png" className='img-fluid' width="70px" height="70px" alt="" />

                            <button className="btn btn-lg  text-dark w-100 mt-2 bold">Text Design</button>
                        </div>
                    </a>

                </div>
                <div className="card bg-transparent col-2  right-0 bottom-0" >
                    <a href="/translate" className='py-3'>
                        <div className="card-body text-center ">
                            <img src="/translate.png" className='img-fluid' width="70px" height="70px" alt="" />

                            <button className="btn btn-lg text-dark w-100  mt-2 bold">Google Translate</button>
                        </div>
                    </a>

                </div>

            </div>

        </div>
    );

}


export default Homepage;