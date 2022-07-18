import icoSecurity1 from '../img/ico-security1.png';
import icoSecurity2 from '../img/ico-security2.png';
import icoSecurity3 from '../img/ico-security3.png';
import securitySlogan from '../img/prdt-security-slogan.png';
import securityFeature from '../img/prdt-security-feature.png';
import Prdt from "../components/Prdt";

function PrdtSecurity() {
    return (
        <div>
            <div id="content">
                <div className="page-title">Blue Marlin Security(로그분석시스템)
                    <p className="slogan">기업 내 보안장비 및 네트워크 장비에서 발생하는 각종 로그, 파일, DB 등의 정형/비정형 실시간
                        데이터를 유실없이 빠르게 수집, 저장(Hadoop기반)하여, <br/>
                        시스템 로그분석을 통해 기업 내 이상징후
                        로그도출 및 패턴분석(Biz Report)을 적기에 지원할 수 있습니다.</p>
                </div>
                {/*!-- / .page-title -->*/}
                <div className="container">
                    <h3>Blue Marlin Security</h3>
                    <div className="row">
                        <div className="col-md-7">
                            <ol className="detail-list">
                                <li><img src={icoSecurity1}/>
                                    <p>보안장비와 네트워크 환경 등에서 발생되는, 실시간 Big-Data의 수집 및 저장 ( Hadoop Architecture Optimizing
                                        tech)
                                        속도가 타사제품 성능 대비 10배 이상 빠름 <br/>
                                        (속도 : 100,000EPS 이상, &middot; 로그량 : A통신사 &middot; 방화벽 Log 5 TB 기준)</p>
                                </li>
                                <li><img src={icoSecurity2}/>
                                    <p>다수 장비 로그의 동시수집 및 저장이 가능하며, 하나의 화면 (One View)에서 모니터링이 가능 <br/>
                                        ( Multi Device to One Point View Monitoring )</p>
                                </li>
                                <li><img src={icoSecurity3}/>
                                    <p>저장된 Big-Data의 Biz 요구사항 발생 시 (분석데이터) , 수 분, 수 초 내 데이터 추출 및 조회 (Hadoop Architecture
                                        Indexing Tech.) 가 가능하여, Biz 요구사항 즉시 대응이 가능 (On Time)</p>
                                </li>
                            </ol>
                        </div>
                        <div className="col-md-5 detail-result">
                            <figure><img src={securitySlogan} className="img-responsive center-block"
                                         alt="foo"/>
                                <figcaption></figcaption>
                            </figure>
                            {/*<!-- <ol class="">
                           <li>Fast Data Handling </li>
                           <li>Total One View Monitoring </li>
                           <li>High Performance Function</li>
                         </ol>-->*/}
                        </div>
                    </div>
                    {/*<!-- / .row -->*/}
                    <div className="arrow-up"></div>
                    <section className="process">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="box">
                                    <h4>보안장비</h4>
                                    <ul>
                                        <li>F/W</li>
                                        <li>IDS / IPS</li>
                                        <li>DDoS</li>
                                        <li>UTM</li>
                                        <li>WAF</li>
                                        <li>TMS</li>
                                        <li>무선침입차단</li>
                                        <li>APT탐지</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="box">
                                    <h4>네트워크</h4>
                                    <ul>
                                        <li>라우터</li>
                                        <li>스위치</li>
                                        <li>NMS</li>
                                        <li>SMS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="box">
                                    <h4>보안시스템</h4>
                                    <ul>
                                        <li>DRM</li>
                                        <li>DLP</li>
                                        <li>MDM / MAM</li>
                                        <li>PMS</li>
                                        <li>Mail</li>
                                        <li>유해사이트 차단</li>
                                        <li>ESM</li>
                                        <li>APC / PMS</li>
                                        <li>계정/접근제어</li>
                                        <li>취약점진단</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="box">
                                    <h4>BIZ Appl</h4>
                                    <ul>
                                        <li>기간계</li>
                                        <li>영업전산</li>
                                        <li>사내시스템 등</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- / .row -->*/}
                    </section>
                    {/*<!-- / .process -->*/}
                    <h3>Blue Marlin Security 제품 특장점</h3>
                    <p className="features"> 로그분석관리 시스템 Blue Marlin은 <strong>1. 핵심서비스(서비스전략) 외</strong>, 2. 인증 및
                        Compliance준수, 3. 검증된 Reference Site에 의한 서비스 안정성, 4. 경쟁사 대
                        비 저가정책 등 고객 최우선 정책으로 제품 솔루션을 개발/서비스하고 있습니다.</p>
                    <figure><img src={securityFeature} className="img-responsive center-block" alt="foo"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            <Prdt/>
        </div>
    );
}

export default PrdtSecurity;