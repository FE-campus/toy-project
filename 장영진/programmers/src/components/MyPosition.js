import React from "react";
import search from '../img/search.png';

function MyPosition() {
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
          <div className="myposition-grid">
            <Card2 />
          </div>
        </article>
      </div>
    </section>
  )
}

function Card2() {

  return (
    <div className="myposition-card">
      <div className="myposition-card-img">
        <img src={search}></img>
      </div>
      <div className="myposition-content">
        <p>새로운 채용공고가 있어요!</p>
        <p>요즘 뜨는 포지션 보러 갈까요?</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn white-btn" style={{ width: 300 }}>포지션 찾아보기</button>
      </div>
    </div >
  )
}

export default MyPosition