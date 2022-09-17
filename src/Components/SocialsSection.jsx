import React from "react";

const SocialsSection = () => {
    return (
        <section className="socialsSection section">
            <div className="wrapper">
                <h4 className="subtitle wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".3s">socials</h4>
                <h2 className="title wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".5s">follow <br /> crypto monkz</h2>
                <div className="socials">
                    <a href="https://discord.gg/cryptomonkz" target="_tablet" className="social button wow fadeInLeft" data-wow-duration=".7s" data-wow-delay=".7s">
                        <img src="img/main/socials/discord.svg" alt="" />
                    </a>
                    <a href="https://twitter.com/CryptoMonkzNFT" target="_tablet" className="social button wow fadeInLeft" data-wow-duration=".7s" data-wow-delay=".5s">
                        <img src="img/main/socials/twitter.svg" alt="" />
                    </a>
                    <a href="https://www.instagram.com/cryptomonkznft/" target="_tablet" className="social button wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".3s">
                        <img src="img/main/socials/instagram.svg" alt="" />
                    </a>
                    <a href="https://www.tiktok.com/@cryptomonkznft" target="_tablet" className="social button wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".5s">
                        <img src="img/main/socials/tiktok.svg" alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SocialsSection;