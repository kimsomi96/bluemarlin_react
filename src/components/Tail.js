import {Link} from 'react-router-dom';
import logoAlt from '../img/logo-alt.png';

function Tail(){
    return(<footer id="copyright">
        <div className="container">
            <div className="row col-md-6">
                <p>(주) 피디정보통신</p>
                <address><i className="fa fa-map-marker"></i> 본사 (Main Office) : 서울특별시 강남구 봉은사로 114길 46 건호 Bldg. 3층
                </address>
                <address><i className="fa fa-map-marker"></i> 1사업장 (04783) 서울특별시 성동구 성수이로20길 16 제이케이타워 8층</address>
                <address><i className="fa fa-map-marker"></i> 2사업장 (05055) 서울특별시 광진구 아차산로362 동호 Bldg, 6층</address>
                <p><span className="contact-info"><i className="fa fa-phone-square"></i> TEL : <a
                    href="tel:07087960393">070-8796-0393</a></span> <span className="contact-info"><i
                    className="fa fa-fax"></i> FAX : 070-8796-0399 </span> <span className="contact-info"><i
                    className="fa fa-envelope-square"></i> <a
                    href="mailto:contact@pdic.co.kr">contact@pdic.co.kr</a></span></p>

                <p><i className="fa fa-lock"></i> <Link to="/privacy">개인정보처리방침</Link></p>
                <p>Copyright &copy; 2017 Blue Marlin All rights reserved.</p>
            </div>
            <div className="row col-md-6">
                <div className="pull_right"><img src={logoAlt} className="img-responsive" alt="BLUE MARLIN"/>
                    <div className="related_site">
                        <form action="">
                            <select className="">
                                <option value="nolink">본사홈페이지로 이동</option>
                                <option value="//www.pdic.co.kr">피디정보통신</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            {/*<!-- / .row col-md-6 -->*/}
        </div>
    </footer>

);
}

export default Tail;