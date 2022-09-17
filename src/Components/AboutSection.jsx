import React from "react";

const AboutSection = () => {
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