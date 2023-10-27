import React, { useState } from 'react';
import Product from './Content/Product';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Content() {
    const path = process.env.PUBLIC_URL;

    const [list, setList] = useState("roll");

    return (
        <>
            <div className="contentTitle">
                <h2>예금</h2>
            </div>
            <div className="content">
                <div className="bannerTop imgBox">
                    <img src={`${path}/img/sub_page/금융상품/banner(top).gif`} alt="고객님께 맞는 상품을 찾아드립니다." />
                </div>
                <div className="Banner imgBox">
                    <img src={`${path}/img/sub_page/금융상품/banner.gif`} alt="우리 주거래 직장인 대출" />
                </div>
                <div className="tab">
                    <ul>
                        <li className={list === "roll" ? `roll_btn on` : `roll_brn`} onClick={() => {
                            setList("roll")
                        }}>
                            <Link to="#;">목돈 굴리기</Link>
                        </li>
                        <li className={list === "collect" ? `roll_btn on` : `roll_brn`} onClick={() => {
                            setList("collect")
                        }}>
                            <Link to="#;">목돈 모으기</Link>
                        </li>
                    </ul>
                </div>
                <div className="info_aria">
                    <div className="info">
                        <dl className="info_txt">
                            <dt>조회기준일 : </dt>
                            <dd className="f">
                                2023.10.17 (연이율 세금 납부 전,
                                {` ${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()} `}
                                <strong>우대금리포함</strong>
                                )
                            </dd>
                        </dl>
                    </div>
                </div>
                <Product list={list} />
                <div className="promotion">
                    <ul className="list">
                        <li className="first">
                            <h4>금융도우미 서비스</h4>
                            <div className="use-guide">
                                <ul>
                                    <li>
                                        <Link to="#;">상품공시실</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">금융계산기</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">통합상품검색</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">금융용어사전</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">신용정보조회</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">서식/약관/자료실</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">뱅킹체험하기</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">이용시간안내</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">수수료안내</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">금감원파인</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="second">
                            <h4>즐겨찾는 서비스</h4>
                            <div className="use-guide">
                                <ul>
                                    <li>
                                        <Link to="#;">금리조회</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">환율조회</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">금시세조회</Link>
                                    </li>
                                    <li>
                                        <Link to="#;">펀드기준가/수익률조회</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="third">
                            <div>
                                <a href="/pot/Dream?withyou=SFSBK0002" title="우리WON뱅킹 바로가기">
                                    <img className="w100p"
                                        alt="WON뱅킹 앱 하나로 내 모든 금융을 열어보세요! 지금 바로 QR 스캔하고 WON뱅킹 앱과 함께 즐기는 통합금융생활. 우리WON뱅킹 모바일 바로가기 QR코드"
                                        src="https://simg.wooribank.com/img/section/po/img_po_WONbanner_1110.png" />
                                    <span className="hidden">우리WON뱅킹 모바일 바로가기</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Content