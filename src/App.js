import React, { useEffect, useState } from 'react';
import './App.css';



function Step({ num, content, isReached }) {
  const style = isReached ? "active" : ""
  return (
    <div className="step">
      <h2 className={style}>{num}本</h2>
      <h3 className={style}>{content}</h3>
      <div className={`target ${style}`}></div>
    </div>
  )
}


function Bar({ soldNum, start, end, halfWidth }) {
  let wrapperClass;
  if (halfWidth === true) {
    wrapperClass = "width50"
  } else {
    wrapperClass = "width100"
  }

  if (soldNum > start) {
    const barLength = Math.floor((soldNum - start) / (end - start) * 100)
    if (soldNum >= end) {
      return (
        <div className={`bar-wrapper ${wrapperClass}`}>
          <span className="bar-bg"></span>
          <span
            className="bar-completed"
            style={{ width: '100%' }}
          >
          </span>
        </div>
      )
    }
    return (
      <div className={`bar-wrapper ${wrapperClass}`}>
        <span className="bar-bg"></span>
        <span
          className="bar-completed"
          style={{ width: `${barLength}%` }}
        >
        </span>
      </div>
    )
  } else {
    return (
      <div className={`bar-wrapper ${wrapperClass}`}>
        <span className="bar-bg"></span>
      </div>
    )
  }
}


function useCountdown(targetDate) {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};


function getReturnValues(countDown) {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};


function CountdownTimer({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)
  const displayData = (data) => {
    let result = data
    if (data.toString().length < 2) {
      result = '0' + data
    }
    return result
  }
  return (
    <>
      <div className="time">
        <p>{displayData(days)}</p>
        <span className="count-label">DAYS</span>
      </div>
      <p className="time-colon">:</p>
      <div className="time">
        <p>{displayData(hours)}</p>
        <span className="count-label">HOURS</span>
      </div>
      <p className="time-colon">:</p>
      <div className="time">
        <p>{displayData(minutes)}</p>
        <p className="count-label">MINS</p>
      </div>
      <p className="time-colon">:</p>
      <div className="time">
        <p>{displayData(seconds)}</p>
        <span className="count-label">SECS</span>
      </div>
    </>
  );
};


function App() {
  const [soldNum, setSoldNum] = useState(0)
  const soldData = 15000
  const countdownData = (7 * 24 * 60 * 60 * 1000) - 1000;
  const dateTimeAfterCountdown = countdownData + new Date().getTime()

  if (soldNum - 40 <= soldData) {
    setTimeout(() => {
      if (soldNum < soldData - 1000) {
        setSoldNum(soldNum + Math.floor(Math.random() * 1000))
      } else if (soldNum < soldData - 400) {
        setSoldNum(soldNum + Math.floor(Math.random() * 150));
      } else if (soldNum < soldData - 40) {
        setSoldNum(soldNum + Math.floor(Math.random() * 30));
      } else if (soldNum < soldData - 15) {
        setSoldNum(soldNum + Math.floor(Math.random() * 7));
      } else if (soldNum < soldData) {
        setSoldNum(soldNum + 1);
        if (soldNum === soldData) return
      }
    }, 100);
  }

  const donateNum = Math.floor(soldNum / 50)



  return (
    <div className="App">

      {/* logo */}
      <div className="logo-container">
        <div className="logo-line" />
        <img src={require('./assets/images/logo_2023WC.png')} className="App-logo" alt="logo" />
        <div className="logo-line" />
      </div>

      {/* title */}
      <div className="title-container">
        <img src={require('./assets/images/img_calendar.png')} className="img-calendar" alt="calendar" />
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
          <div className="content" id="content">
            <h2>已售出</h2>
            <span className="sold-amount" id="clr-g">{soldNum}</span>
            <h2>本國際觀察曆</h2>
          </div>
          <div className="content">
            <h2>已公益捐贈</h2>
            <span className="sold-amount" id="clr-y">{donateNum}</span>
            <h2>本國際觀察曆</h2>
          </div>
        </div>
        <div class="desk-line"></div>

        {/* co-branding */}
        <div className="co-branding-wrapper">
          <div className="co-branding">
            <div className="co-branding-logo">
              <img src={require('./assets/images/logo_MWN.png')} className="MWN-logo" alt="logo" />
              <p className="co-branding">X</p>
              <img src={require('./assets/images/logo_JA.png')} className="JA-logo" alt="logo" />
            </div>
            <div className="co-branding-introduce">
              <h3>敏迪選讀™ 攜手 均一平台教育基金會 關注偏鄉失學的問題！每售出 50 本國際觀察曆，我們就捐出 1 本贈予偏鄉師生，一起點亮孩子的知識黑夜。</h3>
            </div>
          </div>
        </div>

        {/* show in large */}
        <div className="show-in-screen">
          <img src={require('./assets/images/img_universe.png')} className="img-uni" alt="logo" />
        </div>
      </div>
      <div className="line" id="none-in-desk"></div>

      {/* step */}
      <div className="step-container">
        <div className="step-wrapper">

          {/* <div className="step">
            <h2 id="active">10,000本</h2>
            <h3 id="active">解鎖 2 部經典電影 10,000 組 Giloo 體驗序號</h3>
            <div className="target active"></div>
          </div> */}
          <Step
            num={10000}
            content="解鎖 2 部經典電影 10,000 組 Giloo 體驗序號"
            isReached={soldNum >= 10000}
          />

          {/* <div className="step">
            <h2 id="active">15,000</h2>
            <h3 id="active">解鎖 4 部經典電影 15,000 組 Giloo 體驗序號</h3>
            <div className="target active"></div>
          </div> */}
          <Step
            num={15000}
            content="解鎖 4 部經典電影 15,000 組 Giloo 體驗序號"
            isReached={soldNum >= 15000}
          />

          {/* <div className="step">
            <h2 id="active">20,000本</h2>
            <h3 id="active">解鎖 6 部經典電影 20,000 組 Giloo 體驗序號</h3>
            <div className="target active"></div>
          </div> */}
          <Step
            num={20000}
            content="解鎖 6 部經典電影 20,000 組 Giloo 體驗序號"
            isReached={soldNum >= 20000}
          />
        </div>

        {/* progress bar */}
        <div className="bars-container">
          <Bar
            soldNum={soldNum}
            start={0}
            end={10000}
            halfWidth={true}
          />
          <Bar
            soldNum={soldNum}
            start={10000}
            end={15000}
            halfWidth={false}
          />
          <Bar
            soldNum={soldNum}
            start={15000}
            end={20000}
            halfWidth={false}
          />
          <Bar
            soldNum={soldNum}
            start={20000}
            end={30000}
            halfWidth={true}
          />
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
            <CountdownTimer targetDate={dateTimeAfterCountdown} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;