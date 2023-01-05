import logo from './assets/images/logo_2023WC.png';
import img from './assets/images/img_calendar.png';
import logoMWN from './assets/images/logo_MWN.png';
import logoJA from './assets/images/logo_JA.png';
import './App.css';

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <div class="link"></div>
        <img src={logo} class="App-logo" alt="logo" />
        <div class="link"></div>
      </header>
      <body>
        <div class="img-container">
          <img src={img} class="img-calendar" alt="calendar" />
        </div>
        <div class="title">
          <h1>一天一曆</h1>
          <h1>給你<span class="title-marker">後疫情時代</span>的</h1>
          <h1>超強免疫曆</h1>
        </div>
        <div class="link-all"></div>
        <div class="content-container">
          <div class="content-wrapper">
            <div class="content" id="st">
              <h2>已售出<span class="sold-amount" id="clr-g">29,800</span>本國際觀察曆</h2>
            </div>
            <div class="content" id="nd">
              <h2>已公益捐贈<span class="sold-amount" id="clr-y">500</span>本國際觀察曆</h2>
            </div>
          </div>
          <div class="co-branding-wrapper">
            <div class="co-branding-logo">
              <img src={logoMWN} class="MWN-logo" alt="logo" />
              <p class="co-branding">X</p>
              <img src={logoJA} class="JA-logo" alt="logo" />
            </div>
            <div class="co-branding-introduce">
              <h3>敏迪選讀™ 攜手 均一平台教育基金會 關注偏鄉失學的問題！每售出 50 本國際觀察曆，我們就捐出 1 本贈予偏鄉師生，一起點亮孩子的知識黑夜。</h3>
            </div>
          </div>
        </div>
        <div class="link-all"></div>
        <div class="step-container">
          <div class="step-wrapper">
            <div class="step">
              <h2 id="active">10,000本</h2>
              <h3 id="active">解鎖 2 部經典電影 10,000 組 Giloo 體驗序號</h3>
            </div>
            <div class="step">
              <h2>15,000</h2>
              <h3>解鎖 4 部經典電影 15,000 組 Giloo 體驗序號</h3>
            </div>
            <div class="step">
              <h2>20,000本</h2>
              <h3>解鎖 6 部經典電影 20,000 組 Giloo 體驗序號</h3>
            </div>
          </div>
          <div class="step-progress-bar">
            {/* 進度條 */}
          </div>
        </div>
        <div class="slogan-container">
          <div class="slogan-wrapper">
            <div class="slogan" id="left">
              <p>Super<span class="slogan-label">超早鳥</span>Early Bird</p>
            </div>
            <div class="slogan" id="right">
              <h2 class="slogan-title">集資預購計畫倒數中</h2>
              <h3 class="slogan-introduce">現在預購 12 月前出貨，準時展開你的 2023 國際探索。</h3>
            </div>
          </div>
        </div>
        <div class="counter-container">
          <div class="counter-wrapper">
            <div class="counter">
              <p>06<span class="count-label">DAYS</span></p>
              <p class="time-colon">:</p>
              <p>23<span class="count-label">HOURS</span></p>
              <p class="time-colon">:</p>
              <p>59<span class="count-label">MINS</span></p>
              <p class="time-colon">:</p>
              <p>59<span class="count-label">SECS</span></p>
            </div>
          </div>
        </div>
      </body >
    </div >
  );
}

export default App;