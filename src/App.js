import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/App.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/bootstrap.css'
import Home from "./components/Home";
import TechFastDataHandling from "./routes/TechFastDataHandling";
import Nav from "./components/Nav";
import Tail from "./components/Tail";
import TechTotalOneViewMonitoring from "./routes/TechTotalOneViewMonitoring";
import TechHighFunc from "./routes/TechHighFunc";
import Demo from "./routes/Demo";
import PrdtSecurity from "./routes/PrdtSecurity";
import PrdtIOT from "./routes/PrdtIOT";
import PrdtSmartFactory from "./routes/PrdtSmartFactory";
import PrdtFlatform from "./routes/PrdtFlatform";
import ApplyDemo from "./routes/ApplyDemo";
import $ from 'jquery';


function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/prdt-security" element={<PrdtSecurity/>}/>
                <Route path="/prdt-iot" element={<PrdtIOT/>}/>
                <Route path="/prdt-smart-factory" element={<PrdtSmartFactory/>}/>
                <Route path="/prdt-platform" element={<PrdtFlatform/>}/>
                <Route path="/tech-fast-data-handling" element={<TechFastDataHandling/>}/>
                <Route path="/tech-total-one-view-monitoring" element={<TechTotalOneViewMonitoring/>}/>
                <Route path="/tech-high-func" element={<TechHighFunc/>}/>
                <Route path="/apply-demo" element={<ApplyDemo/>}/>
            </Routes>
            <Tail/>
        </BrowserRouter>
    );
}

export default App;
