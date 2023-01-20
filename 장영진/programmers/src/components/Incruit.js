import React from "react";
import program1 from '../img/program1.jpeg'
import program2 from '../img/program2.jpeg'

function Incruit() {
  return (
    <section className='lectures'>
      <h2>잘나가는 개발자가 되어보세요.</h2>
      <div className="test1">
        <article className='lecture-infos'>
          <div className='lecture-title'>
            <div>내가 접수한 채용 프로그램</div>
            <span class="material-symbols-outlined">
              chevron_right
            </span>
          </div>
          <div className="incruit-info">
            <div className="program-left-imgbox">
              <img src={program1}></img>
            </div>
            <div className="incruit-info-top">
              <div className="lecture-text">
                <p className="bold-title">지원한 포지션</p>
              </div>
              <div className="lecture-text">
                <p className="bold-title">지원 상태</p>
              </div>
              <div className="line"></div>
              <div className="lecture-text">
                <p className="bold-title">시험일</p>
              </div>
              <div className="lecture-text">
                <p className="text-gray">22-05-08(일) 13:00 ~ 22-05-08(일) 15:30</p>
              </div>
              <button className="btn white-btn">종료</button>
            </div>
          </div>
        </article>

        <article className='lecture-right'>
          <div className='lecture-title'>
            <div>진행중인 채용 프로그램</div>
            <span class="material-symbols-outlined">
              chevron_right
            </span>
          </div>
          <div className="test2">
            <div className="incruit-info">
              <div className="program-left-imgbox">
                <img src={program2}></img>
              </div>
              <div className="incruit-info-top">
                <div className="lecture-text">
                  <p className="bold-title">지원한 포지션</p>
                </div>
                <div className="lecture-text">
                  <p className="bold-title">지원 상태</p>
                </div>
                <div className="line"></div>
                <div className="lecture-text">
                  <p className="bold-title">시험일</p>
                </div>
                <div className="lecture-text">
                  <p className="text-gray">22-05-08(일) 13:00 ~ 22-05-08(일) 15:30</p>
                </div>
                <button className="btn white-btn">종료</button>
              </div>
            </div>
            <div className="incruit-info">
              <div className="program-left-imgbox">
                <img src={program1}></img>
              </div>
              <div className="incruit-info-top">
                <div className="lecture-text">
                  <p className="bold-title">지원한 포지션</p>
                </div>
                <div className="lecture-text">
                  <p className="bold-title">지원 상태</p>
                </div>
                <div className="line"></div>
                <div className="lecture-text">
                  <p className="bold-title">시험일</p>
                </div>
                <div className="lecture-text">
                  <p className="text-gray">22-05-08(일) 13:00 ~ 22-05-08(일) 15:30</p>
                </div>
                <button className="btn white-btn">종료</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Incruit