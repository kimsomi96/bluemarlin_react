function Support(){
    return(
        <div>
            <div id="content">
                <div className="page-title">IT Security Biz & Online Marketing
                    <p className="slogan">(주) 피디정보통신은 IT Business를 바탕으로 IT Security Biz & Online Marketing 을 기본으로 <br/>
                        최신 IT 트렌드를 접목한 비즈니스를 지속적으로 발굴하고 사업 영역을 확장시켜 나가고 있습니다.</p>
                </div>
                {/*<!-- / .page-title -->*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 title-box">
                            <h2>Try Blue Marlin for Your Business</h2>
                            <p>여러분의 다양한 빅데이터의 가치를 검색하고 분석해 드립니다.
                                한층 극대화된 수익성을 도출하는 데 동반자가 되어 드리겠습니다</p>
                        </div>
                    </div>
                    {/*<!-- / .row -->*/}
                    <form>
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1 form-group">
                                <label htmlFor="name">이름</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="이름"/>
                            </div>
                            <div className="col-md-5 form-group">
                                <label htmlFor="organization">회사/조직</label>
                                <input type="text" className="form-control" id="organization" name="organization"
                                       placeholder="회사/조직"/>
                            </div>
                        </div>
                        {/*<!-- / .row -->*/}
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1 form-group">
                                <label htmlFor="department">부서</label>
                                <input type="text" className="form-control" id="department" name="department"
                                       placeholder="부서"/>
                            </div>
                            <div className="col-md-5 form-group">
                                <label htmlFor="email">이메일</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="이메일"/>
                            </div>
                        </div>
                        {/*<!-- / .row -->*/}
                        <div className="row">
                            <div className="form-group col-md-10 col-md-offset-1">
                                <label htmlFor="form-content">내용</label>
                                <textarea id="form-content" name="form-content" className="form-control"
                                          rows="6"></textarea>

                                <button type="submit" className="btn btn-primary btn-lg pull-right">지원 문의</button>
                            </div>
                        </div>
                        {/*<!-- / .row -->*/}
                    </form>
                </div>
                {/*<!-- / .container -->*/}
            </div>
            {/*<!-- / #content -->*/}
        </div>
    );
}

export default Support;