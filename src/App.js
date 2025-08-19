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
    </div>
  );
}

export default App;
