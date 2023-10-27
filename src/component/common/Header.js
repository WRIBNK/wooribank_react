import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
  const headerBtn = useRef()
  const headerOn = useRef()
  const closeBtn = useRef()
  // const body = document.querySelector("body")

  useEffect(() => {
    document.querySelector("body").classList.add("bodyOn")
  }, [headerOn])
  useEffect(() => {
    document.querySelector("body").classList.remove("bodyOn")
  }, [closeBtn])

  return (
    <header>
      <div className="inner">
        <div className="title_Box">
          <h1>
            <Link to="/">
              <img src="../img/header/h1_01.png" alt="우리은행 로고" />
            </Link>
          </h1>
        </div>
        <ul id="gnb">
          <li><Link to="/personal">개인</Link></li>
          <li><Link to="/company">기업</Link></li>
          <li><Link to="/mydata">마이데이터</Link></li>
          <li><Link to="/jasan">자산관리</Link></li>
          <li><Link to="/finance">금융상품</Link></li>
          <li><Link to="/card">카드</Link></li>
          <li><Link to="">제휴제안</Link></li>
          <li className="sub_gnb">전체메뉴</li>
          <li>GLOBAL</li>
          <li className="header_Btn" ref={headerBtn} onClick={() => {
            headerOn.current.classList.add("header_subOn")
          }}>
            <img src="../img/header/upper_search_icon_new.png" alt="검색" />
          </li>
        </ul>
      </div>
      <div className="header_sub" ref={headerOn}>
        <section>
          <div className="search_box">
            <input type="text" spellCheck="false" />
            <img src="../img/header/inner_search_icon.png" alt="검색" />
          </div>
          <div className="header_subText">
            <h3>추천검색어</h3>
            <ul>
              <li><Link to="#">인증서</Link></li>
              <span></span>
              <li><Link to="#">OTP</Link></li>
              <span></span>
              <li><Link to="#">주거래</Link></li>
              <span></span>
              <li><Link to="#">이제한도</Link></li>
              <span></span>
              <li><Link to="#">자동자대출</Link></li>
            </ul>
          </div>
          <div className="header_close_btn" ref={closeBtn} onClick={() => {
            headerOn.current.classList.remove("header_subOn")
          }}>
            <img src="../img/header/search_cont_close.png" alt="닫기버튼" />
          </div>
        </section>
        <span></span>
      </div>
    </header>
  )
}

export default Header