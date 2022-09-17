import React, { useEffect } from "react";
import { Visible } from './helper';
const MainSection = () => {
    useEffect(() => {
      jQueryMainSection()
    }, [])
    
    const jQueryMainSection = () => {

  let mainSection = document.querySelector('.mainSection');

  if(mainSection) {
    let man1 = mainSection.querySelector(".man-1 img");
    let man2 = mainSection.querySelector(".man-2 img");
    let man3 = mainSection.querySelector(".man-3 img");
    let man4 = mainSection.querySelector(".man-4 img");
    let man5 = mainSection.querySelector(".man-5 img");
    let man6 = mainSection.querySelector(".man-6 img");
    let lines = mainSection.querySelector(".bottom");
    

    window.addEventListener('scroll', function() {
      Visible (mainSection, parallax);
    });


    function parallax(noShow) {
      let value = window.scrollY;
      if(noShow) {
        return false
      } else {
        man1.style.bottom = value * .2 + 'px'
        man2.style.bottom = value * .3 + 'px'
        man3.style.bottom = value * .4 + 'px'
        man4.style.bottom = value * .4 + 'px'
        man5.style.bottom = value * .3 + 'px'
        man6.style.bottom = value * .2 + 'px'
        lines.style.top = -value * .5 + 'px'
        lines.style.marginBottom = -value * .3 + 'px'
        // mainSection.style.marginBottom = -value + 'px'
      }
    } 

    
    let timer = mainSection.querySelector('.timer')
    let timerHours = mainSection.querySelector('#hours')
    let timerMinutes = mainSection.querySelector('#minutes')
    let timerSeconds = mainSection.querySelector('#seconds')

    let timerData = timer.dataset.time
    let date = new Date(timerData);


    function counts() {
      let now = new Date();
      let gap = date - now;

      let dates = Math.floor(gap / 1000 / 60 / 60 / 24);
      let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(gap / 1000 / 60 ) % 60;
      let seconds = Math.floor(gap / 1000 ) % 60;

      if(dates > 0) {
        hours = hours + (dates * 24)
      }

      if(gap < 0) {
        timer.innerHTML = "end"
      } else {
        timerHours.innerHTML =  (hours < 10 ? "0" : "") + String(hours)
        timerMinutes.innerHTML = (minutes < 10 ? "0" : "") + String(minutes)
        timerSeconds.innerHTML = (seconds < 10 ? "0" : "") + String(seconds)
      }
      if(hours > 99) {
        timer.classList.add('smallTimer')
      } else{
        timer.classList.remove('smallTimer')
      }
    }

    counts()

    setInterval(counts, 1000)
  }

    }
     return (
        <section className="mainSection section" data-section="mainSection">
            <div className="wrapper" >
                <h1 className="title">
                    <span className="title-top">
                        <span className="left wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".5s">Cry</span>
                        <span className="rigth wow fadeInRight" data-wow-duration=".8s" data-wow-delay=".5s">pto</span>
                    </span>
                    <span className="title-bottom">
                        <span className="left wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".7s"><img src="img/main/mainSection/title-img-part1.svg" alt="" /></span>
                        <span className="rigth wow fadeInRight" data-wow-duration=".8s" data-wow-delay=".7s"><img src="img/main/mainSection/title-img-part2.svg" alt="" /></span>
                    </span>
                </h1>
                <div className="men">
                    <div className="man man-1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s"><img src="img/main/mainSection/man1.png" alt="" /></div>
                    <div className="man man-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s"><img src="img/main/mainSection/man2.png" alt="" /></div>
                    <div className="man man-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s"><img src="img/main/mainSection/man3.png" alt="" /></div>
                    <div className="man man-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s"><img src="img/main/mainSection/man4.png" alt="" /></div>
                    <div className="man man-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s"><img src="img/main/mainSection/man5.png" alt="" /></div>
                    <div className="man man-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s"><img src="img/main/mainSection/man6.png" alt="" /></div>
                </div>
                <div className="bottom">
                    <div className="block-timer wow fadeIn" data-wow-duration=".7s" data-wow-delay=".9s">
                        <h4 className="block-timer__title">Days till mint</h4>
                        <div className="timer" data-time="feb 5 2022 16:24:00">
                            <span id="hours"></span>:<span id="minutes"></span>:<span id="seconds"></span>
                        </div>
                    </div>
                    <div className="lines wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".5s"><img src="img/main/mainSection/lines.png" alt="" /></div>
                    <div className="socials">
                        <a href="https://discord.gg/cryptomonkz" rel="noreferrer" target="_blank" className="social wow fadeInLeft button" data-wow-duration=".7s" data-wow-delay=".9s"><img src="img/main/socials/discord.svg" alt="" /></a>
                        <a href="https://twitter.com/CryptoMonkzNFT" rel="noreferrer" target="_blank" className="social wow fadeInLeft button" data-wow-duration=".7s" data-wow-delay=".5s"><img src="img/main/socials/twitter.svg" alt="" /></a>
                        <a href="https://discord.gg/cryptomonkz" rel="noreferrer" target="_blank" className="social wow fadeInRight button" data-wow-duration=".7s" data-wow-delay=".5s"><img src="img/main/socials/instagram.svg" alt="" /></a>
                        <a href="https://www.tiktok.com/@cryptomonkznft" rel="noreferrer" target="_blank" className="social wow fadeInRight button" data-wow-duration=".7s" data-wow-delay=".9s"><img src="img/main/socials/tiktok.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="build wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s"><img src="img/main/mainSection/build.png" alt="" /></div>
        </section>
    )
}

export default MainSection;