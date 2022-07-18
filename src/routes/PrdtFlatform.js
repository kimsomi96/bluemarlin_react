import prdtFlatform from '../img/prdt-platform.png';
import prdtFlatform2 from '../img/prdt-platform2.png';
import Prdt from "../components/Prdt";

function PrdtFlatform() {
    return (
        <div>
            <div id="content">
                <div className="page-title">Blue Marlin Platform
                    <p className="slogan">어떠한 Data Source 와도 연동이 가능한 유연한 빅데이터 처리 플랫폼으로, <br/>
                        국내 최대의 처리 속도를 보장합니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>Blue Marlin Platform(개요)</h3>
                    <div className="row">
                        <div className="col-md-8">
                            <ol>
                                <li>어떠한 Data Source 와도 연동이 가능한 유연한 빅데이터 처리 플랫폼</li>
                                <li>국내 최대 처리속도 엔진 100,000 EPS 이상 (5TB 기준)</li>
                            </ol>
                            <div className="hidden-xs">
                                <table className="table center">
                                    <caption>
                                        Blue-Marlin 빅데이터 플랫폼
                                    </caption>
                                    <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">데이터베이스 시스템(기존)</th>
                                        <th scope="col">비교기준</th>
                                        <th scope="col">하둡기반 빅데이터 플랫폼</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>기존 비정형 로그데이터 정제 어려움</td>
                                        <th>데이터
                                            <br/>
                                            (정제)구분
                                        </th>
                                        <td className="specific">비정형 데이터 정제 자동화 지원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>방대한 데이터 저장/분석 처리의 성능적, 비용적 한계</td>
                                        <th rowSpan="2">비용</th>
                                        <td className="specific">오픈 소스 기반의 비용절감효과</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>성능 개선 위한 클러스터 구성 가능하나 라이선스 비용 기하급수적 증가</td>
                                        <td className="specific">성능 개선 위한 클러스터 수평적 확장 및 저비용으로 처리</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>일단 RDBMS시스템 데이터 적재 처리 한계<br/>
                                            (초당 Max 6000건)
                                        </td>
                                        <th>성능(입력)</th>
                                        <td className="specific">초당 수만 건 데이터 적재 처리 성능 지원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>수 기가바이트 급 데이터 조회 처리 시 성능한계<br/>
                                            (수십 분에서 수시간 필요)
                                        </td>
                                        <th>성능(조회)</th>
                                        <td className="specific">수 기가바이트 급 데이터 조회 처리 시 수 초에서 수 십 초 내에 처리 속도보장</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="visible-xs-block">
                                <table className="table center">
                                    <caption>
                                        Blue-Marlin 빅데이터 플랫폼
                                    </caption>
                                    <thead>
                                    <tr>
                                        <th scope="col">비교기준</th>
                                        <th scope="col">데이터베이스 시스템(기존)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>데이터 <br/>
                                            (정제)구분
                                        </th>
                                        <td>기존 비정형 로그데이터 정제 어려움</td>
                                    </tr>
                                    <tr>
                                        <th rowSpan="2">비용</th>
                                        <td>방대한 데이터 저장/분석 처리의 성능적, 비용적 한계</td>
                                    </tr>
                                    <tr>
                                        <td>성능 개선 위한 클러스터 구성 가능하나 라이선스 비용 기하급수적 증가</td>
                                    </tr>
                                    <tr>
                                        <th>성능(입력)</th>
                                        <td>일단 RDBMS시스템 데이터 적재 처리 한계<br/>
                                            (초당 Max 6000건)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>성능(조회)</th>
                                        <td>수 기가바이트 급 데이터 조회 처리 시 성능한계<br/>
                                            (수십 분에서 수시간 필요)
                                        </td>
                                    </tr>
                                    <tr className="innerHeading">
                                        <th scope="col">비교기준</th>
                                        <th scope="col">하둡기반 빅데이터 플랫폼</th>
                                    </tr>
                                    <tr>
                                        <th>데이터 <br/>
                                            (정제)구분
                                        </th>
                                        <td className="specific">비정형 데이터 정제 자동화 지원</td>
                                    </tr>
                                    <tr>
                                        <th rowSpan="2">비용</th>
                                        <td className="specific">오픈 소스 기반의 비용절감효과</td>
                                    </tr>
                                    <tr>
                                        <td className="specific">성능 개선 위한 클러스터 수평적 확장 및 저비용으로 처리</td>
                                    </tr>
                                    <tr>
                                        <th>성능(입력)</th>
                                        <td className="specific">초당 수만 건 데이터 적재 처리 성능 지원</td>
                                    </tr>
                                    <tr>
                                        <th>성능(조회)</th>
                                        <td className="specific">수 기가바이트 급 데이터 조회 처리 시 수 초에서 수 십 초 내에 처리 속도보장</td>
                                    </tr>
                                    </tbody>
                                </table>


                            </div>
                            {/*<!-- / .visible-xs-block -->*/}
                        </div>
                        {/*<!-- / .col-md-8 -->*/}
                        <div className="col-md-4">
                            <figure><img src={prdtFlatform} className="img-responsive center-block" alt="foo"/>
                                <figcaption></figcaption>
                            </figure>
                        </div>
                    </div>
                    <h3>Blue Marlin Platform(구성도)</h3>
                    Blue Marlin Big-Data 처리 플랫폼(서비스)
                    <figure className="border"><img src={prdtFlatform2} className="img-responsive center-block"
                                                    alt="Blue Marlin Big-Data 처리 플랫폼(서비스)"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </div>
            <Prdt/>
        </div>
    );
}

export default PrdtFlatform;