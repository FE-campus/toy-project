import React from "react";
import logo from '../img/logo.png'

function Position() {
  return (
    <section className='lectures'>
      <div className="test1">
        <article className='lecture-right'>
          <div className='lecture-title'>
            <div><span className="blue">다른 개발자</span>들이 많이 지원한 포지션</div>
            <span class="material-symbols-outlined">
              chevron_right
            </span>
          </div>
          <div className="position-grid">
            <Card />
            <Card />
            <Card />
          </div>
        </article>
      </div>
    </section>
  )
}

function Card() {
  return (
    <div className="position-card">
      <div className="position-card-top">
        <div className="positoin-img"><img src={logo}></img></div>
        <div className="position-name">
          <p>프론트엔드 개발자</p>
          <p className="text-gray">토스</p>
        </div>
      </div>
      <div className="position-card-bottom">
        <div className="card-bottom-text">
          <div>경력</div>
          <p className="card-bottom-content">신입 가능</p>
        </div>
        <div className="row-line"></div>
        <div className="card-bottom-text">
          <div>위치</div>
          <p className="card-bottom-content">서울 금천구</p>
        </div>
      </div>
    </div>
  )
}

export default Position