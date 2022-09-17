import React, { useEffect } from "react";
import { Visible, typeText } from './helper';
const AboutSection = () => {
    useEffect(() => {
        jQueryAboutSection()
      }, []);
      
      const jQueryAboutSection = () => {
        let aboutSection = document.querySelector('.aboutSection')

        if(aboutSection) {
      
          const aboutTexts = [
            'Crypto Monkz is a collection of 3,333 metaverse warriors. A sworn collective vowed to seek opportunities on the Ethereum blockchain and battle for control.',
            '<br> <br> Your Crypto Monkz grants you access to members-only benefits, the first of which is access to our Alpha Discord composed of some of the smartest minds in the space and a combined total of over $30mm in NFT Sales.'
          ]
      
          let htmlOut = aboutSection.querySelector('.block-text');
          let avatars = aboutSection.querySelector('.avatars');
      
          let avatar1 = aboutSection.querySelector(".avatar-1");
          let avatar2 = aboutSection.querySelector(".avatar-2");
          let avatar3 = aboutSection.querySelector(".avatar-3");
          let avatar4 = aboutSection.querySelector(".avatar-4");
          let avatar5 = aboutSection.querySelector(".avatar-5");
          let avatar6 = aboutSection.querySelector(".avatar-6");
      
          function avatarsParallax(noShow) {
            let value = window.scrollY;
            if(noShow) {
              return false
            } else {
              avatar1.style.left = value * 0 + 'px'
              avatar2.style.left = value * .05 + 'px'
              avatar3.style.left = value * .12 + 'px'
              avatar4.style.left = value * .2 + 'px'
              avatar5.style.left = value * .28 + 'px'
              avatar6.style.left = value * .38 + 'px'
            }
          } 
      
          // function visibleAvatars() {
          //   // avatars.classList.add('animated');
            
          // }
      
          // window.addEventListener("scroll", avatarsParallax);
         
          let numberBlock = aboutSection.querySelector('.number');
      
          if(numberBlock) {
            let numbers = numberBlock.querySelectorAll('.num');
            let numberOrder = 0
            let step = 1
            let i = 0
      
            function outNum(num, elem) {
                let interval = setInterval(() => {
                  i = i + step;
                  elem.innerHTML = i
                  if(i == num || i > num) {
                    clearInterval(interval);
                    i = 0;
                    return true
                  }
                }, 200);
              }
      
            let numberIntervalTime = 600
      
            function showNumbers() {
              numberBlock.classList.add('animated');
              let intervalNumber = setInterval(() => {
                outNum(3, numbers[numberOrder])
                if(numbers[numberOrder].classList.contains('noNum')) {
                  numbers[numberOrder].classList.add('comma');
                } 
                numberOrder++;
                if(numberOrder >=  numbers.length) {
                  clearInterval(intervalNumber);
                  return true
                }
              }, numberIntervalTime)
            }
      
            
            window.addEventListener('scroll', function() {
              if(numberBlock.classList.contains('animated') == false) {
                Visible (numberBlock, showNumbers);
              }
            });
      
          }
      
          window.addEventListener('scroll', function() {
            if(htmlOut.classList.contains('animated') == false) {
              Visible (htmlOut, typeText, aboutTexts);
            }
            if(avatars.classList.contains('animated') == false) {
              Visible (avatars, avatarsParallax);
            }
          });
      
        }
        }
    return (
        <section className="aboutSection section" data-section="aboutSection">
            <div className="wrapper">
                <h4 className="subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay=".3s">About</h4>
                <h2 className="title">
                    <span className="wow fadeIn" data-wow-duration=".7s" data-wow-delay=".5s">Crypto</span> <br />
                    <span className="wow fadeIn" data-wow-duration=".7s" data-wow-delay=".7s">monkz</span> <br /> 
                    <span className="wow fadeIn" data-wow-duration=".7s" data-wow-delay=".9s">collection</span>
                </h2>
                <div className="content">
                    <div className="block-infos">
                        <div className="block-info">
                            <h3 className="block-title wow fadeIn" data-wow-duration=".7s" data-wow-delay=".3s">0.08</h3>
                            <p className="block-subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay=".5s">ETH</p>
                        </div>
                        <div className="block-info">
                            <h3 className="block-title wow fadeIn" data-wow-duration=".7s" data-wow-delay=".3s">150</h3>
                            <p className="block-subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay=".5s">traits</p>
                        </div>
                    </div>
                    <div className="block-texts">
                        <p className="block-text"></p>
                    </div>
                </div>
                <div className="number">
                    <span className="num">0</span>
                    <span className="num noNum"></span>
                    <span className="num"></span>
                    <span className="num"></span>
                </div>
                <div className="bottom">
                    <p className="wow fadeInLeft" data-wow-duration=".7s" data-wow-delay=".3s">total supply of unique monkz</p>
                    <div className="avatars wow fadeIn" data-wow-duration=".7s" data-wow-delay=".3s">
                        <div className="avatar avatar-1"><img src="img/main/about/avatar1.png" alt="" /></div>
                        <div className="avatar avatar-2"><img src="img/main/about/avatar2.png" alt="" /></div>
                        <div className="avatar avatar-3"><img src="img/main/about/avatar3.png" alt="" /></div>
                        <div className="avatar avatar-4"><img src="img/main/about/avatar4.png" alt="" /></div>
                        <div className="avatar avatar-5"><img src="img/main/about/avatar5.png" alt="" /></div>
                        <div className="avatar avatar-6"><img src="img/main/about/avatar6.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;