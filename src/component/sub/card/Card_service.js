import { Link } from "react-router-dom";
function Card_service() {
    return (
        <section id="service">
            <div className="inner">
                <h2>
                    <Link to="/card#;">
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/main_tit_lon.png`} alt="계획적으로 실속있게 이용하는 금융서비스" />
                        </div>
                    </Link>
                </h2>
                <ul className="list">
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_1_bg.png`} alt="단기카드대출" />
                        </div>
                        <div className="sub_imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_1_obj.png`} alt="지갑" />
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_1_shd.png`} alt="지갑그림자" className="shd" />
                        </div>
                        <div className="text">
                            <h3>단기카드대출<br /><span>(현금서비스)</span></h3>
                            <p>
                                현금이 급할 때 바로<br />찾아쓰는,<br />
                                편리한 생활자금 마련방법
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_2_bg.png`} alt="장기대출" />
                        </div>
                        <div className="sub_imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_2_obj.png`} alt="카드" />
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_2_shd.png`} alt="카드그림자" className='shd' />
                        </div>
                        <div className="text">
                            <h3>장기카드대출<br /><span>(카드론)</span></h3>
                            <p>
                                목돈이 필요할 때 <br />
                                복잡한 심사 과장 없이 <br />
                                간편하게
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_3_bg.png`} alt="일부결제금액이월약정" />

                        </div>
                        <div className="sub_imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_3_obj.png`} alt="배" />
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_3_shd.png`} alt="배 그림자" className='shd' />
                        </div>
                        <div className="text">
                            <h3>
                                일부결제금액이월약정<br /><span>(리볼빙)</span>
                            </h3>
                            <p>
                                원하는 만큼만 결제하고 매월 <br />
                                결제금액을 계획적으로 관리
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_4_bg.png`} alt="올인원 대출" />

                        </div>
                        <div className="sub_imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_4_obj.png`} alt="돈" />
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub2/special_mlon_4_shd.png`} alt="돈 그림자" className='shd' />
                        </div>
                        <div className="text">
                            <h3>올인원 대출<br /><span>(신용대출)</span></h3>
                            <p>
                                우리카드가 없어도 서류없이, <br />
                                방문없이, 내 신용만으로
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Card_service