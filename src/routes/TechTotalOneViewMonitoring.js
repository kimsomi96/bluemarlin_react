import techFastDataHandling from '../img/tech-total-one-view.png';
import Tech from "../components/Tech";

function TechTotalOneViewMonitoring() {
    return (
        <div>
            <div id="content">
                <div className="page-title">Total One View Monitoring
                    <p className="slogan">사용자가 사용하기 쉽고, 친숙한 기능들의 UI/UX 구조설계와 배치를 통해서,<br/>
                        업무를 한층 더 쉽게 접할 수 있도록 구현합니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>Total One View Monitoring </h3>
                    <figure><img src={techFastDataHandling} className="img-responsive center-block" alt="foo"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            <Tech/>
        </div>
    );
}

export default TechTotalOneViewMonitoring;