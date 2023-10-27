import { Link } from "react-router-dom";

function Plogin() {
  let ImgUrl = process.env.PUBLIC_URL + '/img/sub_page/로그인_개인/';
    return (
        <>
            <div id="pLogin">
                <div className="p_inner">
                    <h2>개인로그인</h2>
                    <div className="p_txtBox">
                        <div className="p_txt">
                            안전한 인터넷뱅킹 이용을 위해<br/>
                            꼭 알아두세요!
                        </div>
                        <ul className="pList">
                            <li>
                                <img src={ImgUrl + "check_icon.png"} alt="체크 아이콘"/>
                                우리은행은 어떠한 이유로도 보안카드번호 35개 전체 입력을 요구하지 않습니다.
                            </li>
                            <li>
                                <img src="../img/sub_page/로그인_개인/check_icon.png" alt="체크 아이콘"/>
                                우리은행 홈페이지는 인터넷 주소창에 자물쇠 등 보안 아이콘이 있습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="content_box">
                        <div className="p_con1">
                            <h3>인증서 로그인</h3>
                            <div className="p_btns_imgBox">
                                <Link to="/#" className="fina">
                                    <img src="../img/sub_page/로그인_개인/login_btn1.png" alt="금융인증서 버튼 이미지"/>
                                </Link>
                                <Link to="/#" className="joint">
                                    <img src="../img/sub_page/로그인_개인/login_btn_2.png" alt="공동인증서 버튼 이미지"/>
                                </Link>
                            </div>
                            <div className="popupCheck">
                                <span>자동팝업</span>
                                <div className="p_radioBox">
                                    <input type="radio" name="popup" id="use"/>
                                    <label>사용</label>
                                    <input type="radio" name="popup" id="unuse" defaultChecked/>
                                    <label>사용안함</label>
                                </div>
                            </div>
                            <ul className="menu_list">
                                <li><Link to="/#">금융인증서 발급</Link></li>
                                <li><Link to="/#">공동인증서 발급</Link></li>
                                <li><Link to="/#">인증센터</Link></li>
                            </ul>
                        </div>
                        <div className="p_con1">
                            <h3>아이디 로그인</h3>
                            <div className="p_loginBox">
                                <div className="login_input">
                                    <input type="text" id="ID" placeholder="아이디 입력"/>
                                    <input type="password" id="PWD" placeholder="비밀번호 입력"/>
                                </div>
                                <div className="login_imgBox">
                                    <img src="../img/sub_page/로그인_개인/login_btn.png" alt="로그인"/>
                                </div>
                            </div>
                            <div className="checkBox">
                                <input type="checkbox"/>마우스로 입력
                            </div>
                            <ul className="menu_list">
                                <li><Link to="/#">아이디조회</Link></li>
                                <li><Link to="/#">비밀번호재등록</Link></li>
                                <li><Link to="/#">회원가입</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="content_box">
                        <div className="p_con2">
                            <div className="WON_guide_imgBox">
                                <img id="won1" src="../img/sub_page/로그인_개인/WONlogin_btn.png" alt="우리WON인증서"/>
                                <img id="won2" src="../img/sub_page/로그인_개인/WONlogin_btn2.png" alt="우리WON인증서 로그인 버튼"/>
                            </div>
                        </div>
                        <div className="p_con2">
                            <div className="guide_imgBox">
                                <img className="guide_btn" src="../img/sub_page/로그인_개인/guide_btn1.png" alt="보안프로그램 설치안내"/>
                                <img className="guide_btn" src="../img/sub_page/로그인_개인/guide_btn2.png" alt="인터넷뱅킹 이용시 유의사항"/>
                            </div>
                        </div>
                    </div>

                    <div className="content_box">
                        <div className="p_con3">
                            <h3>
                                <Link to="/#">
                                    자주묻는질문
                                    <img src="../img/sub_page/로그인_개인/arrow.png" alt="오른쪽 화살표"/>
                                </Link>
                            </h3>
                            <ul className="qus_list">
                                <li><Link to="/#">인터넷/스마트뱅킹 이체한도 조회 및 증액하는 방법</Link></li>
                                <li><Link to="/#">공동인증서 암호를 모르거나, 암호 불일치(오류횟수 5회)인 경우</Link></li>
                                <li><Link to="/#">인터넷/스마트뱅킹 간편이체서비스란?</Link></li>
                            </ul>
                        </div>
                        <div className="p_con3">
                            <h3>
                                <Link to="/#">고객센터
                                    <img src="../img/sub_page/로그인_개인/arrow.png" alt="오른쪽 화살표"/>
                                </Link>
                                <p>평일 09:00 ~ 18:00</p>
                            </h3>
                            <div className="con3_txtBox">
                                <div className="p_title">
                                    <p className="txt">대표전화</p>
                                    <span>1588-5000</span>
                                    <br/>
                                    <span>1599-5000</span>
                                </div>
                                <div className="p_title">
                                    <p className="txt">해외</p>
                                    <span>82-2-2006-5000</span>
                                </div>
                                <div className="p_title">
                                    <p className="txt">신규상담</p>
                                    <em>예·적금</em>
                                    <span>1599-8100</span>
                                    <br/>
                                    <em>대출</em>
                                    <span>1599-8300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plogin