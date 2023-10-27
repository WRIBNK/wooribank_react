import React from 'react';


function JaSan() {
    const youtube_url = "https://www.youtube.com/channel/UCcQ9V6nEYVMSRWWOrvHQqLg"
  return (
    <>
        <section className="JaSan">

            <div className="content">


                <article className="content_box_1">
                    <div className="imgBox">
                        <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/bg_visual_port.jpg"} alt="배경사진"/>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/common_long.gif"} alt="메뉴 배경"/>
                                </div>
                                <a href="#;">MY자산진단</a>
                            </li>
                            <li>
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/common_long.gif"} alt="메뉴 배경"/>
                                </div>
                                <a href="#;">펀드 포트폴리오</a>
                            </li>
                            <li>
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/common_long.gif"} alt="메뉴 배경"/>
                                </div>
                                <a href="#;">퇴직연금 포트폴리오</a>
                            </li>
                            <li>
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/common_long.gif"} alt="메뉴 배경"/>
                                </div>
                                <a href="#;">WON챌린지 (목표금액모으기)</a>
                            </li>
                            <li>
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/common_long.gif"} alt="메뉴 배경"/>
                                </div>
                                <a href="#;">미래설계</a>
                            </li>
                            <li>
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/common_long.gif"} alt="메뉴 배경"/>
                                </div>
                                <a href="#;">펀드센터 바로가기</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="content_box_1_1">
                        <div className="box_1_1">
                            <div className="con1_txt">
                                <span>자산관리 전략</span>
                                <p>어떻게 세워야 할까?</p>
                            </div>
                            <div className="box_1_imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_port_obj.png"} alt="사람 그림"/>
                            </div>
                        </div>
                        <div className="box_1_2">
                            <a href="#;" className="banner_1">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_banner_item_1.png"} alt="원형 그래프 아이콘"/>
                                </div>
                                <span>
                                    효과적인 자산관리를 위한 <br/>
                                    투자 전략을 추천 받기
                                </span>
                            </a>
                            <a href="#;" className="banner_2">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_banner_item_2.png"} alt="돼지 저금통 아이콘"/>
                                </div>
                                <span>
                                    쉽게 시작할 수 있는 <br/>
                                    작은 돈 모으기부터 해보기
                                </span>
                            </a>
                            <a href="#;" className="banner_3">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_banner_item_3.png"} alt="집 모양 아이콘"/>
                                </div>
                                <span>
                                    재무상태를 평가받아서 <br/>
                                    미래설계 해보기
                                </span>
                            </a>
                        </div>
                        <div className="box_1_3">
                            <a href="#;" className="banner_1">
                                <h3>
                                    자산운용현황
                                    <span className="imgBox">
                                        <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt='오른쪽 화살표'/>
                                    </span>
                                </h3>
                                <p>
                                    새로운 관점으로 자산을 확보해보세요 <br/>
                                    자산관리의 포인트가 달라집니다.
                                </p>
                            </a>
                            <a href="#;" className="banner_2">
                                <h3>
                                    입출금리포트
                                    <span className="imgBox">
                                        <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt='오른쪽 화살표'/>
                                    </span>
                                </h3>
                                <p>
                                    이번달에도 지출이 생각보다 많았나요? <br/>
                                    고정지출을 확인하고 줄여보세요.
                                </p>
                            </a>
                            <a href="#;" className="banner_3">
                                <h3>
                                    투자스타일
                                    <span className="imgBox">
                                        <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt='오른쪽 화살표'/>
                                    </span>
                                </h3>
                                <p>
                                    고객님의 투자스타일을 기반으로 투자의 <br/>
                                    방향을 분석해드립니다.
                                </p>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="content_box_2">
                    <div className="content_box_2_1">
                        <div className="box_2_1">
                            <p>
                                6개월 전에 투자했다면 <br/>
                                고객님께서 얻을 수 있었을 수익률
                            </p>
                            <p className="RoR">
                                +2.30%
                            </p>
                            <span>최근 6개월 수익률 위험중립형포트폴리오</span>
                            <p className="con2_txt_group">
                                <strong>아직 늦지 않았습니다!</strong> <br/>
                                우리은행의 차별화된 포트폴리오로 지금 시작해보세요.
                            </p>
                            <a href="#;">
                                펀드 포트폴리오 설계 받기
                                <span className="imgBox"><img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/></span>
                            </a>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_main_goal_shadow.png"} alt="그림자 이미지"/>
                            </div>
                        </div>
                        <div className="box_2_2">
                            <p>
                                소소하지만 나를 위해 이루고 싶은 <br/>
                                <strong>당신의 챌린지는 무엇인가요?</strong>
                            </p>
                            <a href="#;">
                                챌린지 시작하기
                                <span className="imgBox"><img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/></span>
                            </a>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/bg_psw_goal.jpg"} alt="챌린지 배경사진"/>
                            </div>
                            <div className="imgBox shadow">
                                <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_main_goal_shadow.png"} alt="챌린지박스 그림자"/>
                            </div>
                        </div>

                    </div>
                </article>
                <article className="content_box_3">
                    <div className="imgBox shadow">
                        <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_main_goal_shadow.png"} alt="재무상태 박스 그림자"/>
                    </div>
                    <div className="box_3_1">
                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/bg_future_1.jpg"} alt="미래의 재무상태를 예측할 수 있다면?"/></div>
                        <div className="con3_txt">
                            <strong>
                                미래의 재무상태를 <br/>
                                예측할 수 있다면?
                            </strong>
                            <p>
                                현재의 재무상태를 분석하여 탄탄한<br/>
                                미래를 위한 설계를 제시해 드립니다.
                            </p>
                            <a href="#;">
                                지금 설계하기
                                <span className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/>
                                </span>
                            </a>
                        </div>

                    </div>
                    <div className="box_3_2">
                        <div className="con3_txt">
                            <strong>
                                든든한 노후를 위한 <br/>
                                똑똑한 조언!
                            </strong>
                            <p>
                                은퇴를 위한 내 연금상태는 어떨까?<br/>
                                연금 준비생활을 간편하게 확인해<br/>
                                드립니다.
                            </p>
                            <a href="#;">
                                연금진단 받기
                                <span className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/>
                                </span>
                            </a>
                        </div>

                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/bg_future_2.jpg"} alt="든든한 노후를 위한 똑똑한 조언!"/></div>
                    </div>
                    <div className="box_3_3">
                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/bg_future_3.jpg"} alt="퇴직연금 포트폴리오는 어떠세요?"/></div>
                        <div className="con3_txt">
                            <strong>
                                퇴직연금 포트폴리오는 <br/>
                                어떠세요?
                            </strong>
                            <p>
                                똑똑한 로보가 든든한 미래를 위한 <br/>
                                퇴직연금설게를 도와드립니다.
                            </p>
                            <a href="#;">
                                포트폴리오 설계 받기
                                <span className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
                <article className="content_box_4">
                    <div className="QRcode">
                        <div className="imgBox">
                            <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/psw_qrcode_1.jpg"} alt="QR코드 사진"/>
                        </div>
                        <p>
                            우리은행 APP을 설치해서 <br/>
                            내 자산의 움직임에 주목해보세요.
                        </p>
                    </div>
                    <div className="youtube">
                        <span>
                            어떤 버튼을 눌러야할지 망설여진다면, <br/>
                            유튜브로 먼저 알아보세요.
                        </span>
                        <a href={youtube_url} target='_blank' className="imgBox">
                        
                            우리은행 유튜브
                            <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/>
                        </a>
                        <div className="youtube_vids_error">
                            <div className="notVid_1">
                                <span>비공개 동영상입니다.</span>
                            </div>
                            <div className="notVid_2">
                                <span>비공개 동영상입니다.</span>
                            </div>
                            <div className="notVid_3">
                                <span>비공개 동영상입니다.</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="content_box_5">
                    <ul className="items">
                        <li className="item_1">
                            <a href="#;">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ow_bottom_img01.png"} alt="MY자산진단"/>
                                </div>
                                <strong>MY자산진단</strong>
                                <p>
                                    고객님의 자산운용 <br/>
                                    현황을 분석해드립니다
                                </p>
                            </a>

                        </li>
                        <li className="item_2">
                            <a href="#;">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ow_bottom_img02.png"} alt="펀드 포트폴리오"/>
                                </div>
                                <strong>펀드 포트폴리오</strong>
                                <p>
                                    AI와 전문가가 추천하는 <br/>
                                    포트폴리오
                                </p>
                            </a>
                        </li>
                        <li className="item_3">
                            <a href="#;">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ow_bottom_img03.png"} alt="WON챌린지"/>
                                </div>
                                <strong>WON챌린지</strong>
                                <p>
                                    당신의 챌린지를 <br/>
                                    이뤄보세요!
                                </p>
                            </a>

                        </li>
                        <li className="item_4">
                            <a href="#;">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ow_bottom_img04.png"} alt="미래설계"/>
                                </div>
                                <strong>미래설계</strong>
                                <p>
                                    미래를 위한 준비자금 <br/>
                                    지금부터 설계해보세요
                                </p>
                            </a>
                        </li>
                    </ul>
                    <div className="consult">
                        <ul>
                            <li>
                                <a href="#;" className="imgBox">
                                    <strong>상담/예약</strong>
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/>
                                </a>
                            </li>
                            <li>
                                <a href="#;" className="imgBox">
                                    <strong>FAQ</strong>
                                    <img src={process.env.PUBLIC_URL +"/img/sub_page/자산관리/ico_arrow.png"} alt="오른쪽 화살표"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>


        </section>
    </>
  )
}

export default JaSan