import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

function Card_main() {
    const [Play, setPlay] = useState("stop")
    const frame = useRef(null);
    return (
        <section id="main">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={0}
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                speed={700}
                onSlideChange={(swiper) => {
                    var activeSlide = swiper.activeIndex;
                    var slides = frame.current.querySelectorAll('.swiper-slide');
                    var bgColor = slides[activeSlide].getAttribute('data-bg-color');
                    frame.current.style.backgroundColor = bgColor;
                }}
                ref={frame}>
                <SwiperSlide className="news1" data-bg-color="#97f7db">
                    <div className="inner">
                        <div className="box">
                            <span className="flag">NEW</span>
                            <div className="tit">ALL NEW 카드의 정석</div>
                            <p className="desc">
                                #EVERY1 # EVERY MILE SKYPASS
                                <br />
                                #EVERY CHECK #오하CHECK
                            </p>
                            <div className="btn">
                                <Link to="/" >
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/메인1.png`} alt="ALL NEW 카드의 정석" className="img" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="notice" data-bg-color="#dbd1fc">
                    <div className="inner">
                        <div className="box">
                            <span className="flag">NOTICE</span>
                            <div className="tit">
                                온라인 2~6개월<br />
                                무이자할부
                            </div>
                            <p className="desc">
                                #전가맹점 2~3개월 #종합병원 2~6개월
                                <br />
                                #가전,여행 2~5개월
                            </p>
                            <div className="btn">
                                <Link to="/">
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/메인2.png`} alt="온라인 2~6개월 
                            무이자할부 
                            " className="img" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="event1" data-bg-color="#a2e8ff">
                    <div className="inner">
                        <div className="box">
                            <span className="flag">EVENT</span>
                            <div className="tit">
                                그동안 호텔 할인 찾아다니기 힘드셨죠?<br />
                                그래서 한 눈에 정리했어요!
                            </div>
                            <p className="desc">숙박 할인 최대 15%</p>
                            <div className="btn">
                                <Link to="/">
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/메인3.png`} alt="호텔 할인 찾아다니기 힘드셨죠? 그래서 한눈에 정리했어요! 
                            " className="img" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="event2" data-bg-color="#ffddbd">
                    <div className="inner">
                        <div className="box">
                            <span className="flag">EVENT</span>
                            <div className="tit">
                                이마트24 우리도시락<br />
                                30% 즉시할인!
                            </div>
                            <p className="desc">2023.08.01 ~ 2023.10.31</p>
                            <div className="btn">
                                <Link to="/">
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/메인4.png`} alt="이마트24 우리도시락 30% 즉시할인 
                            " className="img" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="news2" data-bg-color="#fdf6d2">
                    <div className="inner">
                        <div className="box">
                            <span className="flag">NEW</span>
                            <div className="tit">
                                우리카드에서 서울시 산후조리경비 지원사업
                                관련<br />
                                주요 사항을 안내드립니다.
                            </div>
                            <p className="desc">
                                #전가맹점 2~3개월 #종합병원 2~6개월
                                <br />
                                #가전,여행 2~5개월
                            </p>
                            <div className="btn">
                                <Link to="/">
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/메인5.png`} alt="서울시 산후조리경비
                            지원사업 안내 
                            " className="img" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="event3" data-bg-color="#cfe1e8">
                    <div className="inner">
                        <div className="box">
                            <span className="flag">EVENT</span>
                            <div className="tit">
                                크리스탈제이드 1만원<br />
                                즉시할인!
                            </div>
                            <p className="desc">
                                우리카드로 10만원 이상 결제 시
                                <br />
                                #크리스탈제이드 #도곡점
                                #광화문상하이팰리스점
                                <br />
                                #소공점 #잠원점
                            </p>
                            <div className="btn">
                                <Link to="/">
                                    <span>자세히보기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/메인6.png`} alt="크리스탈제이드 1만원 즉시할인! 
                            " className="img" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper >
            <div className="swiperBtn">
                <button type="button" className={`stop ${Play === "stop" ? "on" : ""}`} onClick={() => { setPlay("play"); frame.current.swiper.autoplay.stop(); }}></button>
                <button type="button" className={`play ${Play === "play" ? "on" : ""}`} onClick={() => { setPlay("stop"); frame.current.swiper.autoplay.start(); }}></button>
            </div>
            <div div className="eventBtn" >
                <span className="txt"><span className="point">이벤트</span> 전체보기</span>
            </div >
            {/* <div className="navi">
                <button className="ico list on"></button>
                <button className="ico card"></button>
            </div> */}
            <ul className="subMenu">
                <li>
                    <Link to="/card#;" className="menu">
                        <span className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/ico_quick_menu1.png`} alt="이용대금명세서" />
                        </span>
                        <span className="tit"> 이용대금명세서 </span>
                    </Link>

                </li>
                <li>
                    <Link to="/card#;" className="menu">
                        <span className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/ico_quick_menu2.png`} alt="결제예상금액" />
                        </span>
                        <span className="tit"> 결제예상금액 </span>
                    </Link>
                </li>
                <li>
                    <Link to="/card#;" className="menu">
                        <span className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/ico_quick_menu3.png`} alt="이용내역조회" />
                        </span>
                        <span className="tit"> 이용내역조회 </span>
                    </Link>
                </li>
                <li>
                    <Link to="/card#;" className="menu">
                        <span className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/ico_quick_menu4.png`} alt="내정보변경" />
                        </span>
                        <span className="tit"> 내정보변경 </span>
                    </Link>
                </li>
                <li>
                    <Link to="/card#;" className="menu">
                        <span className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/ico_quick_menu5.png`} alt="카드분실신고" />
                        </span>
                        <span className="tit"> 카드분실신고 </span>
                    </Link>

                </li>
                <li>
                    <Link to="/card#;" className="menu">
                        <span className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/ico_quick_menu6.png`} alt=" 카드사용등록" />
                        </span>
                        <span className="tit"> 카드사용등록 </span>
                    </Link>




                </li>
            </ul >
        </section >
    )
}

export default Card_main