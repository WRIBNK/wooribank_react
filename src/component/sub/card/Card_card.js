import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Card_card() {
    const [over, setOver] = useState("1");
    const [start, setStart] = useState("start");

    const slide = useRef(null);

    const startSlide = () => {
        setStart("stop");
        slide.current.swiper.autoplay.stop();
    }
    const stopSlide = () => {
        setStart("start");
        slide.current.swiper.autoplay.start();
    }

    useEffect(() => {
        // slide.current.swiper.autoplay.running = false;
    }, []);

    return (
        <section id="card">
            <div className="inner">
                <div className="title">
                    <h2>
                        <Link to="/card#;">
                            <div className="imgBox">
                                <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/title.png`} alt="우리카드와 새롭게 만날 당신을 위해" />
                            </div>
                        </Link>
                    </h2>
                    <span>남들은 무슨카드 쓸까?</span>
                    <div className="msg">
                        <span>나에게
                            <span className="point">꼭</span>
                            맞는 카드 찾기
                        </span>

                    </div>
                </div>
                <div className="wrap">
                    <div className="pick">
                        <div className="imgBox title">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/title1.png`} alt="WooriCard Pick" />
                        </div>
                        <ul className="pickList">
                            <li className="on">
                                <span>EVERYTIME EVERYWHERE EVERYWOORI</span>
                                <p>카드의정석 EVERY CHECK</p>

                                <ul className="text">
                                    <li>국내외 가맹점 0.2% 적립</li>
                                    <li>4대 일상영역 1만원 적립</li>
                                    <li>전월실적에 따라 최대 3천원 추가적립</li>
                                </ul>
                            </li>
                            <li>
                                <span>편하게 쓰기 좋은 해외여행의 전석</span>
                                <p>카드의정석 EVERY MILE SKYPASS</p>
                                <ul className="text">
                                    <li>대한항공 SKYPASS 마일리지 적립</li>
                                    <li>해외수수료 면제</li>
                                    <li>국내 공항라운지 무료이용 서비스</li>
                                </ul>
                            </li>
                            <li>
                                <span>실적/한도 없이 EVERYTIME 1%</span>
                                <p>카드의정석 EVERY 1</p>
                                <ul className="text">
                                    <li>국내외 가맹점 1% 할인</li>
                                    <li>전월실적에 따라 최대 2만원 추가할인</li>
                                    <li>우리은행 합격 기원</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="cardImg">
                        <div className="inner">

                            <div className="imgBox">
                                <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/1. 카드의정석 EVERY 1.gif`} alt="카드의정석 EVERY 1" />
                            </div>
                            <div className="imgBox">
                                <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/2. EVERYTIME EVERYWHERE EVERYWOORI.png`} alt="카드의정석 EVERY MILE SKYPASS" />
                            </div>
                            <div className="imgBox">
                                <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/3. 카드의정석 EVERY MILE SKYPASS.gif`}
                                    alt="EVERYTIME EVERYWHERE EVERYWOORI" />
                            </div>

                        </div>
                    </div>
                    <div className="bestPick">
                        <div className="imgBox title2">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub_title2.png`} alt="BestPick" />
                        </div>
                        <div className="controls">
                            <button type="button" className={start} onClick={() => { slide.current.swiper.autoplay.running ? startSlide() : stopSlide() }}></button>
                        </div>
                        <Swiper className="cardList"
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            spaceBetween={0}
                            loop={true}
                            slidesPerView={1}
                            centeredSlides={true}
                            speed={0}
                            ref={slide}>
                            <SwiperSlide>
                                <h2>#카드의정석</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY 1</p>
                                            <span>실적/한도 없이 EVERYTIME
                                                1%</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/1. 카드의정석 EVERY 1.gif`} alt="카드의정석 EVERY 1" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY MILE SKYPASS</p>
                                            <span>편하게 쓰기 좋은 해외여행의
                                                정석</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/2. EVERYTIME EVERYWHERE EVERYWOORI.png`} alt="카드의정석 EVERY MILE SKYPASS" />

                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY CHECK</p>
                                            <span>EVERYTIME EVERYWHERE
                                                EVERYWOORI</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/3. 카드의정석 EVERY MILE SKYPASS.gif`}
                                                alt="EVERYTIME EVERYWHERE EVERYWOORI" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>#프리미엄카드</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>그랑블루 1st</p>
                                            <span>프리미엄에 프리미엄을
                                                더하다</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/4. 그랑블루 1st.png`}
                                                alt="그랑블루 1st" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>ROYAL BLUE POINT</p>
                                            <span>세상에 없던 새로운 프리미엄으로
                                                모십니다</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/5. ROYAL BLUE POINT.png`}
                                                alt="ROYAL BLUE POINT" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>#신용카드</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY 1</p>
                                            <span>실적/한도 없이 EVERYTIME
                                                1%</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/1. 카드의정석 EVERY 1.gif`} alt="카드의정석 EVERY 1" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY MILE SKYPASS</p>
                                            <span>편하게 쓰기 좋은 해외여행의
                                                정석</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/2. EVERYTIME EVERYWHERE EVERYWOORI.png`} alt="카드의정석 EVERY MILE SKYPASS" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY 1</p>
                                            <span>기본을 새롭게, 기준을
                                                다르게</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/6. 카드의정석 EVERY 1.gif`} alt="카드의정석 EVERY 1" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>#체크카드</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 EVERY CHECK</p>
                                            <span>EVERYTIME EVERYWHERE
                                                EVERYWOORI</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/3. 카드의정석 EVERY MILE SKYPASS.gif`}
                                                alt="EVERYTIME EVERYWHERE EVERYWOORI" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 오하CHECK</p>
                                            <span>나의 생활패턴을 알아주는 든든한
                                                카드!</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/7. 카드의정석 오하CHECK.gif`}
                                                alt="카드의정석 오하CHECK" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 LCK 우리체크</p>
                                            <span>WOORICARD X SOULFIGHTER</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/8. 카드의정석 LCK 우리체크.png`}
                                                alt="카드의정석 LCK 우리체크" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>#제휴카드</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>트래블월렛 우리카드</p>
                                            <span>트래블페이와 신용카드의
                                                결합</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/9. 트래블월렛 우리카드.png`}
                                                alt="트래블월렛 우리카드" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>코오롱몰 우리카드</p>
                                            <span>코오롱몰 상품 구매시 5% <br />
                                                청구할인 혜텍 + 12/24/36개
                                                장기할부 청구할인
                                                혜택까지!</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/10. 코오롱몰 우리카드.gif`}
                                                alt="코오롱몰 우리카드" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>CGV 우리카드</p>
                                            <span>영화를 즐기는 고객이라면!</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/11. CGV 우리카드.gif`}
                                                alt="CGV 우리카드" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>#공공/정부지원카드</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>알뜰교통카드(신용)</p>
                                            <span>전국 어디서나 대중교통
                                                10%할인</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/12. 알뜰교통카드(신용).png`}
                                                alt="알뜰교통카드(신용)" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>알뜰교통카드(COOKIE CHECK)</p>
                                            <span>출근은 편하게, 교통비는 가볍게!
                                                <br />
                                                마일리지로 더 알뜰하게~</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/13. 알뜰교통카드(COOKIE CHECK).png`}
                                                alt="알뜰교통카드(COOKIE CHECK)" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>#모바일전용카드</h2>
                                <ul className="list">
                                    <li>
                                        <div className="text">
                                            <p>WON POINT AIR</p>
                                            <span>포인트에 디지털을 더하다!</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/14. WON POINT AIR.gif`}
                                                alt="WON POINT AIR" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>WON DISCOUNT AIR</p>
                                            <span>할인에 디지털을 더하다!</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/15. WON DISCOUNT AIR.gif`}
                                                alt="WON DISCOUNT AIR" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text">
                                            <p>카드의정석 UNTACT AIR</p>
                                            <span>카드의정석, DIGITAL LIFE와
                                                함께하다!</span>
                                        </div>
                                        <div className="imgBox">
                                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/card_img/16. 카드의정석 UNTACT AIR.png`}
                                                alt="카드의정석 UNTACT AIR" />
                                        </div>
                                    </li>
                                </ul>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="btns">
                    <ul className="btns_area">
                        <li className={`${over === "1" ? "on" : ""}`} onMouseOver={() => { setOver("1") }}>
                            <Link to="/card#;">
                                카드사용등록
                            </Link>
                        </li>
                        <li className={`${over === "2" ? "on" : ""}`} onMouseOver={() => { setOver("2") }}>
                            <Link to="/card#;">
                                발급상황조회
                            </Link>
                        </li>
                        <li className={`${over === "3" ? "on" : ""}`} onMouseOver={() => { setOver("3") }}>
                            <Link to="/card#;">
                                카드안내신청
                            </Link>
                        </li>
                        <li className={`${over === "4" ? "on" : ""}`} onMouseOver={() => { setOver("4") }}>
                            <Link to="/card#;">
                                전화신청
                            </Link>
                        </li>
                    </ul>
                    <div className="btns_background" style={{ left: over === over ? 270 * (over - 1) : 0 }}></div>
                </div>
            </div>
        </section>
    )
}

export default Card_card