import React from 'react'
import dashboard1 from '../img/dashboard1.png'
import dashboard2 from '../img/dashboard2.png'
import dashboard3 from '../img/dashboard3.png'
import dashboard4 from '../img/dashboard4.png'

function Dashboard(props) {

  return (
    <section className='dashboard'>
      <h1><span className='db__user-name'>{props.userName}님</span>의 성장 여정이에요.</h1>
      <article className='dashboard-infos'>
        <div className='dashboard-info'>
          <div className='info-title'>정복중인 레벨</div>
          <div><span className='bold-number'>5</span> 레벨</div>
          <img className='db__img' src={dashboard1}></img>
        </div>

        <div className='dashboard-info'>
          <div className='info-title'>현재 랭킹</div>
          <div><span className='bold-number'>5</span> 위</div>
          <img className='db__img' src={dashboard2}></img>
        </div>

        <div className='dashboard-info'>
          <div className='info-title'>해결한 코딩테스트</div>
          <div><span className='bold-number'>5</span> 문제해결</div>
          <img className='db__img' src={dashboard3}></img>
        </div>

        <div className='dashboard-info'>
          <div className='info-title'>채용 현황 관리</div>
          <div><span className='bold-number'>5%</span> 완성도</div>
          <img className='db__img' src={dashboard4}></img>
        </div>
      </article>
    </section>
  )
}

export default Dashboard