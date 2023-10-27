import React, { useRef } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Main() {
    const img_url = process.env.PUBLIC_URL;
    const frame = useRef(null);
    return (
        <>
            <main className="main_slider">
                <div className="slide">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
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
                        speed={300}
                        onSlideChange={(swiper) => {
                            var activeSlide = swiper.activeIndex;
                            var slides = frame.current.querySelectorAll('.swiper-slide');
                            var bgColor = slides[activeSlide].getAttribute('data-bg-color');
                            frame.current.parentElement.style.backgroundColor = bgColor;
                        }}
                        ref={frame}
                    >
                        <SwiperSlide className="panel" data-bg-color='#f9f4ff'>
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/슬라이드/slide1.png"} alt="내가 원하는 성공의 답!" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="panel" data-bg-color='#bfd9f7'>
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/슬라이드/slide2.png"} alt="비정상거처 이주지원 버팀목대출 안내" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="panel" data-bg-color='#efd2fc'>
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/슬라이드/slide3.png"} alt="우리회사의 모든 금융정보를 한 번에!" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="panel" data-bg-color='#edf3fd'>
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/슬라이드/slide4.jpg"} alt="나의 데이터가 가치가 되는 새로운 경험" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="panel" data-bg-color='#edf3fd'>
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/슬라이드/slide5.png"} alt="우리WON뱅킹 가입" />
                            </div>
                        </SwiperSlide>
                    </Swiper>



                </div>
            </main>

            <ul className="movement">
                <li>
                    <a href="#;">
                        다른금융 <br />
                        정보조회
                    </a>
                </li>
                <li>
                    <a href="#;">
                        조회
                    </a>
                </li>
                <li>
                    <a href="#;">
                        이체
                    </a>
                </li>
                <li>
                    <a href="#;">
                        환율
                    </a>
                </li>
                <li>
                    <a href="#;">
                        빠른메뉴
                        <span className="ArrowBtn"></span>
                    </a>
                </li>
            </ul>

            <div className="main_menu">
                <a href="#;">
                    금융 소비자 보호
                </a>
                <a href="#;">
                    보안뉴스
                </a>
                <a href="#;">
                    상품/약관 공시
                </a>
            </div>

            <section className="product">
                <article className="leftBox">
                    <h2>금융상품</h2>
                    <div className="box">
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/예금.png"} alt="예금" />
                            </div>
                            <p>예금</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/대출.png"} alt="대출" />
                            </div>
                            <p>대출</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/펀드.png"} alt="펀드" />
                            </div>
                            <p>펀드</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/외환.png"} alt="외환" />
                            </div>
                            <p>외환</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/신탁.png"} alt="신탁" />
                            </div>
                            <p>신탁</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/퇴직연금.png"} alt="퇴직연금" />
                            </div>
                            <p>퇴직연금</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/보험.png"} alt="보험" />
                            </div>
                            <p>보험</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/금융상품/ISA.png"} alt="ISA" />
                            </div>
                            <p>ISA</p>
                        </div>
                    </div>
                </article>
                <div className="rightBox">
                    <h2>카드</h2>
                    <div className="box">
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/카드/카드신청.png"} alt="카드신청" />
                            </div>
                            <p>카드신청</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/카드/나의카드.png"} alt="나의카드" />
                            </div>
                            <p>나의카드</p>
                        </div>
                        <div className="icon">
                            <div className="imgBox">
                                <img src={img_url + "/img/main_page/카드/이벤트.png"} alt="이벤트" />
                            </div>
                            <p>이벤트</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service">
                <h2>서비스</h2>
                <div className="inner">
                    <a href="#;" className="service_tab" title="우리WON뱅킹 바로가기">
                        <div className="imgBox">
                            <img src={img_url + "/img/main_page/서비스/우리WON뱅킹.png"} alt="우리WON뱅킹" />
                        </div>
                        <div className="text">
                            <h3>우리WON뱅킹</h3>
                            <p>새 시대의 금융을 켜다, <br />
                                우리은행 대표 모바일뱅킹 APP</p>
                        </div>
                    </a>
                    <Link to="/mydata" className="service_tab" title="마이데이터">
                        <div className="imgBox">
                            <img src={img_url + "/img/main_page/서비스/마이데이터.png"} alt="마이데이터" />
                        </div>
                        <div className="text">
                            <h3>마이데이터</h3>
                            <p>나의 데이터가 가치가 되는 <br /> 새로운 경험을 체험해 보세요</p>
                        </div>
                    </Link>
                    <a href="#;" className="service_tab" title="스마트간편신규 바로가기">
                        <div className="imgBox">
                            <img src={img_url + "/img/main_page/서비스/스마트간편신규.png"} alt="스마트간편신규" />
                        </div>
                        <div className="text">
                            <h3>스마트간편신규</h3>
                            <p>직원에게 추천받으신 상품을 <br /> 간편하게 가입하세요</p>
                        </div>
                    </a>
                </div>
            </section>

            <section className="news">
                <div className="inner">
                    <div className="newsBox">
                        <div className="intro">
                            <h3>새소식</h3>
                            <p>더보기</p>
                        </div>
                        <ul className="list">
                            <li><a href="#;">[채용] 2023년 하반기 우리은행 신입행원...</a> <span>2023.10.11</span></li>
                            <li><a href="#;">[공지] 모바일 · 인터넷뱅킹 타행이체 수수...</a> <span>2023.02.08</span></li>
                            <li><a href="#;">[공지] 보이스피싱 상습범 바로 이 목소리를...</a> <span>2023.10.11</span></li>
                        </ul>
                    </div>
                    <div className="eventBox">
                        <div className="intro">
                            <h3>이벤트</h3>
                            <p>더보기</p>
                        </div>
                        <ul className="list">
                            <li><a href="#;">틴틴카드 사용하고 1만원 받자!</a></li>
                            <li><a href="#;">우리은행 첫 적금 만들고 1만원 받으세요!</a></li>
                            <li><a href="#;">직장인을 위한 특별한 혜택! 우리 직장인셀럽</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main