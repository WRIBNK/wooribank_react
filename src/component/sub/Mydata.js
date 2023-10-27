import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

function Mydata() {
  const frameRef = useRef(null);

    useEffect(() => {
        if (frameRef.current) {
            const frame = frameRef.current;
            const interval = setInterval(() => { 
                frame.appendChild(frame.firstChild); 
            }, 2000);

            return () => {
                clearInterval(interval);
            }
        }
    }, []);
    
    let ImgUrl = process.env.PUBLIC_URL + '/img/sub_page/마이데이터/';
    return (
        <>
            <div id="myData">
                <div className="imgBox">
                    <img src={ImgUrl + "bg_main_guide.png"} alt="배경" />
                </div>
                <div className="myData_inner">
                    <span className="txtBox">
                        <div className="txtImgBox">
                            <img src={ImgUrl + "img_main_text_1.png"} alt="나의 데이터가 가치가 되는 새로운 경험 마이데이터" />
                        </div>
                        <p className="in_txt">
                            마이데이터의 정석!<br/>
                            우리 마이데이터 서비스와 함께 하세요.<br/>
                            여러분의 가치, 소중히 관리하겠습니다.
                        </p>
                    </span>
                    <div className="myD_btnBox">
                        <Link className="myD_btn join" to="/pLogin">
                            <div className="joinImgBox"><img src={ImgUrl + "icon_join.png"} alt="사람 아이콘" /></div>
                            <strong>회원가입하기</strong>
                            마이데이터의 시작, 회원가입!
                        </Link>
                        <Link className="myD_btn guide" to="/#">
                            <div className="guideImgBox"><img src={ImgUrl + "icon_video.png"} alt="비디오 재생 아이콘"/></div>
                            <strong>마이데이터 가이드</strong>
                            동영상으로 쉽고 빠르게 알기
                        </Link>
                    </div>
                    <div className="phone">
                        <ul className="phone_frame" ref={frameRef}>
                            <li key={1}>
                                <img src={ImgUrl + "img_main_motion_3.png"} alt="월별 소비현황 사진"/>
                            </li>
                            <li key={2}>
                                <img src={ImgUrl + "img_main_motion_1.png"} alt="시작은 데이터 등록부터 최근 지출 목록 사진"/>
                            </li>
                            <li key={3}>
                                <img src={ImgUrl + "img_main_motion_2.png"} alt="총 등록자산 사진"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mydata