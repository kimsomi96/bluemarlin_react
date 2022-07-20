import splash01 from '../img/splash01.jpg';
import splash02 from '../img/splash02.jpg';
import splashMO01 from '../img/splash-mo01.jpg';
import splashMO02 from '../img/splash-mo02.jpg';

function Splash() {
    return (
        <div>
            <div id="splash" style={{"overflow": "hidden",}}>
                <ul className="slides">
                    <li><img src={splash01} alt="" className="hidden-xs"/><img src={splashMO01} alt=""
                                                                               className="visible-xs-block hidden-sm"/>
                    </li>
                    <li><img src={splash02} alt="" className="hidden-xs"/><img src={splashMO02} alt=""
                                                                               className="visible-xs-block hidden-sm"/>
                    </li>
                </ul>
            </div>
            <div className="btn-wrap">
                <button className="slideBtn1">1</button>
                <button className="slideBtn2">2</button>
            </div>
        </div>
    );
}

export default Splash;