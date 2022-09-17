import React, { useEffect } from 'react';
import WOW from 'wowjs';

function Header() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
      },[]);
  return (
    <header className="header">
        <div className="wrapper">
            <div className="header-content wow fadeIn" data-wow-duration=".7s" data-wow-delay=".3s">
                <img src="img/main/logo.png" alt="" / >
                <ul className="header-list">
                    <li className="header-list__item button" data-section="aboutSection">
                            <span className="square square-1-1"></span>
                            <span className="square square-1-2"></span>
                            <span className="square square-1-3"></span>
                            <span className="square square-2-1"></span>
                            <span className="square square-2-2"></span>
                            <span className="square square-2-3"></span>
                            <span className="square square-3-1"></span>
                            <span className="square square-3-2"></span>
                            <span className="square square-3-3"></span>
                            <span className="square square-4-1"></span>
                            <span className="square square-4-2"></span>
                            <span className="square square-4-3"></span>
                            About
                    </li>
                    <li className="header-list__item button" data-section="specsSection">
                            <span className="square square-1-1"></span>
                            <span className="square square-1-2"></span>
                            <span className="square square-1-3"></span>
                            <span className="square square-2-1"></span>
                            <span className="square square-2-2"></span>
                            <span className="square square-2-3"></span>
                            <span className="square square-3-1"></span>
                            <span className="square square-3-2"></span>
                            <span className="square square-3-3"></span>
                            <span className="square square-4-1"></span>
                            <span className="square square-4-2"></span>
                            <span className="square square-4-3"></span>
                            Specs
                    </li>
                    <li className="header-list__item button manifestoItemMenu" data-section="manifestoSection">
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Manifesto
                </li>
                    <li className="header-list__item button" data-section="ascension">
                        <span className="square square-1-1"></span>
                        <span className="square square-1-2"></span>
                        <span className="square square-1-3"></span>
                        <span className="square square-2-1"></span>
                        <span className="square square-2-2"></span>
                        <span className="square square-2-3"></span>
                        <span className="square square-3-1"></span>
                        <span className="square square-3-2"></span>
                        <span className="square square-3-3"></span>
                        <span className="square square-4-1"></span>
                        <span className="square square-4-2"></span>
                        <span className="square square-4-3"></span>
                        Ascension
                    </li>
                
                    <li className="header-list__item button" data-section="team">
                            <span className="square square-1-1"></span>
                            <span className="square square-1-2"></span>
                            <span className="square square-1-3"></span>
                            <span className="square square-2-1"></span>
                            <span className="square square-2-2"></span>
                            <span className="square square-2-3"></span>
                            <span className="square square-3-1"></span>
                            <span className="square square-3-2"></span>
                            <span className="square square-3-3"></span>
                            <span className="square square-4-1"></span>
                            <span className="square square-4-2"></span>
                            <span className="square square-4-3"></span>
                            Team
                    </li>
                    <li className="header-list__item button" data-section="roadmap">
                            <span className="square square-1-1"></span>
                            <span className="square square-1-2"></span>
                            <span className="square square-1-3"></span>
                            <span className="square square-2-1"></span>
                            <span className="square square-2-2"></span>
                            <span className="square square-2-3"></span>
                            <span className="square square-3-1"></span>
                            <span className="square square-3-2"></span>
                            <span className="square square-3-3"></span>
                            <span className="square square-4-1"></span>
                            <span className="square square-4-2"></span>
                            <span className="square square-4-3"></span>
                            Roadmap
                    </li>
                </ul>
                <div className="header-button__menu">
                    <div className="header-line header-line1"></div>
                    <div className="header-line header-line2"></div>
                    <div className="header-line header-line3"></div>
                </div>
                <div className="header-mobile__menu">
                    <div className="header-mobile__block">
                        <ul className="header-list">
                            <li className="header-list__item button closeMenu" data-section="aboutSection">
                                    <span className="square square-1-1"></span>
                                    <span className="square square-1-2"></span>
                                    <span className="square square-1-3"></span>
                                    <span className="square square-2-1"></span>
                                    <span className="square square-2-2"></span>
                                    <span className="square square-2-3"></span>
                                    <span className="square square-3-1"></span>
                                    <span className="square square-3-2"></span>
                                    <span className="square square-3-3"></span>
                                    <span className="square square-4-1"></span>
                                    <span className="square square-4-2"></span>
                                    <span className="square square-4-3"></span>
                                    About
                            </li>
                            <li className="header-list__item button closeMenu" data-section="specsSection">
                                    <span className="square square-1-1"></span>
                                    <span className="square square-1-2"></span>
                                    <span className="square square-1-3"></span>
                                    <span className="square square-2-1"></span>
                                    <span className="square square-2-2"></span>
                                    <span className="square square-2-3"></span>
                                    <span className="square square-3-1"></span>
                                    <span className="square square-3-2"></span>
                                    <span className="square square-3-3"></span>
                                    <span className="square square-4-1"></span>
                                    <span className="square square-4-2"></span>
                                    <span className="square square-4-3"></span>
                                    Specs
                            </li>
                            <li className="header-list__item button closeMenu" data-section="manifestoSection">
                                <span className="square square-1-1"></span>
                                <span className="square square-1-2"></span>
                                <span className="square square-1-3"></span>
                                <span className="square square-2-1"></span>
                                <span className="square square-2-2"></span>
                                <span className="square square-2-3"></span>
                                <span className="square square-3-1"></span>
                                <span className="square square-3-2"></span>
                                <span className="square square-3-3"></span>
                                <span className="square square-4-1"></span>
                                <span className="square square-4-2"></span>
                                <span className="square square-4-3"></span>
                                Manifesto
                            </li>
                            <li className="header-list__item button closeMenu" data-section="ascension">
                                <span className="square square-1-1"></span>
                                <span className="square square-1-2"></span>
                                <span className="square square-1-3"></span>
                                <span className="square square-2-1"></span>
                                <span className="square square-2-2"></span>
                                <span className="square square-2-3"></span>
                                <span className="square square-3-1"></span>
                                <span className="square square-3-2"></span>
                                <span className="square square-3-3"></span>
                                <span className="square square-4-1"></span>
                                <span className="square square-4-2"></span>
                                <span className="square square-4-3"></span>
                                Ascension
                            </li>
                            <li className="header-list__item button closeMenu" data-section="team">
                                    <span className="square square-1-1"></span>
                                    <span className="square square-1-2"></span>
                                    <span className="square square-1-3"></span>
                                    <span className="square square-2-1"></span>
                                    <span className="square square-2-2"></span>
                                    <span className="square square-2-3"></span>
                                    <span className="square square-3-1"></span>
                                    <span className="square square-3-2"></span>
                                    <span className="square square-3-3"></span>
                                    <span className="square square-4-1"></span>
                                    <span className="square square-4-2"></span>
                                    <span className="square square-4-3"></span>
                                    Team
                            </li>
                            <li className="header-list__item button closeMenu" data-section="roadmap">
                                    <span className="square square-1-1"></span>
                                    <span className="square square-1-2"></span>
                                    <span className="square square-1-3"></span>
                                    <span className="square square-2-1"></span>
                                    <span className="square square-2-2"></span>
                                    <span className="square square-2-3"></span>
                                    <span className="square square-3-1"></span>
                                    <span className="square square-3-2"></span>
                                    <span className="square square-3-3"></span>
                                    <span className="square square-4-1"></span>
                                    <span className="square square-4-2"></span>
                                    <span className="square square-4-3"></span>
                                    Roadmap
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
