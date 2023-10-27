import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Card_middle() {
    const [open, setOpen] = useState("1");
    const [start, setStart] = useState("start")
    const slide = useRef(null);
    const startSlide = () => {
        setStart("stop");
        slide.current.swiper.autoplay.stop();
    }
    const stopSlide = () => {
        setStart("start");
        slide.current.swiper.autoplay.start();
    }
    return (
        <section id="middle">
            <div className="inner">
                <h2>
                    <Link to="/card#;">
                        <div className="imgBox">
                            <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/main_tit_cdl.png`} alt="우리와 당신의 일상을 더욱 풍요롭게" />
                        </div>
                    </Link>
                </h2>
                <div className="plus_area">
                    <ul className="menu">
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_ico_ins.png`} alt="보험" />
                                </div>
                                <p>보험</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_ico_trv.png`} alt="여행" />
                                </div>
                                <p>여행</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_ico_golf.png`} alt="골프" />
                                </div>
                                <p>골프</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_ico_wib.png`} alt="우리WON마켓" />
                                </div>
                                <p>우리WON마켓</p>
                            </Link>
                        </li>
                    </ul>

                    <ul className="service_list">
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_servi_ico_1.png`} alt="카드안심서비스" />
                                </div>
                                <p>카드안심서비스</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_servi_ico_2.png`} alt="신용안심플러스" />
                                </div>
                                <p>신용안심플러스</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_servi_ico_3.png`} alt="부동산안심서비스" />
                                </div>
                                <p>부동산안심서비스</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_servi_ico_4.png`} alt="쇼핑안심서비스" />
                                </div>
                                <p>쇼핑안심서비스</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_servi_ico_5.png`} alt="신용안심서비스" />
                                </div>
                                <p>신용안심서비스</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card#;">
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/plus_servi_ico_6.png`} alt="납부서비스" />
                                </div>
                                <p>납부서비스</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="notice">
                    <div className="tab">
                        <ul className="tab_menu">
                            <li className={open === "1" ? "on" : ""} onClick={() => { setOpen("1") }}>공지사항</li>
                            <li className={open === "2" ? "on" : ""} onClick={() => { setOpen("2") }}>상품·약관변경</li>
                            <li className={open === "3" ? "on" : ""} onClick={() => { setOpen("3") }}>공고</li>
                            <li className={open === "4" ? "on" : ""} onClick={() => { setOpen("4") }}>보도자료</li>
                            <li className={open === "5" ? "on" : ""} onClick={() => { setOpen("5") }}>채용</li>
                        </ul>
                        <button className="plus_button"></button>
                        <ul className={`content ${open === "1" ? "on" : ""}`}>
                            <li>
                                VISA카드 해외거래 일시 중단 안내
                                <span>2023.10.05</span>
                            </li>
                            <li>
                                오픈뱅킹 일부기관 금융거래 일시 중단 안내
                                <span>2023.10.04</span>
                            </li>
                            <li>
                                고객센터 입주 건물 전기 안전관리 점검 정전작업
                                안내
                                <span>2023.09.22 </span>
                            </li>
                        </ul>
                        <ul className={`content ${open === "2" ? "on" : ""}`}>
                            <li>우리카드 「우리WON멤버스 이용약관」 개정 (2023.11.27 시행)
                                <span>2023.10.20</span>
                            </li>
                            <li>
                                우리카드 「대출이동시스템을 통한 대환대출서비스 이용약관」 개정...
                                <span>2023.10.04</span>
                            </li>
                            <li>
                                카드의정석 EVERY CHECK 상품안내장 개정 안내
                                <span>2023.08.28 </span>
                            </li>
                        </ul>
                        <ul className={`content ${open === "3" ? "on" : ""}`}>
                            <li>[입찰공고] 홈플러스 DS_VAN 사업자 선정
                                <span>2023.10.13</span>
                            </li>
                            <li>
                                [입찰공고] 우리카드 자동차리스/렌터카 잔가보장업체 추가선정 및...
                                <span>2023.09.19</span>
                            </li>
                            <li>
                                [입찰공고] 2023년 하반기 우리카드 신입사원 채용대행업체 선정 제안요청
                                <span>2023.09.05 </span>
                            </li>
                        </ul>
                        <ul className={`content ${open === "4" ? "on" : ""}`}>
                            <li>우리카드, 인공지능 활용한 ‘AI음성봇’ 서비스 출시...고객 상담 채널 확대
                                <span>2023.03.07</span>
                            </li>
                            <li>
                                우리카드, 배달대행 브랜드 선도사 ‘만나코퍼레이션’과 업무협약
                                <span>2023.02.22</span>
                            </li>
                            <li>
                                우리카드 마이데이터, 공공 정보 조회로 서비스 확장...건강보험료 납부...
                                <span>2023.02.17 </span>
                            </li>
                        </ul>
                        <ul className={`content ${open === "5" ? "on" : ""}`}>
                            <li>[채용] 2023년 하반기 일반직군 신입사원 채용 공고
                                <span>2023.10.04</span>
                            </li>
                            <li>
                                [채용] 2022년 하반기 일반직군 신입사원 채용 공고
                                <span>2022.10.27</span>
                            </li>
                            <li>
                                [바로가기] 우리카드 부문별 경력직 채용공고
                                <span>2022.05.04 </span>
                            </li>
                        </ul>
                    </div>
                    <div className="banner">
                        <h2>
                            금융소비자보호
                        </h2>
                        <div className="controls">
                            <button type="button" className={start} onClick={() => { slide.current.swiper.autoplay.running ? startSlide() : stopSlide() }}></button>
                        </div>
                        <Swiper className="info"
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            spaceBetween={0}
                            loop={true}
                            slidesPerView={1}
                            centeredSlides={true}
                            speed={700}
                            ref={slide}>
                            <div className="box">
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            안전망 대출 출시 및<br />
                                            불법 사금융 집중단속
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_04.png`} alt="불법 사금융 집중단속" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            불법개인정보를 이용<br />
                                            금융사기유의사항
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_05.png`} alt="금융사기유의사항" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            궁금한 신용카드업무<br />
                                            절차와 기준
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_02.png`} alt="궁금한 신용카드업무" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            핀테크지원센터<br />
                                            핀테크 생태계 활성화
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_06.png`} alt="핀테크지원센터" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            금융소비자 정보포털<br />
                                            파인(fine)
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_03.png`} alt="파인(fine)" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            대출빙자형 보이스피싱<br />
                                            조심하세요.
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_03.png`} alt="보이스피싱 조심" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="infoTxt">
                                        <div className="txt">
                                            보이스피싱 피해예방 영상
                                        </div>
                                        <div className="link">
                                            <span>바로가기</span>
                                        </div>
                                    </div>
                                    <div className="imgBox">
                                        <img src={`${process.env.PUBLIC_URL}/img/sub_page/카드/카드모형/sub4/ico_useful_info_08.png`} alt="보이스피싱 피해예방 영상" />
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card_middle