import logo from '../img/logo.png';


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
                                                    className="dropdown-toggle <?php if($gr_id=='foo'){echo 'active';}?>"
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">About</a>
                            <ul className="dropdown-menu">
                                <li><a href="/page/about.html">회사소개</a></li>
                                {/* <li> <a href="/page/history.html">연혁</a> </li> */}
                                <li><a href="/page/organization.html">조직도</a></li>
                                <li><a href="/page/business.html">사업영역</a></li>
                                <li><a href="/page/location.html">오시는 길</a></li>
                            </ul>
                        </li>
                        <li className="dropdown nav-technology"><a href="#"
                                                                   className="dropdown-toggle <?php if($gr_id=='foo'){echo 'active';}?>"
                                                                   data-toggle="dropdown" role="button"
                                                                   aria-haspopup="true"
                                                                   aria-expanded="false">Technology</a>
                            <ul className="dropdown-menu">

                                <li><a href="/page/tech-fast-data-handling.html">Data Handling(Hadoop Based)</a></li>
                                <li><a href="/page/tech-total-one-view-monitoring.html">Total One View</a></li>
                                <li><a href="/page/tech-high-func.html">High Performance Function</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle <?php if($gr_id=='foo'){echo 'active';}?>"
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">Products</a>
                            <ul className="dropdown-menu">
                                <li><a href="/page/prdt-product-overview.html">Product Overview</a></li>
                                <li><a href="/page/prdt-security.html">Blue Marlin Security</a></li>
                                <li><a href="/page/prdt-iot.html">Blue Marlin IoT</a></li>
                                <li><a href="/page/prdt-smart-factory.html">Blue Marlin 스마트공장</a></li>
                                <li><a href="/page/prdt-platform.html">Blue Marlin Platform </a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle <?php if($gr_id=='foo'){echo 'active';}?>"
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">Demo</a>
                            <ul className="dropdown-menu">
                                <li><a href="/page/demo.html">데모사이트</a></li>
                                <li><a href="/page/apply-demo.html">데모신청</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"
                                                    className="dropdown-toggle <?php if($gr_id=='foo'){echo 'active';}?>"
                                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                                    aria-expanded="false">Support</a>
                            <ul className="dropdown-menu">
                                <li><a href="/page/support.html">고객지원</a></li>
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