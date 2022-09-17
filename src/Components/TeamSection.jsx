import React, { useEffect } from "react";
import Swiper from 'swiper'
const TeamSection = () => {
    useEffect(() => {
        jQueryTeamSection()
      }, [])
      
      const jQueryTeamSection = () => {
        const teamSection = document.querySelector('.teamSection')
        const mouseCursor = document.querySelector('.cursor');

        if(teamSection) {
          let swiperTeamPreview = new Swiper(".teamPreviewSlider .swiper", {
            spaceBetween: 30,
            slidesPerView: 9,
            freeMode: true,
            watchSlidesProgress: true,
            shortSwipes: false,
            longSwipes: false,
            
            breakpoints: {
              320: {
                slidesPerView: 4
              },
              481: {
                slidesPerView: 6
              },
              769: {
                slidesPerView: 9
              }
            }
          });
          let swiperTeam = new Swiper(".teamSwiper .swiper", {
            spaceBetween: 105,
            loop: true,
            navigation: {
              nextEl: ".teamSwiper-button-next",
              prevEl: ".teamSwiper-button-prev",
            },
            thumbs: {
              swiper: swiperTeamPreview,
            },
            breakpoints: {
              320: {
                spaceBetween: 50
              },
              999: {
                spaceBetween: 70
              }
            }
          });
        
          const teamPreviewSlides = document.querySelectorAll('.teamPreviewSlider .swiper-slide')
        
          for(let teamPreviewSlide of teamPreviewSlides) {
            teamPreviewSlide.addEventListener('mouseenter', () => {
              mouseCursor.classList.add('hover')
            })
            teamPreviewSlide.addEventListener('mouseleave', () => {
              mouseCursor.classList.remove('hover')
            })
          }
        
        }
      
      }
    return (
        <section className="teamSection section" data-section="team">
            <div className="wrapper">
                <div className="top">
                    <h4 className="subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay=".5s">team</h4>
                    <h2 className="title wow fadeIn" data-wow-duration=".7s" data-wow-delay=".7s">MONKz <br />creators</h2>
                    <div className="teamSwiper-navigation wow fadeIn" data-wow-duration=".7s" data-wow-delay=".5s">
                        <div className="teamSwiper-button-prev teamSwiper-button button">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="square-1 square" width="12" height="12" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 24 43.4264)" fill="#DD4040"/>
                                <rect className="square-2 square" width="12" height="12" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11.2721 30.6985)" fill="#DD4040"/>
                                <rect className="square-3 square" width="12" height="12" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 24 17.9706)" fill="#DD4040"/>
                            </svg>
                        </div>
                        <div className="teamSwiper-button-next teamSwiper-button button">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="square-1 square" x="21" y="43.4264" width="12" height="12" transform="rotate(-135 21 43.4264)" fill="#DD4040"/>
                                <rect className="square-2 square" x="33.7279" y="30.6985" width="12" height="12" transform="rotate(-135 33.7279 30.6985)" fill="#DD4040"/>
                                <rect className="square-3 square" x="21" y="17.9706" width="12" height="12" transform="rotate(-135 21 17.9706)" fill="#DD4040"/>
                            </svg>
                        </div>
                    </div>
                </div>
            
                <div className="teamSwiper wow fadeInLeft" data-wow-duration=".7s" data-wow-delay=".5s">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="team-slide">
                                    <div className="team-left">
                                        <p className="team-text">
                                            Joshua specializes in building online brands. 
                                            <br /><br />
                                            He’s the founder of Canvas Cultures, a print on demand company for artists that has sold over $35 million in delivered art the last four years.
                                        </p>
                                        <h4 className="team-info">
                                            <span>Joshua Tatum </span><span className="orange">// Co-Founder</span>
                                        </h4>
                                    </div>
                                    <div className="team-img"><img src="img/main/teamSection/img1.png" alt="" /></div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="team-slide">
                                    <div className="team-left">
                                        <p className="team-text">
                                            Patrick is a leading high frequency fund & on chain strategist who’s data science work has been featured at the World Economic Forum in Davos. <br /><br /> Previously, Patrick built the world's largest social analytics platform and is currently VP of a company with over $4.5B in revenue
                                        </p>
                                        <h4 className="team-info">
                                            <span>Patrick Gorrell</span>  <span className="orange">// Co-Founder</span>
                                        </h4>
                                    </div>
                                    <div className="team-img"><img src="img/main/teamSection/img4.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="team-slide">
                                    <div className="team-left">
                                        <p className="team-text">
                                            Jang specializes in Affiliate Marketing. <br /><br /> His last company he built out the front end marketing system for an affiliate offer that was responsible for over $100MM in Sales.
                                        </p>
                                        <h4 className="team-info">
                                            <span>Mathieu Jang</span> <span className="orange">// Co-Founder</span>
                                        </h4>
                                    </div>
                                    <div className="team-img"><img src="img/main/teamSection/img2.png" alt="" /></div>
                                </div>
                            </div>
                        
                            <div className="swiper-slide">
                                <div className="team-slide">
                                    <div className="team-left">
                                        <p className="team-text">
                                            Malachi  also known as is a 19 year old visual artist known for his unique and creative take on pop culture. <br /><br /> His works have been featured on ESPN and Complex Magazine and can be found in the homes of many celebrities.
                                        </p>
                                        <h4 className="team-info">
                                            <span>Malachi Wright</span> <span className="orange">// Partnered Artist </span>
                                        </h4>
                                    </div>
                                    <div className="team-img"><img src="img/main/teamSection/img3.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teamPreviewSlider wow fadeInLeft" data-wow-duration=".7s" data-wow-delay=".7s">
                    <div thumbsslider="" className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="img/main/teamSection/img1.png" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="img/main/teamSection/img4.png" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="img/main/teamSection/img2.png" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="img/main/teamSection/img3.png" alt="" />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;