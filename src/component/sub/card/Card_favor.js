import { Link } from "react-router-dom";
function Card_favor() {
    return (
        <section id="favor">
            <div className="inner">
                <h2>
                    <Link to="/card#;">
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub3/main_tit_bnf.png`} alt="우리카드에서 만날 수 있는 다양한 혜택" />
                        </div>
                    </Link>
                </h2>
                <ul className="list">
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub3/special_mbnf_1_obj.png`} alt="해외이용의 정석" />
                        </div>
                        <div className="text">
                            <h3>해외이용의 정석</h3>
                            <p>
                                여행, 직구, 항공<br />
                                무엇이든 우리카드로
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub3/special_mbnf_2_obj.png`} alt="MY Pick 서비스" />
                        </div>
                        <div className="text">
                            <h3>MY Pick 서비스</h3>
                            <p>
                                혜택도 맞춤!<br />
                                나만을 위한 맞춤 혜택
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub3/special_mbnf_3_obj.png`} alt="우리V클럽" />
                        </div>
                        <div className="text">
                            <h3>우리V클럽</h3>
                            <p>특별함을 원하는<br />고객을 위한 VIP우대 혜택</p>
                        </div>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub3/special_mbnf_4_obj.png`} alt="우리 Point" />
                        </div>
                        <div className="text">
                            <h3>우리 Point</h3>
                            <p>차곡차곡 쌓아<br />다양한 곳에서 사용가능</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Card_favor