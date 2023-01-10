import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './sabaree.jpeg';
import img1 from './pic.jpg';

import './port.css';

export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 mt-5">
                        <img src={img} className=" img-fluid h-100 col-lg-12"/>
                    </div>
                    <div className="col-lg-10 mt-5">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                    <h1>Sabareeswaran B</h1>
                    <i className="bx bxl-twitter"/>
                    </div>
                    <div className="col-lg-9">
                    <img src={img1} className=" img1 img-fluid h-100 col-lg-12"/>
                    </div>
                </div>
            </div>
        </>
    );
}