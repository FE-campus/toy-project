import React from "react";

function Footer() {

  return (
    <footer className="footer">
      <section className="footer-top">
        <div className="footer-top-contents">
          <div style={{ marginRight: 40 }}>
            <p className="footer-top-title black">서비스</p>
            <p>개발자용 프로그래머스</p>
            <p>기업용 프로그래머스</p>
          </div>
          <div style={{ marginRight: 40 }}>
            <p className="footer-top-title black">문의</p>
            <p>FAQ/문의</p>
            <p>교육 결제, 환불 관련 문의</p>
          </div>
          <div style={{ marginRight: 40 }}>
            <p className="footer-top-title black">고객센터</p>
            <p>대표번호 : 1533-1886</p>
            <p>운영시간 : 오전10시 ~ 오후 6시 (점심시간 12:30 ~ 14:00)</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 48 }}>
        <p className="black" style={{ fontSize: 14, marginBottom: 10 }}>2023 프로그래머스</p>
        <p style={{ fontSize: 12, width: 900 }}>(주)그렙 / 대표 임성수 / 서울특별시 서초구 강남대로 327, 2층 프로그래머스(서초동, 대륭서초타워) / 사업자등록번호 220-88-75699 / 통신판매업신고 제 2014-서울강남-03241호 / 직업정보제공사업 신고번호 J1200020180027 / 유료직업소개사업 등록번호 (국내)제2021-3210195-14-5-00026호 (국외)서울청 유 제2021-7호 / (주)그렙은 통신판매중개자로서, 통신판매의 당사자가 아니며 중개하는 콘텐츠 및 거래에 대한 책임을 부담하지 않습니다. 단, (주)그렙이 직접 제공하는 콘텐츠에 대해서는 책임을 부담합니다. 프로그래머스 사이트의 모든 콘텐츠, 정보, UI 등에 대한 무단 복제, 전송, 배포, 크롤링, 스크래핑 등의 행위를 거부하며, 이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.</p>
      </section>

      <section className="footer-bottom">
        <div className="black">개인정보 처리방침</div>
        <div>이용약관</div>
        <div>프로그래머스 인재채용</div>
      </section>
    </footer>
  )
}

export default Footer