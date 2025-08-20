import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className='left-header'>
          <img className="header-logo" src='https://www.mcdonalds.co.kr/kor/images/common/logo.png'/>
        </div>
        <div className="main-header">
          <p className='header-bar'>Menu</p>
          <p className='header-bar'>Store</p>
          <p className='header-bar'>What's New</p>
          <p className='header-bar'>Story</p>
        </div>
        <div className='right-header'>
          <div className='header-buttons'>
            <button className='header-button1'>임차문의</button>
            <button className='header-button2'>RECRUIT</button>
            <button className='header-button3'>ENG</button>
          </div>
            <div className='header-search'>
            <img className="search-img" src='/search.jpeg'/>
          </div>
        </div>
        
      </header>
      <hr/>
      
      <footer>
        <nav>
          <ul className='footer-left'>
            <li>개인정보 처리방침</li>
            <li>사이트맵</li>
            <li>임차문의</li>
            <li>고객문의</li>
            <li>인재채용</li>
          </ul>
        </nav>
        <div className='footer-center'>
          <p>한국맥도날드(유)</p>
          <p>대표이사: 김기원</p>
          <p>사업자등록번호: 101-81-26409</p>
          <p>전화주문: 1600-5252</p>
          <p>COPYRIGHT &copy; 2019 ALL RIGHTS RESERVED BY McDonald's</p>
        </div>
        <div className='footer-right'>

        </div>
      </footer>
    
      
    </div>
  );
}

export default App;
