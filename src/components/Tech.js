import {Link} from 'react-router-dom';

function Tech() {
    return (
        <div id="products" className="container-fluid no-gutter">
            <div className="row">
                <div id="product-bx01" className="col-md-4">
                    <Link to="/tech-fast-data-handling">
                        <div className="bx">
                            <h3>Fast Data Handling</h3>
                            <p>Hadoop기반의 최적화된 Optimizing 시스템과 이중가속 분산병렬처리가 가능하여, 탁월한 속도향상 및 대용량 데이터의 처리가 가능합니다.</p>
                            <ul>
                                <li>Security<i className="fa fa-lock"></i></li>
                                <li>IoT<i className="fa fa-object-group"></i></li>
                                <li>Smart factory<i className="fa fa-industry"></i></li>
                            </ul>

                        </div>

                        {/*<!-- / .bx -->*/}
                    </Link>
                </div>
                {/*<!-- / #product-bx01 .col-md-4 -->*/}
                <div id="product-bx02" className="col-md-4">
                    <Link to="/tech-total-one-view-monitoring">
                        <div className="bx">
                            <h3>Total One View Monitoring</h3>
                            <p>사용자가 사용하기 쉽고, 친숙한 기능들의 UI/UX 구조설계와 배치를 통해서, 업무를 한층 더 쉽게 접할 수 있도록 구현되어 있습니다.</p>
                            <ul>
                                <li>Security<i className="fa fa-lock"></i></li>
                                <li>IoT<i className="fa fa-object-group"></i></li>
                                <li>Smart factory<i className="fa fa-industry"></i></li>
                            </ul>
                        </div>
                        {/*<!-- / .bx -->*/}
                    </Link>
                </div>
                {/*<!-- / #product-bx02 .col-md-4 -->*/}
                <div id="product-bx03" className="col-md-4">
                    <Link to="/tech-high-func">
                        <div className="bx">
                            <h3>High Performance Function</h3>
                            <p>Hadoop기반의 빠른 검색 Indexing을 통해 검색기술을 향상시켰으며(HIVE 대비 10배의 속도 향상), 운영자의 효율성을 위해 DB조회가
                                간편합니다</p>
                            <ul>
                                <li>Security<i className="fa fa-lock"></i></li>
                                <li>IoT<i className="fa fa-object-group"></i></li>
                                <li>Smart factory<i className="fa fa-industry"></i></li>
                            </ul>
                        </div>
                        {/*<!-- / .bx -->*/}
                    </Link>
                </div>
                {/*<!-- / #product-bx03 .col-md-4 -->*/}
            </div>
            {/*<!-- / .row -->*/}
        </div>
    );
}

export default Tech;