import productIOT from '../img/product-iot.png';
import Prdt from "../components/Prdt";

function PrdtIOT() {
    return (
        <div>
            <div id="content">
                <div className="page-title">IoT 분석 시스템
                    <p className="slogan">IoT 센서 장비를 통한 모든 IoT 서비스의 비정형 빅데이터를 수집하여, <br/>
                        에너지 절감이나 스마트홈 System 관리 등 다양한 IoT Biz에 활용 가능합니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>Blue Marlin IoT</h3>
                    <figure><img src={productIOT} className="img-responsive center-block" alt="foo"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            <Prdt/>
        </div>
    );
}

export default PrdtIOT;