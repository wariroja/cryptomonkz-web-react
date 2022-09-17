import React from "react";

const AboutSection = () => {
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

export default AboutSection;