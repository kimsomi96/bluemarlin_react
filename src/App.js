import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/App.css';
import './css/font-awesome.min.css';
import './css/bootstrap.css'
import './css/style.css';
import Home from "./components/Home";
import TechFastDataHandling from "./routes/TechFastDataHandling";
import Nav from "./components/Nav";
import Tail from "./components/Tail";
import About from "./routes/About";
import Organization from "./routes/Organization";
import Business from "./routes/Business";
import Location from "./routes/Loaction";
import TechTotalOneViewMonitoring from "./routes/TechTotalOneViewMonitoring";
import TechHighFunc from "./routes/TechHighFunc";
import Demo from "./routes/Demo";
import PrdtOverview from "./routes/PrdtOverview";
import PrdtSecurity from "./routes/PrdtSecurity";
import PrdtIOT from "./routes/PrdtIOT";
import PrdtSmartFactory from "./routes/PrdtSmartFactory";
import PrdtFlatform from "./routes/PrdtFlatform";
import ApplyDemo from "./routes/ApplyDemo";
import Support from "./routes/Support";
import Privacy from "./routes/Privacy";
import "./js/myfunction";
// import "./js/bootstrap.min";
// import "./js/jquery.flexslider-min";


function App() {
    return (
        <div className="wrapper" style={{flex:"1 1 auto",}}>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/organization" element={<Organization/>}/>
                    <Route path="/business" element={<Business/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/prdt-overview" element={<PrdtOverview/>}/>
                    <Route path="/prdt-security" element={<PrdtSecurity/>}/>
                    <Route path="/prdt-iot" element={<PrdtIOT/>}/>
                    <Route path="/prdt-smart-factory" element={<PrdtSmartFactory/>}/>
                    <Route path="/prdt-platform" element={<PrdtFlatform/>}/>
                    <Route path="/tech-fast-data-handling" element={<TechFastDataHandling/>}/>
                    <Route path="/tech-total-one-view-monitoring" element={<TechTotalOneViewMonitoring/>}/>
                    <Route path="/tech-high-func" element={<TechHighFunc/>}/>
                    <Route path="/apply-demo" element={<ApplyDemo/>}/>
                    <Route path="/demo" element={<Demo/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                </Routes>
                <Tail/>
            </BrowserRouter>
        </div>
    );
}

export default App;
