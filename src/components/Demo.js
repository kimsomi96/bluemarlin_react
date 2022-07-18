import { Link } from 'react-router-dom';

function Demo() {
    return (
        <section id="demo">
            <h2>Demonstration</h2>
            <p>여러분이 보유한 빅데이터의 가치를 한층 업그레이드 해 보세요</p>
            <Link to="/apply-demo">데모신청</Link>
        </section>
    );
}

export default Demo;