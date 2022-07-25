import logo from '../img/logo.png';
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <nav id="gnb" className="navbar navbar-default">
            <div className="dropdown-menu-box"></div>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#nav-top" aria-expanded="false"><span
                        className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span
                        className="icon-bar"></span> <span className="icon-bar"></span></button>
                    <a className="top-logo" href="/"><img src={logo} alt="BLUE MARLIN"/></a></div>
                <div className="collapse navbar-collapse" id="nav-top">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle" /*<?php if($gr_id=='foo'){echo 'active';}?>*/
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">About</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/about">회사소개</Link></li>
                                {/* <li> <a href="/page/history.html">연혁</a> </li>*/}
                                <li><Link to="/organization">조직도</Link></li>
                                <li><Link to="/business">사업영역</Link></li>
                                <li><Link to="/location">오시는 길</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown nav-technology"><a href="#"
                                                                   className="dropdown-toggle" /*<?php if($gr_id=='foo'){echo 'active';}?>*/
                                                                   data-toggle="dropdown" role="button"
                                                                   aria-haspopup="true"
                                                                   aria-expanded="false">Technology</a>
                            <ul className="dropdown-menu">

                                <li><Link to="/tech-fast-data-handling">Data Handling(Hadoop Based)</Link></li>
                                <li><Link to="/tech-total-one-view-monitoring">Total One View</Link></li>
                                <li><Link to="/tech-high-func">High Performance Function</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle" /*<?php if($gr_id=='foo'){echo 'active';}?>*/
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">Products</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/prdt-overview">Product Overview</Link></li>
                                <li><Link to="/prdt-security">Blue Marlin Security</Link></li>
                                <li><Link to="/prdt-iot">Blue Marlin IoT</Link></li>
                                <li><Link to="/prdt-smart-factory">Blue Marlin 스마트공장</Link></li>
                                <li><Link to="/prdt-platform">Blue Marlin Platform </Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle" /*<?php if($gr_id=='foo'){echo 'active';}?>*/
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">Demo</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/demo">데모사이트</Link></li>
                                <li><Link to="/apply-demo">데모신청</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle" /*<?php if($gr_id=='foo'){echo 'active';}?>*/
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">Support</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/support">고객지원</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {/* / navbar-nav */}
                </div>
                {/* /.navbar-collapse */}
            </div>
            {/* / .container */}
        </nav>

);
}
export default Nav;