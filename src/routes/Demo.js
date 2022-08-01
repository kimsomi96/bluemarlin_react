import React from 'react';

function Demo(){
    return(
        <div id="content">
            <div className="page-title">IT Security Biz & Online Marketing
                <p className="slogan">(주) 피디정보통신은 IT Business를 바탕으로 IT Security Biz & Online Marketing 을 기본으로<br/>
                    최신 IT 트렌드를 접목한 비즈니스를 지속적으로 발굴하고 사업 영역을 확장시켜 나가고 있습니다.</p>
            </div>
            {/*<!-- / .page-title -->*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="demo-message"><p>
                        데모 서비스 신청 후,<br/>
                        해당 영업사원이 사이트를 오픈하여 서비스를 제공합니다.
                    </p>
                        <p>안정적이고, 원활한 서비스를 위해서 항상 최선을 다 할 것을 약속 드립니다.<br/>
                            <br/>
                                감사합니다.
                        </p></div>
                    {/*<!-- / .col-md-12 -->*/}
                </div>


            </div>
            {/*<!-- / .container -->*/}
        </div>
    );
}

export default Demo;