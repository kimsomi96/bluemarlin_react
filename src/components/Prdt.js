import {Link} from 'react-router-dom';

function Prdt() {
    return (
        <section id="service" className="container-fluid">
            <h2><small>The more Data The better Insight</small>
                Shape the Insight for Every Business</h2>
            <div className="row">
                <div className="col-md-3 col-xs-6" id="prdt-s-security"><Link to='/prdt-security'><i
                    className="fa fa-user-secret"></i>
                    <h3>Blue Marlin Security</h3>
                    <ul>
                        <li>네트웍/ 보안장비 로그</li>
                        <li>이상징후 탐지</li>
                        <li>상관 분석</li>
                        <li>컴플라이언스 준수</li>
                    </ul>
                </Link>
                </div>
                <div className="col-md-3 col-xs-6" id="prdt-s-iot"><Link to='/prdt-iot'><i
                    className="fa fa-connectdevelop"></i>
                    <h3>Blue Marlin loT</h3>
                    <ul>
                        <li>센서 데이터 분석</li>
                        <li>지형데이터 분석</li>
                        <li>기상데이터 분석</li>
                        <li>고객 행위 분석</li>
                    </ul>

                </Link>
                </div>
                <div className="col-md-3 col-xs-6" id="prdt-s-smart-factory">

                    <Link to='/prdt-smart-factory'>
                        <i className="fa fa-industry"></i>
                        <h3>Blue Marlin Smart Factory</h3>
                        <ul>
                            <li>공정 최적화</li>
                            <li>원재료비 절감</li>
                            <li>생산성 향상</li>
                            <li>재고 실시간 파악</li>
                        </ul>
                    </Link>
                </div>
                <div className="col-md-3 col-xs-6" id="prdt-s-platform">
                    <Link to='/prdt-platform'>
                        <i className="fa fa-archive"></i>
                        <h3>Blue Marlin Platform</h3>
                        <ul>
                            <li>ASP형 서비스</li>
                            <li>고속 통계 처리</li>
                            <li>스마트 리포트</li>
                            <li>손쉬운 맞춤형{/*<!--Customizing-->*/}</li>
                        </ul>

                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Prdt;