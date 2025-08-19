import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='left-header'>
          <img src='https://www.mcdonalds.co.kr/kor/images/common/logo.png'/>
        </div>
        <div className="main-header">
          <p className='header-bar'>Menu</p>
          <p className='header-bar'>Store</p>
          <p className='header-bar'>What's New</p>
          <p className='header-bar'>Story</p>
        </div>
        <div className='right-header'>
          <div className='header-button'>
            <p className='header-button'>임차문의</p>
            <p className='header-button'>RECRUIT</p>
            <p className='header-button'>ENG</p>
          </div>
        </div>
        <div className='header-search'>
          <img src='/search.png'/>
        </div>
      </header>
    </div>
  );
}

export default App;
