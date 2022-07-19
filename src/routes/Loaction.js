import Map from "../components/Map";

function Location(){
    return(
        <div>
            <div id="content">
                <div className="page-title">IT Security Biz & Online Marketing
                    <p className="slogan">(주) 피디정보통신은 IT Business를 바탕으로 IT Security Biz & Online Marketing 을 기본으로<br/>
                        최신 IT 트렌드를 접목한 비즈니스를 지속적으로 발굴하고 사업 영역을 확장시켜 나가고 있습니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>오시는 길</h3>
                    <div className="row">
                        <div className="col-md-7">
                            {/* iframe 들어갈 자리 */}
                            <Map/>
                        </div>
                        <div className="col-md-5">

                            <address>
                                <p className="office1"><i className="fa fa-map-marker"></i> R&amp;D Center : 서울특별시 강남구
                                    봉은사로 114길 46 건호 Bldg. 3층</p>
                                <p className="office1"><i className="fa fa-map-marker"></i> Main Office : 서울특별시 강남구 봉은사로
                                    114길 46 건호 Bldg. 3층</p>
                                <p className="office2"><i className="fa fa-map-marker"></i> 1사업장 (04783) 서울특별시 성동구
                                    성수이로20길 16 제이케이타워 8층</p>
                                <p className="office2"><i className="fa fa-map-marker"></i> 2사업장 (05055) 서울특별시 광진구
                                    아차산로362 동호 Bldg, 6층</p>

                            </address>
                            <p><i className="fa fa-phone-square"></i> <a href="tel:07087960393">070-8796-0393</a></p>
                            <p><i className="fa fa-fax"></i> 070-8796-0399</p>
                            <p><i className="fa fa-envelope-square"></i> <a
                                href="mailto:contact@pdic.co.kr">contact@pdic.co.kr</a></p>
                            <p><i className="fa fa-subway"></i> 지하철 : 삼성역 8번 출구로 직진하여 강남소방서 좌회전후 GS건물 3층</p>
                            <p><i className="fa fa-car"></i> 주차 : 건물 주차장을 이용해 주시기 바랍니다.</p>
                        </div>
                        {/*<!-- / .col-md-5 -->*/}
                    </div>
                    {/*<!-- / .row -->*/}
                </div>
                {/*<!-- / .container -->*/}
            </div>
            {/*<!-- / #content -->*/}
        </div>
    );
}

export default Location;