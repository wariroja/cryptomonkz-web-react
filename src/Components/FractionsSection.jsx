import React, { useEffect } from "react";
import $ from 'jquery'
import Swiper from 'swiper';

const FractionsSection = () => {
    useEffect(() => {
        jqueryFractions()
    }, [])
    const jqueryFractions = () => {
        const fractions = document.querySelector('.fractions')
const fractionsBottomSlides = document.querySelectorAll('.fractions-swiperBottom .swiper-slide');
const fractionsTopSlides = document.querySelectorAll('.fractions-swiperTop .swiper-slide');
 
  if(fractions) {
    let fractionsSwiper = new Swiper(".fractionsSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      allowTouchMove: false,
    });
    let fractionsSwiper2 = new Swiper(".fractionsSwiper2", {
      spaceBetween: 0,
      speed: 800,
      direction: "vertical",
      allowTouchMove: false,
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 1,
        }
      }
    });
  
    fractionsSwiper2.slideTo(2,0);

    let fractionsElements = document.querySelectorAll('.fractions-el')

    window.addEventListener('scroll', function() {
      let offset = fractions.getBoundingClientRect();
      let windowWidth = window.innerWidth;

      if (offset.top < 0 && offset.bottom - window.innerHeight > 0 && windowWidth > 767) {
        let perc = Math.round(100 * Math.abs(offset.top) / (offset.height - window.innerHeight));
        if (perc > 10 && perc < 30 ) {
            fractionsSwiper.slideTo(0, 1000);
            fractionsSwiper2.slideTo(2, 1000);
        } else if (perc > 30 && perc < 55 ) {
            fractionsSwiper.slideTo(1, 1000);
            fractionsSwiper2.slideTo(1, 1000);
        } else if (perc > 70 ) {
            fractionsSwiper.slideTo(2, 1000);
            fractionsSwiper2.slideTo(0, 1000);
        }
      }
    });
  
    fractionsBottomSlides.forEach((s) => {
      new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let windowWidth = window.innerWidth;
            if(windowWidth < 768) {
              const { slide } = s.dataset;
              fractionsSwiper.slideTo(slide, 1000);
            }
          }
        },
        {
          threshold: .5,
          // rootMargin: '100px',
        }
      ).observe(s);
    })
    
    for(let i = 0; i < fractionsTopSlides.length;  i++) {
      fractionsTopSlides[i].addEventListener('click', () => {
        $('html, body').stop().animate({
          scrollTop: $(fractionsElements[i]).offset().top
        }, {
          duration: 1000,  
          easing: "linear" 
        });
      })
    }

  }
    }
    return (
        <section className="fractionsSection section"> 
            <div className="wrapper">
                <div className="fractions">
                    <div className="fractions-el fractions-el1"></div>
                    <div className="fractions-el fractions-el2"></div>
                    <div className="fractions-el fractions-el3"></div>
                    <h2 className="title wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".3s">Factions</h2>
                    <div className="fractions-swiper">
                        <div className="content">
                            <div className="fractions-top ">
                                <div className="fractions-line"></div>
                                <div className="fractions-swiperTop wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".5s">
                                    <div className="swiper fractionsSwiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <h2 className="button">daiko</h2>
                                            </div>
                                            <div className="swiper-slide">
                                                <h2 className="button">ShuHaRi</h2>
                                            </div>
                                            <div className="swiper-slide swiper-slide-3">
                                                <h2 className="button">Sohei</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fractions-line"></div>
                            </div>
                            <div className="fractions-swiperBottom">
                                <div thumbsslider="" className="swiper fractionsSwiper2  wow fadeInDown" data-wow-duration=".7s" data-wow-delay=".5s">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" data-slide="0">
                                            <div className="slide-content">
                                                <div className="slide-img"><img src="img/main/fractions/img1.png" alt="" /></div>
                                                <div className="slide-blocks">
                                                    <div className="slide-block">
                                                        <h4 className="slide-subtitle">// Description</h4>
                                                        <p className="slide-text">Daiko is short for Daikokuten; the Japanese deity of fortune and wealth, the legacy of Daiko is embraced by the members of the faction. 
                                                            <br /><br />
                                                            The Daiko are a spiritual className of warriors who are empowered by the belief that fortune favors the prepared and eludes the unprepared.
                                                            <br /><br />
                                                            The Daiko warriors have learned to never embrace defeat and to find a way to bring the pleasures of the mind into existence.</p>
                                                    </div>
                                                    <div className="slide-block">
                                                        <h4 className="slide-subtitle">// Mission Statement</h4>
                                                        <p className="slide-text">Perception is 9/10th of everything. How you are perceived is how you are judged. Old keys won’t open new doors. Break free from the resistance and embrace the future.</p>
                                                        <h4 className="slide-subtitle">// Skills</h4>
                                                        <p className="slide-text">Branding, Marketing, Business, Sales, Vision, Sponsorships, Collaborations, Merchandising, Training, Motivation</p>
                                                        <h4 className="slide-subtitle">// Corporations</h4>
                                                        <p className="slide-text">Branding, Merchants</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-slide="1">
                                            <div className="slide-content">
                                                <div className="slide-img"><img src="img/main/fractions/img2.png" alt="" /></div>
                                                <div className="slide-blocks">
                                                    <div className="slide-block">
                                                        <h4 className="slide-subtitle">// Description</h4>
                                                        <p className="slide-text">The ShuHaRi are an excessively disciplined faction of warriors that are under a constant state of improvement.
                                                            <br /><br />
                                                            The ShuHaRi believe in a cult-like mental state seeking mastery and absolute power. Little is known about the history of the ShuHaRi as they tend to operate in the shadows.
                                                            <br /><br />
                                                            The ShuHari are a terrifying yet effective className of monks who have an idolization of survival through ruthless aggression. </p>
                                                    </div>
                                                    <div className="slide-block">
                                                        <h4 className="slide-subtitle">// Mission Statement</h4>
                                                        <p className="slide-text">We are ShuHaRi</p>
                                                        <h4 className="slide-subtitle">// Skills</h4>
                                                        <p className="slide-text">Trade, Analytics, Engineering, Strategy, Minting, Banking, Hacking, Education</p>
                                                        <h4 className="slide-subtitle">// Corporations</h4>
                                                        <p className="slide-text">Treasure, Factory</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-slide="2">
                                            <div className="slide-content">
                                                <div className="slide-img"><img src="img/main/fractions/img3.png" alt="" /></div>
                                                <div className="slide-blocks">
                                                    <div className="slide-block">
                                                        <h4 className="slide-subtitle">// Description</h4>
                                                        <p className="slide-text">Warriors directly descended from a history of power and influence, the Sohei utilize political influence and immense spiritual authority to control the members of their faction. 
                                                            <br /><br />
                                                            The Shohei are an influential className of warriors who believe that power is forged in the masses.</p>
                                                    </div>
                                                    <div className="slide-block">
                                                        <h4 className="slide-subtitle">// Mission Statement</h4>
                                                        <p className="slide-text">To connect web3 enthusiasts and help them be more profitable with NFTs and liquidity pools leveraging exclusive alpha and on chain data.</p>
                                                        <h4 className="slide-subtitle">// Skills</h4>
                                                        <p className="slide-text">Strategic Alliances, Community, Collaborations, Administration, Advertising</p>
                                                        <h4 className="slide-subtitle">// Corporations</h4>
                                                        <p className="slide-text">Access, Marketing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FractionsSection;