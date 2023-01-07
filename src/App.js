import logo from './assets/images/logo_2023WC.png';
import img from './assets/images/img_calendar.png';
import logoMWN from './assets/images/logo_MWN.png';
import logoJA from './assets/images/logo_JA.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* logo */}
      <div className="logo-container">
        <div className="logo-line" />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="logo-line" />
      </div>
      {/* title */}
      <div className="title-container">
        <img src={img} className="img-calendar" alt="calendar" />
        <div className="title">
          <h1>一天一曆</h1>
          <h1>給你<span className="title-marker">後疫情時代</span>的</h1>
          <h1>超強免疫曆</h1>
        </div>
      </div>
      {/* show in desk */}
      <div className="show-in-desk">
        <div className="map-calendar-wrapper">
          <img src={require('./assets/images/img_map.png')} className="img-map" alt="logo" />
          <div className="calendar-text" id="show-desk">CALENDAR</div>
          <div className="line"></div>
        </div>
      </div>
      <div className="line" id="none-in-desk"></div>
      {/* content */}
      <div className="content-container">
        <div className="content-wrapper">
          <div className="content" id="st">
            <h2>已售出<span className="sold-amount" id="clr-g">29,800</span>本國際觀察曆</h2>
          </div>
          <div className="content" id="nd">
            <h2>已公益捐贈<span className="sold-amount" id="clr-y">500</span>本國際觀察曆</h2>
          </div>
        </div>
        <div class="desk-line"></div>
        {/* co-branding */}
        <div className="co-branding-wrapper">
          <div className="co-branding-logo">
            <img src={logoMWN} className="MWN-logo" alt="logo" />
            <p className="co-branding">X</p>
            <img src={logoJA} className="JA-logo" alt="logo" />
          </div>
          <div className="co-branding-introduce">
            <h3>敏迪選讀™ 攜手 均一平台教育基金會 關注偏鄉失學的問題！每售出 50 本國際觀察曆，我們就捐出 1 本贈予偏鄉師生，一起點亮孩子的知識黑夜。</h3>
          </div>
        </div>
        {/* show in desk */}
        <div className="show-in-desk">
          <img src={require('./assets/images/img_universe.png')} className="img-uni" alt="logo" />
        </div>
      </div>
      <div className="line" id="none-in-desk"></div>
      {/* step */}
      <div className="step-container">
        <div className="step-wrapper">
          <div className="step">
            <h2 id="active">10,000本</h2>
            <h3 id="active">解鎖 2 部經典電影 10,000 組 Giloo 體驗序號</h3>
            <div className="target active"></div>
          </div>
          <div className="step">
            <h2>15,000</h2>
            <h3>解鎖 4 部經典電影 15,000 組 Giloo 體驗序號</h3>
            <div className="target"></div>
          </div>
          <div className="step">
            <h2>20,000本</h2>
            <h3>解鎖 6 部經典電影 20,000 組 Giloo 體驗序號</h3>
            <div className="target"></div>
          </div>
        </div>
        {/* progress */}
        <div className="progress-container">
          <div className="progress" id="progress"></div>
        </div>
      </div>
      {/* slogan & counter */}
      <div className="slogan-counter-container">
        {/* slogan */}
        <div className="slogan-container">
          <div className="slogan-wrapper">
            <div className="slogan" id="left">
              <p>Super<span className="slogan-label">超早鳥</span>Early Bird</p>
            </div>
            <div className="slogan" id="right">
              <h2 className="slogan-title">集資預購計畫倒數中</h2>
              <h3 className="slogan-introduce">現在預購 12 月前出貨，準時展開你的 2023 國際探索。</h3>
            </div>
          </div>
        </div>
        {/* counter */}
        <div className="counter-container">
          <div className="counter">
            <p>06<span className="count-label">DAYS</span></p>
            <p className="time-colon">:</p>
            <p>23<span className="count-label">HOURS</span></p>
            <p className="time-colon">:</p>
            <p>59<span className="count-label">MINS</span></p>
            <p className="time-colon">:</p>
            <p>59<span className="count-label">SECS</span></p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;