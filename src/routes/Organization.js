import organizationTree from "../img/organization-tree.png";

function Organization() {
    return(
        <div>
            <div id="content">
                <div className="page-title">IT Security Biz & Online Marketing
                    <p className="slogan">(주) 피디정보통신은 IT Business를 바탕으로 IT Security Biz & Online Marketing 을 기본으로<br/>
                        최신 IT 트렌드를 접목한 비즈니스를 지속적으로 발굴하고 사업 영역을 확장시켜 나가고 있습니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <h3>조직도</h3>
                    <figure><img src={organizationTree} className="img-responsive center-block" alt="foo"/>
                        <figcaption></figcaption>
                    </figure>
                    {/*<!--
                      <div class="row department">
                        <div class="col-md-6 col-md-push-3 clearfix">대표이사</div>
                        <div class="clearfix"></div>
                        <div class="col-md-6 col-md-push-3">경영지원실</div>
                      </div>
                      <div class="row part">
                        <div class="col-md-4">
                          <figure><img src="/img/organization-part1.jpg" class="img-responsive center-block" alt="foo">
                            <figcaption>온라인마케팅 사업부<span>능동적 광고 관리, 실적 분석, 재무 관리<br>
                              &nbsp;</span></figcaption>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure><img src="/img/organization-part3.jpg" class="img-responsive center-block" alt="foo">
                            <figcaption>IT 사업부<span>IT자원과 시스템을 개발/운영하고 정보와 지식을 효율적으로 집적</span></figcaption>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure><img src="/img/organization-part2.jpg" class="img-responsive center-block" alt="foo">
                            <figcaption>신규 사업부<span>새로운 성장 동력을 발굴<br>
                              &nbsp;</span></figcaption>
                          </figure>
                        </div>
                      </div>
                    -->*/}

                </div>
                {/*<!-- / .container -->*/}
            </div>
            {/*<!-- / #content --> */}
        </div>
    );
}

export default Organization;