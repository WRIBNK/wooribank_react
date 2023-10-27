import React from 'react';
function Footer() {
    const facebook_url = "https://www.facebook.com/wooribank";
    const instagram_url = "https://www.instagram.com/wooribank_kr/";
    const post_naver_url = "https://m.post.naver.com/woori_official";
    const youtube_url = "https://www.youtube.com/user/wooribank";
    const naver_tv_url = "https://tv.naver.com/wooribanktv";

    
    return (
    
    <>
        <footer>
           
        <nav className="f_nav">
            <ul className="f_nav_ul">
                <li>
                    <span>대표 1588-5000</span>
                    <div className="imgBox">
                        <img src={process.env.PUBLIC_URL +"/img/footer/icon_more.png"} alt="위쪽 화살표"/>
                    </div>
                    <div className="f_pop f_phone_number">
                        <ul>
                            <li>
                                <p>ARS이용안내</p>
                                <ul>
                                    <li>
                                        <div className="f_pop_left">
                                            <p>대표전화</p>
                                        </div>
                                        <div className="f_pop_right">
                                            <p>
                                                1588-5000 / 1599-5000 / 1533-5000
                                                <br/><br/>
                                                82-2-2006-5000(해외)
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="f_pop_left">
                                            <p>고객의 말씀</p>
                                        </div>
                                        <div className="f_pop_right">
                                            <p>080-365-5000
                                                <br/><br/>
                                            (휴대폰 02-2008-5000)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="f_pop_left">
                                            <p>신규상담</p>
                                        </div>
                                        <div className="f_pop_right">
                                            <p>예적금 1599-8100
                                                <br/><br/>
                                                대출 1599-8300</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/footer/bu_more.gif"} alt="팝업창 아래 화살표"/>
                            </div>
                        </span>
                    </div>
                </li>
                <li>
                    <span>기타서비스</span>
                    <div className="imgBox">
                        <img src={process.env.PUBLIC_URL +"/img/footer/icon_more.png"} alt="위쪽 화살표"/>
                    </div>
                    <div className="f_pop f_service">
                        <ul>
                            <li>
                                <p>기타서비스</p>
                                <ul>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/>
                                        </div>
                                        <span>법원환급금조회</span>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/>
                                        </div>
                                        <span>미교부국민주조회</span>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/>
                                        </div>
                                        <span>상조회사예치금조회</span>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/>
                                        </div>
                                        <span>예금잔액증명서발급조회</span>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/>
                                        </div>
                                        <span>지급보증서발급조회</span>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/>
                                        </div>
                                        <span>서울시예치금내역조회</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/footer/bu_more.gif"} alt="팝업창 아래 화살표"/>
                            </div>
                        </span>
                    </div>
                </li>
                <li>
                    <span>LANGUAGE</span>
                    <div className="imgBox">
                        <img src={process.env.PUBLIC_URL +"/img/footer/icon_more.png"} alt="위쪽 화살표"/>
                    </div>
                    <div className="f_pop f_language">
                        <ul>
                            <li>
                                <p>LANGUAGE</p>
                                <ul>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/flag_us.gif"} alt="미국 국기"/>
                                        </div>
                                        <div className="span">English</div>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/flag_china.gif"} alt="중국 국기"/>
                                        </div>
                                        <div className="span">中國語</div>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/flag_japan.gif"} alt="일본 국기"/>
                                        </div>
                                        <div className="span">日本語</div>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/flag_philippines.gif"} alt="필리핀 국기"/>
                                        </div>
                                        <div className="span">Tagalog</div>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/flag_vietnam.gif"} alt="베트남 국기"/>
                                        </div>
                                        <div className="span">tiếng Việt</div>
                                    </li>
                                    <li>
                                        <div className="imgBox">
                                            <img src={process.env.PUBLIC_URL +"/img/footer/flag_mongolia.gif"} alt="몽골 국기"/>
                                        </div>
                                        <div className="span">Монгол хэл</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/footer/bu_more.gif"} alt="팝업창 아래 화살표"/>
                            </div>
                        </span>
                    </div>
                </li>
                <li>
                    <span>패밀리사이트</span>
                    <div className="imgBox">
                        <img src={process.env.PUBLIC_URL +"/img/footer/icon_more.png"} alt="위쪽 화살표"/>
                    </div>
                    <div className="f_pop f_family">
                        <ul>
                            <li>
                                <p>패밀리사이트</p>
                                <ul>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리금융지주</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리펀드서비스</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리카드</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리PE</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리금융캐피탈</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리글로벌자산운용</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리종합금융</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리FIS</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리자산신탁</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리금융경영연구소</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리자산운용</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리다문화장학재단</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리금융저축은행</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리미소금융재단</span>
                                    </li>
                                    <li>
                                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/bu_list_black.gif"} alt="팝업창 메뉴 왼쪽 점사진"/></div>
                                        <span>우리신용정보</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL +"/img/footer/bu_more.gif"} alt="팝업창 아래 화살표"/>
                            </div>
                        </span>
                    </div>
                </li>
            </ul>
            <div className="f_nav_sns">
                <ul className="f_sns_ul">
                    <li key="sns_facebook">
                        <div className="imgBox facebook_url">
                            <a href={facebook_url} target='_blank'>
                                <img src={process.env.PUBLIC_URL +"/img/footer/icon_facebook_gray.png"} alt="페이스북 아이콘"/>
                            </a>
                        </div>
                    </li>
                    <li key="sns_instagram">
                        <div className="imgBox">
                            <a href={instagram_url} target='_blank'>
                                <img src={process.env.PUBLIC_URL +"/img/footer/icon_instagram_gray.png"} alt="인스타그램 아이콘"/>
                            </a>
                        </div>
                    </li>
                    <li key="sns_post_naver">
                        <div className="imgBox">
                            <a href={post_naver_url} target='_blank'>
                                <img src={process.env.PUBLIC_URL +"/img/footer/icon_post_naver_gray.png"} alt="네이버 포스트 아이콘"/>
                            </a>
                        </div>
                    </li>
                    <li key="sns_youtube">
                        <div className="imgBox">
                            <a href={youtube_url} target='_blank'>
                                <img src={process.env.PUBLIC_URL +"/img/footer/icon_youtube_gray.png"} alt="유튜브 아이콘"/>
                            </a>
                        </div>
                    </li>
                    <li key="sns_naver_tv">
                        <div className="imgBox">
                            <a href={naver_tv_url} target='_blank'>
                                <img src={process.env.PUBLIC_URL +"/img/footer/icon_navertv_gray.png"} alt="네이버TV 아이콘"/>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="f_copyright">
            <a href="" className="f_logo">
                <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/icon_woori.gif"} alt="우리은행 로고"/></div>
            </a>
            
            <div className="f_info">
                <div className="f_info_1">
                    <a href="#">은행소개</a>
                    <a href="#">영업점안내</a>
                    <a href="#">고객광장</a>
                    <a href="#">개인정보처리방침</a>
                    <a href="#">신용정보활용체제</a>
                    <a href="#">개인신용정보관리보호</a>
                    <a href="#">사고신고</a>
                    <a href="#">전자민원접수</a>
                    <a href="#">보호금융상품등록부</a>
                    <a href="#">상품공시실</a>
                    <a href="#">보안센터</a>
                    <a href="#">웹접근성 이용안내</a>
                </div>
                <div className="f_info_2">
                    <p>COPYRIGHTS WOORI BANK. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
            <div className="f_info2">
                <ul>
                    <li>
                        <div className="f_message">
                            <p>2023 웹 접근성<br/>우수사이트</p>
                        </div>
                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/icon_kwacc_ib_2023.png"} alt="한국웹접근성인증평가원 인증마크"/></div>
                    </li>
                    <li>
                        <div className="f_message">
                            <p>
                                2019 고객감동경영대상<br/>종합대상 12년 연속 수상
                            </p>
                        </div>
                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/icon_1_new.gif"} alt="고객감동경영대상 로고"/></div>
                    </li>
                    <li>
                        <div className="f_message">
                            <p>
                                The Banker Awards 2020<br/>우리은행 3관왕 수상
                            </p>
                        </div>
                        <div className="imgBox"><img src={process.env.PUBLIC_URL +"/img/footer/icon_20201215.png"} alt="The Banker Awards 2020 로고"/></div>
                    </li>
                </ul>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer