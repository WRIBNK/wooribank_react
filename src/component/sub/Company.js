import { faAngleRight, faBolt, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Company() {
  const company_visual = useRef();
  const slider = useRef();
  const btns_right = useRef();
  const btns_left = useRef();
  const btns_box_bar = useRef();

  function btnsLeft() {
    slider.current.style.transition = "margin-left 0.5s";
    slider.current.style.marginLeft = "0px";
    btns_right.current.classList.add("on");
    btns_left.current.classList.remove("on");
    btns_box_bar.current.children[0].classList.add("on");
    btns_box_bar.current.children[1].classList.remove("on");
  }
  function btnsRight() {
    slider.current.style.transition = "margin-left 0.5s";
    slider.current.style.marginLeft = "-570px";
    btns_left.current.classList.add("on");
    btns_right.current.classList.remove("on");
    btns_box_bar.current.children[1].classList.add("on");
    btns_box_bar.current.children[0].classList.remove("on");
  }

  useEffect(() => {
    company_visual.current.style.transform = "translateY(-1500px)";



    const Scroll = () => {
      const scrollTop = window.pageYOffset;
      const translateY = -320 + scrollTop / 5;
      company_visual.current.style.transform = `translateY(${translateY}px)`;
      if (translateY >= 0) {
        window.removeEventListener("scroll", Scroll);
      }
    }
    window.addEventListener("scroll",Scroll);
    return ()=>window.removeEventListener("scroll",Scroll);

  }, [])

  return (
    <section className="company">
      <div className="company_inner">
        <div className="company_subLeft">
          <div className="company_box">
            <p>기업 뱅킹을 더 안전하게 이용하세요!</p>
            <h2>
              전자금융사기 피해 예방 및<br />안심경영을 지원합니다
            </h2>
            <a href="#;" className="company_btn">바로가기</a>
            <div className="company_imgBox">
              <img
                src="../img/sub_page/기업/자물쇠.png"
                alt="기업 뱅킹을 더 안전하게 이용하세요! 전자금융사기 피해 예방 및 안심경영을 지원합니다."
              />
            </div>
          </div>
          <div className="company_subBox">
            <section className="company_sub">
              <div className="company_sub_header">
                <p>쉽고 편리한 거래를 위한 추천서비스</p>
                <span>
                  <h2>
                    고객님의 빠른 업무를 위해 준비했어요!
                  </h2>
                  <div className="company_btnBox" ref={btns_box_bar}>
                    <div className="company_btn on" onClick={() => { btnsLeft() }}></div>
                    <div className="company_btn" onClick={() => { btnsRight() }}></div>
                  </div>
                </span>
              </div>
              <section className="comapny_subTwo" ref={slider}>
                <div className="company_subTwoSli">
                  <article>
                    <img
                      src="../img/sub_page/기업/기업_추천서비스.png"
                      alt="환율동향 및 현물환/선물환까지"
                    />
                  </article>
                  <article>
                    <img
                      src="../img/sub_page/기업/기업_추천서비스(2).png"
                      alt="수수료없이 바로 받는 입출금내역 푸시알림"
                    />
                  </article>
                  <article>
                    <img
                      src="../img/sub_page/기업/기업_추천서비스(3).png"
                      alt="다양한 증명서/확인증을 한번에 발급"
                    />
                  </article>
                  <article>
                    <img
                      src="../img/sub_page/기업/기업_추천서비스(4).png"
                      alt="국세청 간편장부를 손쉽게 작성"
                    />
                  </article>
                  <article>
                    <img
                      src="../img/sub_page/기업/기업_추천서비스(5).png"
                      alt="성공 기업 경영을 위한 다양한 컨텐츠 제공"
                    />
                  </article>
                </div>
              </section>
              <div className="company_subTwoBtn">
                <FontAwesomeIcon icon={faChevronLeft} ref={btns_left} onClick={() => { btnsLeft() }} />
                <FontAwesomeIcon icon={faChevronRight} className="on" ref={btns_right} onClick={() => { btnsRight() }} />
              </div>
              <div className="company_subThree">
                <div className="company_sub_header">
                  <p>
                    원활한 우리은행 기업인터넷뱅킹을 위한
                    서비스
                  </p>
                  <h2>더 쉽게 알아볼까요?</h2>
                </div>
                <div className="company_subThreeBox">
                  <section>
                    <div className="company_subThreeBox_title">
                      <h3>
                        우리 기업뱅킹 서비스를
                        <span>체험하고 싶으시면?</span>
                      </h3>
                      <p>
                        메뉴별 체험하기로 하나씩
                        살펴보세요
                      </p>
                      <div className="company_nav">
                        <a href="#">바로가기</a>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                    <img
                      src="../img/sub_page/기업/ani_exp1.gif"
                      alt="파란색 캐릭터"
                    />
                  </section>
                  <section>
                    <div className="company_subThreeBox_title">
                      <h3>
                        우리 기업뱅킹 서비스가
                        <span>체험하고 싶으시면?</span>
                      </h3>
                      <p>
                        신규 이용자 가이드로 처음부터
                        차근차근
                      </p>
                      <div className="company_nav">
                        <a href="#">바로가기</a>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                    <img
                      src="../img/sub_page/기업/ani_exp2.gif"
                      alt="노란색 캐릭터"
                    />
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="company_subRight">
          <div className="company_login">
            <p>안전한 인터넷뱅킹</p>
            <h2>로그인하세요!</h2>
            <div className="login_btn">
              <a href="#;">로그인</a>
            </div>
            <div className="company_center">
              <p>
                인증센터 바로가기
                <FontAwesomeIcon icon={faCaretRight} />
              </p>
            </div>
          </div>
          <section>
            <article className="comapny_check">
              <h3>빠른조회</h3>
              <p>로그인없이 이용가능한메뉴</p>
              <FontAwesomeIcon icon={faBolt} />
            </article>
            <article className="company_menu">
              <div className="company_menuText">
                <h3>주요메뉴</h3>
                <p>전계좌조회
                  <FontAwesomeIcon icon={faCaretRight} className="fa-chevron-right" />
                </p>
                <p>즉시/예약이체
                  <FontAwesomeIcon icon={faCaretRight} className="fa-chevron-right" />
                </p>
                <p>대량이체
                  <FontAwesomeIcon icon={faCaretRight} className="fa-chevron-right" />
                </p>
                <p>승인/결재목록조회
                  <FontAwesomeIcon icon={faCaretRight} className="fa-chevron-right" />
                </p>
                <p>거래내역조회
                  <FontAwesomeIcon icon={faCaretRight} className="fa-chevron-right" />
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
      <div className="company_visual" ref={company_visual}>
        <div className="company_section_BOX">
          <section className="company_visual_box_fir">
            <h3>공지사항</h3>
            <p>
              「Rising Leaders 300」 중견기업 상생지원 프로그램
              2기 모집안내
            </p>
            <p>
              「Rising Leaders 300」 중견기업 상생지원 프로그램
              2기 모집안내
            </p>
            <p>(구)기업인터넷뱅킹 서비스 종료 안내</p>
          </section>
          <div className="company_visual_sub">
            <section className="company_visual_sub_fir">
              <div className="company_visual_sub_fir_title">
                <h3>고객센터</h3>
                <button>
                  <p>원격지원 상담서비스</p>
                </button>
              </div>
              <div className="company_visual_sub_fir_subtitle">
                <b>1588-5000 1599-5000 1533-5000</b>
                <p>
                  해외 +82) 2-2006-5000<span></span>평일
                  09:00~18:00
                </p>
              </div>
            </section>
            <section>
              <img src="../img/sub_page/기업/기업_퇴직연금.png" alt="기업_퇴직연금" />
            </section>
          </div>
        </div>
        <section className="company_section_right">
          <h3>우리WON기업 앱</h3>
          <p>
            조회, 이체, 승인/결재는 기본<br />대출서류 제출,
            자금관리까지 영업점<br />방문 없이!
          </p>
          <div className="company_qr">
            <div className="company_iphone company_smartphone">
              <div className="company_qr_box">
                <h4>아이폰</h4>
                <p>DOWNLOAD</p>
              </div>
              <div className="company_qr_img">
                <img src="../../img/sub_page/기업/img_qr_ios.png" alt="IOS QR코드 사진" />
              </div>
            </div>
            <div className="company_And company_smartphone">
              <div className="company_qr_box">
                <h4>안드로이드</h4>
                <p>DOWNLOAD</p>
              </div>
              <div className="company_qr_img">
                <img src="../img/sub_page/기업/img_qr_aos.png" alt="ANDROID QR코드 사진" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Company