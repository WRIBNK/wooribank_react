import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Product({ list }) {

    return (
        <>
            <div className={list === "roll" ? `product_list roll on` : `product_list roll`}>
                <div className="productBox">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>우리은행을 처음 거래하시는 고객님들을 위한 전용 예금</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">우리 첫거래우대 정기예금</Link>
                            </dt>
                            <p>우리은행 첫거래 고객을 우대하는 비대면 전용 고금리 예금</p>
                        </dl>
                        <div className="btns_area">
                            <div className="white">스마트폰전용</div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.30%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 3.30%</span>
                            </dt>
                            <dt>
                                <span>(12개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>WON뱅킹 대표 예금</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">WON플러스 예금</Link>
                            </dt>
                            <p>기간도 금액도 내 마음대로 예금</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">전화가입</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.05%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 4.05%</span>
                            </dt>
                            <dt>
                                <span>(12개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>

            <div className={list === "collect" ? `product_list collect on` : `product_list collect`}>
                <div className="productBox 1">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>스마트폰으로 간편하게</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">WON 적금</Link>
                            </dt>
                            <p>복잡하지 않고 간단한 적금</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">전화가입</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.20%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 4.00%</span>
                            </dt>
                            <dt>
                                <span>(12개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 2">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>자동이체로 목돈모으기</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">스무살 우리 정기적금 (도전형-정액적립식)</Link>
                            </dt>
                            <p>20대 버킷리스트 목돈 마련을 위해 GO!</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">전화가입</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.10%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 3.00%</span>
                            </dt>
                            <dt>
                                <span>(36개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 3">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>자유롭게 목돈모으기</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">스무살 우리 자유적금 (절약형-자유적립식)</Link>
                            </dt>
                            <p>20대 버킷리스트,자투리 돈 꾸준히 모으자</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">전화가입</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>3.50%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 3.00%</span>
                            </dt>
                            <dt>
                                <span>(36개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 4">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>주거래고객에게 최대 1.9% 우대금리 제공</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">우리 SUPER주거래 자유적금</Link>
                            </dt>
                            <p>주거래고객님께 더 높은 우대금리를!</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">전화가입</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.55%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 2.65%</span>
                            </dt>
                            <dt>
                                <span>(36개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 5">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>걷기만 해도 이자가 최고 연 11% 쌓이는 건강 지킴이 적금(최저 연 1%~최고 연 11%(2023.04.14. 세금납부 전))</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">데일리 워킹 적금</Link>
                            </dt>
                            <p>걸음 수에 따라 우대금리 혜택을 받을 수 있는 적금 상품</p>
                        </dl>
                        <div className="btns_area">
                            <div className="white">
                                <Link to="#;">스마트폰전용</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>11.00%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 1.00%</span>
                            </dt>
                            <dt>
                                <span>(6개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 6">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>주거래고객에게 우대금리가 팡팡!</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">우리 SUPER주거래 정기적금</Link>
                            </dt>
                            <p>주거래고객님께 더 높은 우대금리를!</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">전화가입</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.75%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 2.85%</span>
                            </dt>
                            <dt>
                                <span>(36개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 7">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>최고 금리 연 4.60%</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">우리 (업체명 임직원) 적금</Link>
                            </dt>
                            <p>가입한 동료가<br />많을수록 금리 UP!</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.60%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 3.10%</span>
                            </dt>
                            <dt>
                                <span>(12개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 8">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>영업점별 특판적금</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">우리 (영업점명) 적금</Link>
                            </dt>
                            <p>영업점별 특판적금</p>
                        </dl>
                        <div className="btns_area">
                            <div className="green">
                                <Link to="#;">가입하기</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.60%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 4.10%</span>
                            </dt>
                            <dt>
                                <span>(12개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div className="productBox 9">
                    <div className="product_info">
                        <dl>
                            <dd className="tit">
                                <em>환경보호 실천운동 우대혜택</em>
                            </dd>
                            <dt className="name">
                                <Link to="#;">우리 으쓱(ESG) 적금</Link>
                            </dt>
                            <p>대중교통 이용 및 환경보호 실천운동 달성 시 우대혜택</p>
                        </dl>
                        <div className="btns_area">
                            <div className="white">
                                <Link to="#;">스마트폰전용</Link>
                            </div>
                            <div className="green">
                                <Link to="#;">상세보기</Link>
                            </div>
                            <Link to="#;" className="put">관심상품</Link>
                            <div className="txtBox">
                                <Link to="#;" className="compare">비교함담기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="prd_img">
                        <dl>
                            <dt>
                                최고
                            </dt>
                            <dd className="percent">
                                <div>
                                    <span>연</span>
                                    <strong>4.40%</strong>
                                </div>
                            </dd>
                            <dt>
                                <span>기본 3.60%</span>
                            </dt>
                            <dt>
                                <span>(12개월, 세금 납부 전)</span>
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product