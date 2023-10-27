import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
  const headerOn = useRef(null);
  const [scroll, setScroll] = useState("off");

  useEffect(() => {
    scroll === "on" ? document.querySelector("body").classList.add("bodyOn") : document.querySelector("body").classList.remove("bodyOn")
  }, [scroll]);
  const imgUrl = process.env.PUBLIC_URL + "/img/header/";

  return (
    <header>
      <div className="inner">
        <div className="title_Box">
          <h1>
            <Link to="/">
              <img src={imgUrl+"h1_01.png"} alt="우리은행 로고" />
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
          <li className="header_Btn" onClick={() => {
            headerOn.current.classList.add("header_subOn");
            setScroll("on");
          }}>
            <img src={imgUrl+"upper_search_icon_new.png"} alt="검색" />
          </li>
        </ul>
      </div>
      <div className="header_sub" ref={headerOn}>
        <section>
          <div className="search_box">
            <input type="text" spellCheck="false" />
            <img src={imgUrl+"inner_search_icon.png"} alt="검색" />
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
          <div className="header_close_btn" onClick={() => {
            headerOn.current.classList.remove("header_subOn");
            setScroll("off");

          }}>
            <img src={imgUrl+"search_cont_close.png"} alt="닫기버튼" />
          </div>
        </section>
        <span></span>
      </div>
    </header>
  )
}

export default Header