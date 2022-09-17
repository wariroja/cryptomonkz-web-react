import React, { useEffect } from "react";
import $ from 'jquery'
import { Visible } from './helper';
import  'jquery.marquee';
const SpecsSection = () => {
    useEffect(() => {
        jQuerySpecsSection()
      }, [])
    
    const jQuerySpecsSection = () => {
        let specs = document.querySelector('.specsSection')

        if(specs) {
      
          let specsBlockText = specs.querySelector('.specs-text');
      
          $('.str-1').marquee({
            loop: true,
            direction: 'left',
            pauseOnHover: false,
          });
      
          $('.str-2').marquee({
            loop: true,
            direction: 'right',
            pauseOnHover: false,
          });
      
          const advantagesContain = specs.querySelector('.advantages')
          const advantagesBlocks = specs.querySelectorAll('.advantages-block')
      
          for(let advantagesBlock of advantagesBlocks) {
            advantagesBlock.addEventListener('click', () => {
              for(let block of advantagesBlocks) {
                block.classList.remove('active')
              }
              advantagesBlock.classList.add('active')
            })
          }
      
          function advantagesContainAnimated() {
            advantagesContain.classList.add('animated');
          }
      
          window.addEventListener('scroll', function() {
        
            if(advantagesContain.classList.contains('animated') == false) {
              Visible (advantagesContain, advantagesContainAnimated);
            }
      
          });
      
        }
    }
    return (
        <section className="specsSection section" data-section="specsSection">
            <div className="wrapper">
                <h2 className="title wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".5s">Monkz Specs</h2>

                <h4 className="block-subtitle wow fadeIn" data-wow-duration=".7s" data-wow-delay=".7s">// Unique NFT Monkz</h4>
                <p className="text specs-text wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".7s">Each Crypto Monkz is a distinctive and programmatically generated NFT with over 150 current traits including weapons, expressions, clothing and more. All monks possess incredible features but some are rarer than others.
                    <br /><br />
                    Monks are stored as ERC-1155 tokens on the Ethereum blockchain and hosted on 100% onchain.</p>
            </div>
            <div className="photosBlock">
                <div className="str-1 str_wrap">&nbsp;
                    <div className="photo"><img src="img/main/specs/img1.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img3.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img4.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img5.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img25.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img6.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img7.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img8.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img9.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img10.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img23.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img11.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img12.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img13.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img14.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img15.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img16.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img17.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img22.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img18.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img19.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img20.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img21.png" alt="" /></div>
                </div>
                <div className="str-2 str_wrap">&nbsp;
                    <div className="photo"><img src="img/main/specs/img10.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img14.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img15.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img9.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img16.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img20.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img12.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img17.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img4.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img21.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img22.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img7.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img23.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img1.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img3.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img24.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img5.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img6.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img11.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img18.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img13.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img17.png" alt="" /></div>
                    <div className="photo"><img src="img/main/specs/img8.png" alt="" /></div>

                </div>
            </div>
            <div className="wrapper">
                <div className="advantages">
                    <div className="advantages-block active button">
                        <div className="advantages-top">
                            <div className="advantages-icon"><img src="img/main/specs/advantages/icon1.png" alt="" /></div>
                            <div className="advantages-title">// <span>Enlightened Alpha</span></div>
                        </div>
                        <p className="advantages-text">High level alpha group with some of the biggest market movers and influencers in the space. </p>
                        <div className="advantages-line"></div>
                    </div>
                    <div className="advantages-block button">
                        <div className="advantages-top">
                            <div className="advantages-icon"><img src="img/main/specs/advantages/icon2.png" alt="" /></div>
                            <div className="advantages-title">// <span>Feudalistic DAO</span></div>
                        </div>
                        <p className="advantages-text">First-ever Feudalistic Dao where we battle for control. The process of feudalistic gamified on-chain combat style election is known as Ascension.</p>
                        <div className="advantages-line"></div>
                    </div>
                    <div className="advantages-block button">
                        <div className="advantages-top">
                            <div className="advantages-icon"><img src="img/main/specs/advantages/icon3.png" alt="" /></div>
                            <div className="advantages-title">// <span>iNCLUDED CONTRACTS</span></div>
                        </div>
                        <p className="advantages-text">Extensible contracts that include other NFT projects</p>
                        <div className="advantages-line"></div>
                    </div>
                    <div className="advantages-block button">
                        <div className="advantages-top">
                            <div className="advantages-icon"><img src="img/main/specs/advantages/icon4.png" alt="" /></div>
                            <div className="advantages-title">// <span>Exclusive community</span></div>
                        </div>
                        <p className="advantages-text">Exclusive community events games and experiences in the metaverse (later V2s will release as playable characters in the Metaverse) </p>
                        <div className="advantages-line"></div>
                    </div>
                    <div className="advantages-block button">
                        <div className="advantages-top">
                            <div className="advantages-icon"><img src="img/main/specs/advantages/icon5.png" alt="" /></div>
                            <div className="advantages-title">// <span>White list</span></div>
                        </div>
                        <p className="advantages-text">Gamified white list, you have to earn your access "the hottest NFT project you can't just buy"  </p>
                        <div className="advantages-line"></div>
                    </div>
                    <div className="advantages-block button">
                        <div className="advantages-top">
                            <div className="advantages-icon"><img src="img/main/specs/advantages/icon6.png" alt="" /></div>
                            <div className="advantages-title">// <span>Free mints</span></div>
                        </div>
                        <p className="advantages-text">Will have some free mints for holders that come together with your monk to increase utility and unlock our governance/utility token $CHI </p>
                        <div className="advantages-line"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecsSection;