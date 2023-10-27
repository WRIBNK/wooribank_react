import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navi() {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="navi">
            <ul>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 1.gif`} alt="전체상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">전체상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 2.gif`} alt="목돈굴리기상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">목돈굴리기상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 3.gif`} alt="목돈모으기상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">목돈모으기상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 4.gif`} alt="지수연동상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">지수연동상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 5.gif`} alt="주택청약상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">주택청약상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 6.gif`} alt="자유입출금상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">자유입출금상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 7.gif`} alt="외화예금상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">외화예금상품</Link>
                    </div>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={`${path}/img/sub_page/금융상품/list 8.gif`} alt="기업전용상품" />
                    </div>
                    <div className="txtBox">
                        <Link to="#;">기업전용상품</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navi