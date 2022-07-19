import aboutLogo from "../img/logo-about.png";

function About() {
    return (
        <div>
            <div id="content">
                <div className="page-title">IT Security Solution Biz & ITO
                    <p className="slogan">(주) 피디정보통신은 IT Business를 바탕으로 <br/>
                        최신 IT 트렌드를 접목한 비즈니스를 지속적으로 발굴하고 사업 영역을 확장시켜 나가고 있습니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>회사소개</h3>
                    <img src={aboutLogo} className="img-responsive center-block about-logo"/>
                        <p className="about-slogan"> (주) 피디정보통신은 IT Business를 바탕으로 IT Security Solution Biz & ITO 를
                            기본으로 <br/>
                                최신 IT 트렌드를 접목한 비즈니스를 지속적으로 발굴하고 사업 영역을 확장시켜 나가고 있습니다.</p>
                        <div className="row about-article">
                            <div className="col-md-4">
                                <div className="box">
                                    <h4>회사명</h4>
                                    (주) 피디정보통신
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <h4>설립일</h4>
                                    2012년 9월 25일
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <h4>대표이사</h4>
                                    장 호
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <h4>소재지</h4>
                                    (본사) 서울특별시 강남구 봉은사로 114길 46 건호 Bldg. 3층
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <h4>총 자산</h4>
                                    105억원
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <h4>매출액</h4>
                                    113억원 (2016년 기준)
                                </div>
                            </div>
                        </div>
                        {/*<!-- / .row -->*/}
                </div>
                {/*<!-- / .container -->*/}
            </div>
        </div>
);
}

export default About;