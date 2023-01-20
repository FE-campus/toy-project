function Header(props) {

  return (
    <header>
      <div className="navbar">
        {/* navbar 로고 */}
        <section className="navbar-left">
          <div className="logo">programmers</div>
          {/* navbar 센터 */}
          <ul>
            <div className="bold-menu">
              <li>스쿨</li>
              <li>커리어</li>
              <li>커뮤니티</li>
            </div>
            <div className='normal-menu'>
              <li>스킬체크</li>
              <li>코딩테스트 연습</li>
              <li>코딩역량인증시험</li>
            </div>
          </ul>
        </section>
        {/* navbar 오른쪽 */}
        <div className="user-menu">
          <a href='/' className='user-name'>{props.userName}님</a>
          <button><span class="material-symbols-outlined">
            notifications
          </span></button>
        </div>
      </div>
    </header>
  )
}

export default Header