import Product from "../components/Prdt";
import PrdtOverviewImg from "../img/product-overview.png";

function PrdtOverview() {
    return (
        <div>
            <div id="content">
                <div className="page-title">Based On Real-Time & High-Speed Big Data Processing Architecture
                    <p className="slogan">대용량 빅데이터를 실시간 & 고속 병렬 처리 기반의 최적화된 아키텍처를 통해 처리하는 시스템으로,<br/>
                        다양한 비즈니스 유형에 적용이 가능합니다.
                    </p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>Product Overview</h3>

                    <img src={PrdtOverviewImg} alt="" className="center-block img-responsive"/></div>
                {/*<!-- / .container -->*/}
                <Product/>
                {/*<!-- / #service .container-fluid -->*/}
            </div>
        </div>
    );
}

export default PrdtOverview;