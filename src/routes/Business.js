import businessField1 from "../img/business-field1.jpg";
import businessField2 from "../img/business-field2.jpg";
import businessField3 from "../img/business-field3.jpg";

function Business() {
    return(
        <div>
            <div id="content" style={{paddingBottom:"40px",}}>
                <div className="page-title">IT Business based Planning
                    <p className="slogan">신규 IT 시장을 선도하고 인지도 향상을 위해 끊임없이 노력합니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>사업영역</h3>
                    <div className="row business-field">
                        <div className="col-md-4"><span className="title">
        <h3>IT Biz</h3>
        </span> <img src={businessField1} className="img-responsive center-block" alt=""/>
                            <ul>
                                {/*<!-- <li> 빅데이타 솔루션(자사: Blue Marlin) </li>
                                <li>보안 솔루션제공 사업(타사제품)</li>
                                <li>보안솔루션 기획 사업</li>
                                <li>보안솔루션 운영 대행</li>
                                <li>신규 IT 솔루션 발굴</li>
                                <li>B2B / B2C 보안 컨설팅</li>
                                <li>교육 사업 (컨설팅)</li> -->*/}
                                <li>보안 솔루션 제공 사업(타사제품)</li>
                                <li>보안 솔루션 기획 사업</li>
                                <li>보안 솔루션 운영 대행</li>
                            </ul>
                        </div>
                        <div className="col-md-4"><span className="title">
        <h3> ITO 및 R&D 아웃소싱 Biz <small>(IT 인력 아웃소싱및 개발대행)</small></h3>
        </span> <img src={businessField2} className="img-responsive center-block" alt=""/>
                            <ul>
                                <li>보안 관제 인력 파견</li>
                                <li>보안 시스템 운영 인력 파견</li>
                                <li>보안 컨설팅 인력 파견</li>
                                <li>기타 개발 대행 및 파견 <br/>
                                    (AI, 딥러닝, 빅데이터,
                                    채팅봇 기술개발)</li>
                            </ul>
                        </div>
                        <div className="col-md-4"><span className="title">
        <h3>Big Data Biz<small>(Blue Marlin Solution & Platform)</small></h3>
        </span> <img src={businessField3} className="img-responsive center-block" alt=""/>
                            <ul>
                                <li>Blue Marlin Platform</li>
                                <li>Blue Marlin Security</li>
                                <li>Blue Marlin IoT</li>
                                <li>Blue Marlin Smart Factory</li>
                                <li>Customizing Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*<!-- / .container -->*/}
            </div>
            {/*<!-- / #content -->*/}
        </div>
    );
}

export default Business;