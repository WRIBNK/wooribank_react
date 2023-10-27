import React, { useEffect, useRef } from 'react'
import Footer from '../common/Footer';

function Personal() {
  const path = process.env.PUBLIC_URL;

  const content = useRef();

  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      content.current.children[i].style.transform = "translateY(272px)";
      console.log(content.current.children[i]);
      // footer에도 down 클래스 추가
    }
  }, [])

  return (
    <main id="private">
      <div className="inner">
        <ul className="navi">
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon01.gif`} alt="전계좌조회" />
            </div>
            <div className="txtBox">
              <a href="#;">전계좌조회</a>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon02.gif`} alt="즉시이체" />
            </div>
            <div className="txtBox">
              <a href="#;">즉시이체</a>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon03.gif`} alt="지로납부" />
            </div>
            <div className="txtBox">
              <a href="#;">지로납부</a>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon04.gif`} alt="예금신규" />
            </div>
            <div className="txtBox">
              <a href="#;">예금신규</a>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon05_170110.png`} alt="펀드신규" />
            </div>
            <div className="txtBox">
              <a href="#;">펀드신규</a>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon06.gif`} alt="대출이자납입" />
            </div>
            <div className="txtBox">
              <a href="#;">대출이자납입</a>
            </div>
          </li>
          <li>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/img_con-icon08.gif`} alt="퇴직연금" />
            </div>
            <div className="txtBox">
              <a href="#;">퇴직연금</a>
            </div>
          </li>
        </ul>
        <div className="content" ref={content}>
          <div className="wonPlus">
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/plus.png`} alt="WON 플러스 예금" />
            </div>
            <span className="viewMore">
              <a href="#;">자세히보기</a>
            </span>
          </div>
          <div className="mainEvent">
            <div className="bgColor"></div>
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/open_0.png`} alt="우리은행에서 한 번에 우리 오픈뱅킹" />
            </div>
            <span className="viewMore">
              <a href="#;">자세히보기</a>
            </span>
          </div>
          <div className="mobileBank">
            <div className="imgBox">
              <img src={`${path}/img/sub_page/개인/up_1.png`} alt="한도UP! 우리 주거래직장인 대출" />
            </div>
            <span className="viewMore">
              <a href="#;">자세히보기</a>
            </span>
          </div>
          <div className="promotion">
            <ul className="list">
              <li className="first">
                <h4>인터넷뱅킹 이용안내</h4>
                <div className="use-guide">
                  <ul>
                    <li>
                      <a href="#;">이용시간안내</a>
                    </li>
                    <li>
                      <a href="#;">금리조회</a>
                    </li>
                    <li>
                      <a href="#;">수수료안내</a>
                    </li>
                    <li>
                      <a href="#;">환율조회</a>
                    </li>
                    <li>
                      <a href="#;">인증서발급/재발급</a>
                    </li>
                    <li>
                      <a href="#;">금융계산기</a>
                    </li>
                    <li>
                      <a href="#;">타기관인증서등록</a>
                    </li>
                    <li>
                      <a href="#;">보안프로그램설치안내</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="second">
                <h4>고객센터</h4>
                <div className="use-guide">
                  <ul>
                    <li>
                      <a href="#;">고객상담 FAQ<br /><span>개인뱅킹</span><span>인증서</span>보안카드/OTP</a>
                    </li>
                    <li>
                      <a href="#;">이메일상담 24시간 신청가능</a>
                    </li>
                    <li>
                      <a href="#;">전화상담 평일 09:00~18:00 <br />1588-5000, 1599-5000, 1533-5000 <br /> 해외
                        82-2-2006-5000</a>
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

      </div>
    </main>
  )
}

export default Personal