import React from "react";

function Lecture() {

  return (
    <section className='lectures'>
      <h2>클린코드 비법을 알려 줄게요.</h2>
      <div className="test1">
        <article className='lecture-infos'>
          <div className='lecture-title'>
            <div>수강 현황</div>
            <div className="badge"><span>1</span></div>
          </div>
          <div className="lecture-info">
            <div className="lecture-info-top">
              <div className="lecture-text">
                <p className="bold-title">PCCP 모의고사 1회</p>
                <p>4강의만 더 들으면 클리어!</p>
              </div>
              <div className="polygon"><svg viewBox="0 0 140 240"><polygon points="70,40 100,20 130,40 130,210 100,230 70,210 " fill="white" stroke="#006DFF"></polygon><polygon points="70,40 100,20 130,40 100,60" fill="#0078FF" opacity="0.1"></polygon><polygon points="70,210 100,190 130,210 100,230" fill="#0078FF" opacity="0.3"></polygon><polygon points="70,40 100,60 100,230 70,210" fill="#0078FF" opacity="0.3"></polygon><polygon points="100,60 130,40 130,210 100,230" fill="#0078FF" opacity="0.2"></polygon><polygon points="70,210 100,230 100,230 70,210" fill="#0078FF"></polygon><polygon points="100,230 130,210 130,210 100,230" fill="#0078FF" opacity="0.5"></polygon><polygon points="49,205 60,210 49,215" fill="#006DFF"></polygon><rect x="10" y="195" width="40" height="30" rx="5" ry="5" fill="#006DFF"></rect><text x="31" y="215" text-anchor="middle" fill="white">0% </text></svg></div>
            </div>
            <div className="lecture-info-bottom">
              <button className="btn black-btn"><span class="material-symbols-outlined">
                play_arrow
              </span> 강의 이어보기</button>
              <button className="btn white-btn">질문보기</button>
            </div>
          </div>
        </article>

        <article className='lecture-right'>
          <div className='lecture-title'>
            <div>추천 강의</div>
            <span class="material-symbols-outlined">
              chevron_right
            </span>
          </div>
          <div className="test2">
            <div className="lecture-info">
              <div className="lecture-info-top">
                <div className="lecture-text">
                  <p className="bold-title white">코딩테스트 연습 모음집</p>
                  <p className="strong-text">무료</p>
                </div>
                <div className="polygon"><svg viewBox="0 0 140 240"><polygon points="70,40 100,20 130,40 130,210 100,230 70,210 " fill="white" stroke="#006DFF"></polygon><polygon points="70,40 100,20 130,40 100,60" fill="#0078FF" opacity="0.1"></polygon><polygon points="70,210 100,190 130,210 100,230" fill="#0078FF" opacity="0.3"></polygon><polygon points="70,40 100,60 100,230 70,210" fill="#0078FF" opacity="0.3"></polygon><polygon points="100,60 130,40 130,210 100,230" fill="#0078FF" opacity="0.2"></polygon><polygon points="70,210 100,230 100,230 70,210" fill="#0078FF"></polygon><polygon points="100,230 130,210 130,210 100,230" fill="#0078FF" opacity="0.5"></polygon><polygon points="49,205 60,210 49,215" fill="#006DFF"></polygon><rect x="10" y="195" width="40" height="30" rx="5" ry="5" fill="#006DFF"></rect><text x="31" y="215" text-anchor="middle" fill="white">0% </text></svg></div>
              </div>
              <div className="lecture-info-bottom2">
                <button className="btn white-btn">강의 보러 가기</button>
              </div>
            </div>
            <div className="lecture-info">
              <div className="lecture-info-top">
                <div className="lecture-text">
                  <p className="bold-title white">PCCE 모의고사 1회</p>
                  <p className="strong-text">무료</p>
                </div>
                <div className="polygon"><svg viewBox="0 0 140 240"><polygon points="70,40 100,20 130,40 130,210 100,230 70,210 " fill="white" stroke="#006DFF"></polygon><polygon points="70,40 100,20 130,40 100,60" fill="#0078FF" opacity="0.1"></polygon><polygon points="70,210 100,190 130,210 100,230" fill="#0078FF" opacity="0.3"></polygon><polygon points="70,40 100,60 100,230 70,210" fill="#0078FF" opacity="0.3"></polygon><polygon points="100,60 130,40 130,210 100,230" fill="#0078FF" opacity="0.2"></polygon><polygon points="70,210 100,230 100,230 70,210" fill="#0078FF"></polygon><polygon points="100,230 130,210 130,210 100,230" fill="#0078FF" opacity="0.5"></polygon><polygon points="49,205 60,210 49,215" fill="#006DFF"></polygon><rect x="10" y="195" width="40" height="30" rx="5" ry="5" fill="#006DFF"></rect><text x="31" y="215" text-anchor="middle" fill="white">0% </text></svg></div>
              </div>
              <div className="lecture-info-bottom2">
                <button className="btn white-btn">강의 보러 가기</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Lecture