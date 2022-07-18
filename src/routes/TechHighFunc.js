import techHighFunc from '../img/tech-high-func.png';
import Tech from "../components/Tech";

function TechHighFunc() {
    return (
        <div>
            <div id="content">
                <div className="page-title">High Performance Function
                    <p className="slogan">Hadoop기반의 빠른 검색 Indexing을 통해 검색기술을 향상시켰으며,<br/>
                        운영자의 효율성을 위해 DB조회가 간편합니다</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>High Performance Function</h3>
                    <figure><img src={techHighFunc} alt="foo" className="img-responsive center-block"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            <Tech/>
        </div>
    );
}

export default TechHighFunc;