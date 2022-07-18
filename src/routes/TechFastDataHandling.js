import techFastDataHandling from '../img/tech-fast-data-handling.png';
import Tech from "../components/Tech";

function TechFastDataHandling() {
    return (
        <div>
            <div id="content">
                <div className="page-title">Fast Data Handling
                    <p className="slogan">Hadoop기반의 최적화된 Optimizing 시스템과 이중가속 분산병렬처리가 가능하여,<br/>
                        탁월한 속도향상 및 대용량 데이터의 처리가 가능합니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>Fast Data Handling (Hadoop Based)</h3>
                    <figure>
                        <figcaption><img src={techFastDataHandling} className="img-responsive center-block"/>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <Tech/>
        </div>
    );
}

export default TechFastDataHandling;