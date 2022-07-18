import ProductSmartFactory from '../img/product-smart-factory.png';
import Prdt from "../components/Prdt";

function PrdtSmartFactory() {
    return (
        <div>
            <div id="content">
                <div className="page-title">지능형 공장 분석 시스템
                    <p className="slogan">공장 자동화, 제품 공정 로봇 센서 등의 비정형 빅데이터를 수집하여, <br/>
                        공정 최적화나 원재료비 절감 등 다양한 Smart Factory Biz에 활용 가능합니다.
                    </p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>Blue Marlin Smart Factory</h3>
                    <figure><img src={ProductSmartFactory} className="img-responsive center-block" alt="foo"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            <Prdt/>
        </div>
    );
}

export default PrdtSmartFactory;