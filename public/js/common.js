import 'swiper/css';
document.addEventListener("DOMContentLoaded", function () {


  const body = document.querySelector("body");
	const header = document.querySelector(".header");
	const page = document.querySelector(".main-wrapper");
  const main = document.querySelector("main");

  isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

  
  const menuButton = document.querySelector(".header-button__menu");
	if(menuButton) {
		menuButton.addEventListener("click", () => {
			body.classList.toggle("openMenu")
		})

		const buttonsCloseMenu = document.querySelectorAll(".closeMenu");
		for(let button of buttonsCloseMenu) {
			
      button.addEventListener("click", ({ target }) => {
				body.classList.remove("openMenu")
        const { section } = button.dataset;
        if (!section) return;
        let sectionBlock = main.querySelector(`[data-section='${section}']`)
        if (!sectionBlock) return;
        $('html, body').stop().animate({
          scrollTop: $(sectionBlock).offset().top - 20
        }, {
          duration: 1000,  
          easing: "linear" 
        });
      });
		}
	}

  const headerDropdowns = document.querySelectorAll('.header-dropdown')
  if(headerDropdowns) {

    for(let drop of  headerDropdowns) {
      let activeDropdown = false
      const headerDropdownOpen = drop.querySelector('.header-dropdown__button')
      const headerDropdownMenu = drop.querySelector('.header-dropdown__menu')
      const headerDropdownItems = headerDropdownMenu.querySelectorAll('.header-list__item')
  
      headerDropdownOpen.addEventListener('click', () => {
        drop.classList.toggle('active')
        if(drop.classList.contains('active')) {
          setTimeout(() => {
            activeDropdown = true
          }, 100)
        } else {
          activeDropdown = false
        }
      })
  
      for (let button of headerDropdownItems) {
        button.addEventListener('click', () => {
          drop.classList.remove('active')
          activeDropdown = false
        })
      }
  
      document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerDropdownMenu);
        if ( ! withinBoundaries ) {
          if(activeDropdown) {
            drop.classList.remove('active')
            activeDropdown = false
          } 
        }
        
      })
    }

  
  }

  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 25) {
      !header.classList.contains('nofixed') &&  header.classList.add("headerFixed")
    } else {
      header.classList.remove("headerFixed")
    }
  })

  const sections = document.querySelectorAll('.mainPage .section')
  if(sections.length > 0) {
    const createSectionNav = (root) => {
      const nav = root.querySelector(".header-list");
      let currentActiveStep = nav.querySelector(".active");
    
      nav.addEventListener("click", ({ target }) => {
        const { section } = target.closest(".header-list__item").dataset;
        if (!section) return;
        let sectionBlock = main.querySelector(`[data-section='${section}']`)
        if (!sectionBlock) return;
        $('html, body').stop().animate({
          scrollTop: $(sectionBlock).offset().top
        }, {
          duration: 1000,  
          easing: "linear" 
        });
      });
      sections.forEach((s) => {
        new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              const { section } = s.dataset;
              if(!section) {
                if(currentActiveStep) {
                  currentActiveStep.classList.remove("active");
                  currentActiveStep.classList.add("noActive");
                }
              }
              if (!section) return;
              if(currentActiveStep) {
                currentActiveStep.classList.remove("active");
                currentActiveStep.classList.add("noActive");
              }
              const newActiveStep = nav.querySelector(
                `[data-section='${section}']`
              );
              if(newActiveStep) {
                newActiveStep.classList.remove("noActive");
                newActiveStep.classList.add("active");
                currentActiveStep = newActiveStep;
              }
            }
          },
          {
            threshold: 0.3
          }
        ).observe(s);
      });
    };
    
    createSectionNav(page);
  
  
   
  }



 

  const mouseCursor = document.querySelector('.cursor');
  const mouseCursorContainer = document.querySelector('.cursor-wrapper');

  const buttons = document.querySelectorAll('.button')

  window.addEventListener('mousemove', cursor)

  window.addEventListener('touchstart', () => {
    mouseCursor.style.opacity = 0;
  })

  function cursor(e) {
    if (isMobile.any()) {
      mouseCursor.style.display = 'none';
    } else {
      mouseCursor.style.opacity = 1
      mouseCursor.style.top = e.clientY + 'px'
      mouseCursor.style.left = e.clientX + 'px'
    }
  }

  for(let button of buttons) {
    button.addEventListener('mouseenter', () => {
      if (isMobile.any()) {
        mouseCursor.style.display = 'none';
      } else {
        mouseCursor.style.display = 'block';
        mouseCursor.classList.add('hover')
        if(button.classList.contains('white')){
          mouseCursor.classList.add('white')
        }
      }
    })
    button.addEventListener('mouseleave', () => {
      if (isMobile.any()) {
        mouseCursor.style.display = 'none';
      } else {
        mouseCursor.style.display = 'block';
        mouseCursor.classList.remove('hover')
        mouseCursor.classList.remove('white')
      }
    })
  }

  const wow = document.querySelectorAll('.wow');
	if(wow.length > 0) {
		new WOW().init();
	}


  let Visible = function (target, func, texts) {
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top && 
      targetPosition.top < windowPosition.bottom && 
      targetPosition.right > windowPosition.left && 
      targetPosition.left < windowPosition.right) {
      texts ? func(target, texts) : func()
    } else {
      target.classList.contains('avatars') && func('noShow');
      target.classList.contains('mainSection') && func('noShow');
      target.classList.contains('manifestoSection') && func('noShow');
      target.classList.contains('image') && func('noShow');
    }
  };

  function typeText(el, text) {
    el.classList.add('animated')
    let line = 0;
    let count = 0;
    let out = '';
    
    function typeLine() {
      let interval = setTimeout(
        () => {
        out += text[line][count]
        el.innerHTML = out +'|';
        count++;
        if(count >= text[line].length) {
          count = 0;
          line++;

          if(line == text.length) {
            clearTimeout(interval);
            el.innerHTML = out;
            return true
          }
        }
        typeLine()
      }, 20);
    }
    typeLine()
  }

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
      gap = date - now;

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

  let specs = document.querySelector('.specsSection')

  if(specs) {

    let specsBlockText = specs.querySelector('.specs-text');

    $('.str-1').liMarquee({
      scrollamount: 100, 
      circular: true,
      direction: 'left',
      hoverstop: false,
    });

    $('.str-2').liMarquee({
      scrollamount: 50, 
      circular: true,
      direction: 'right',
      hoverstop: false,
      startShow: true
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

  const teamSection = document.querySelector('.teamSection')

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

  const manifestoSection = document.querySelector('.manifestoSection');

  if(manifestoSection) {

    const image = document.querySelector('.manifestoSection .image')

    let oldScrollY = 0;

    const manifestoImage = manifestoSection.querySelector('.image')

    const blockTexts =  manifestoSection.querySelectorAll('.blocks-text p')
    // const blockTextRight =  manifestoSection.querySelector('.blocks-text-right')
    const blockLines =  manifestoSection.querySelectorAll('.image-lines .line')
    const mainTextFirst =  manifestoSection.querySelector('.main-texts__first')
    const mainTextLast =  manifestoSection.querySelector('.main-texts__last')
    const mainText =  manifestoSection.querySelector('.main-texts__title')

    function imageAnimated(noShow) {
      let windowWidth = window.innerWidth;
      let parent = manifestoSection.getBoundingClientRect();
      let perc = Math.round(100 * Math.abs(parent.top) / (parent.height - window.innerHeight));
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let dY = scrolled - oldScrollY;
      let elements = image.querySelectorAll('.step');

      if(noShow) {
        if(parent.top > 0) {
          for(let el of elements) {
            el.classList.remove('active')
          }
          for(let el of blockLines) {
            el.classList.remove('active')
          }
          for(let text of blockTexts) {
            text.classList.remove('active');
            text.classList.remove('noActive');
          }
          mainTextFirst.classList.remove('active')
          mainTextLast.classList.remove('active')
          mainText.classList.remove('active')
          // blockLines.classList.remove('active')
        }
        return false
      } else {
        if(parent.top < 0) {
          if(dY > 0 ) {
            for(let el of elements) {
              let data = el.dataset.step
              if(perc > 5 && data == '1' ) {
                el.classList.add('active')
                blockLines[0].classList.add('active')
              } else if (perc > 25 && data == '2' ) {
                el.classList.add('active')
                blockLines[0].classList.remove('active')
                blockLines[1].classList.add('active')
              } else if (perc > 40 && data == '3' ) {
                el.classList.add('active')
                blockLines[1].classList.remove('active')
                blockLines[2].classList.add('active')
              } else if (perc > 55 && data == '4' ) {
                el.classList.add('active')
                blockLines[2].classList.remove('active')
                blockLines[3].classList.add('active')
              } else if (perc > 70 && data == '5' ) {
                el.classList.add('active')
                blockLines[3].classList.remove('active')
                blockLines[4].classList.add('active')
              }
            }
            for(let el of blockTexts) {
              let data = el.dataset.text
              if(perc > 5 && perc < 25) {
                data == '1' && el.classList.add('active')
                data == '1' && el.classList.remove('noActive')
              } else if (perc > 25 && perc < 40) {
                data == '1' && el.classList.remove('active')
                data == '1' && el.classList.add('noActive')
                data == '2' && el.classList.remove('noActive')
                data == '2' && el.classList.add('active')
              } else if (perc > 40 && perc < 55) {
                data == '2' && el.classList.remove('active')
                data == '2' && el.classList.add('noActive')
                data == '3' && el.classList.remove('noActive')
                data == '3' && el.classList.add('active')
              } else if (perc > 55 && perc < 70) {
                data == '3' && el.classList.remove('active')
                data == '3' && el.classList.add('noActive')
                data == '4' && el.classList.remove('noActive')
                data == '4' && el.classList.add('active')
              } else if (perc > 70 && perc < 85) {
                data == '4' && el.classList.remove('active')
                data == '4' && el.classList.add('noActive')
                data == '5' && el.classList.remove('noActive')
                data == '5' && el.classList.add('active')
              } 
            }
            // perc > 0 && blockLines.classList.add('active')
            if(windowWidth < 769) {
              perc > 75 && mainTextFirst.classList.add('active')
              perc > 80 && mainText.classList.add('active')
              perc > 85 && mainTextLast.classList.add('active')
            } else {
              perc > 90 && mainTextFirst.classList.add('active')
              perc > 94 && mainText.classList.add('active')
              perc > 96 && mainTextLast.classList.add('active')
            }
           
          } else {
            for(let el of elements) {
              let data = el.dataset.step
              if(perc < 5 && data == '1' ) {
                el.classList.remove('active')
              } else if (perc < 25 && data == '2' ) {
                el.classList.remove('active')
              } else if (perc < 40 && data == '3' ) {
                el.classList.remove('active')
              } else if (perc < 55 && data == '4' ) {
                el.classList.remove('active')
              } else if (perc < 70 && data == '5' ) {
                el.classList.remove('active')
              } 
            }

            for(let el of blockTexts) {
              let data = el.dataset.text
              if (perc < 5) {
                data == '1' && el.classList.remove('active')
                blockLines[0].classList.remove('active')
              } else if(perc > 10 && perc < 25) {
                data == '2' && el.classList.remove('active')
                data == '1' && el.classList.remove('noActive')
                data == '1' && el.classList.add('active')
                blockLines[1].classList.remove('active')
                blockLines[0].classList.add('active')
              } else if (perc > 25 && perc < 40) {
                data == '3' && el.classList.remove('active')
                data == '2' && el.classList.remove('noActive')
                data == '2' && el.classList.add('active')
                blockLines[2].classList.remove('active')
                blockLines[1].classList.add('active')
              } else if (perc > 40 && perc < 55) {
                data == '4' && el.classList.remove('active')
                data == '3' && el.classList.remove('noActive')
                data == '3' && el.classList.add('active')
                blockLines[3].classList.remove('active')
                blockLines[2].classList.add('active')
              } else if (perc > 55 && perc < 70) {
                data == '5' && el.classList.remove('active')
                data == '4' && el.classList.remove('noActive')
                data == '4' && el.classList.add('active')
                blockLines[4].classList.remove('active')
                blockLines[3].classList.add('active')
              } else if (perc > 70 && perc < 85) {
                data == '5' && el.classList.add('active')
                blockLines[4].classList.add('active')
              } 
            }
            // perc < 5 && blockLines.classList.remove('active')
            if(windowWidth < 769) {
              perc < 90 && mainTextFirst.classList.remove('active')
              perc < 90 && mainText.classList.remove('active')
              perc < 90 && mainTextLast.classList.remove('active')
            } else {
              perc < 85 && mainTextFirst.classList.remove('active')
              perc < 85 && mainText.classList.remove('active')
              perc < 85 && mainTextLast.classList.remove('active')
            }
          }
          oldScrollY = scrolled;
        }
      }
    } 

      // let div = document.getElementById("fixedDiv");
      
      // window.onscroll = function() {
      //   let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      //   let dY = scrolled - oldScrollY;
        
      //   if ( dY > 0 ){
      //     console.log(dY, oldScrollY)
      //   } else {
      //     console.log(dY, oldScrollY)

      //   }
        
      // }


    window.addEventListener('scroll', function() {
      
      if(image.classList.contains('animated') == false) {
        Visible (manifestoSection, imageAnimated);
      }
    });

  }


  const coursesBlocks = document.querySelector('.courses-swiper')

  if(coursesBlocks) {
    let coursesSwiper = new Swiper(('.courses-blocks.swiper'), {
      slidesPerView: 2,
      // loop: true,
      navigation: {
        nextEl: ".courses-swiper__button-next",
        prevEl: ".courses-swiper__button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,

        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 0,

        }
      }
    });
  }

})

document.addEventListener("DOMContentLoaded", function () {

  const modalSection = document.querySelector('.modalSection');

  if(modalSection) {

    const choose = modalSection.querySelector('.choose')
    const modalCloseButtons = modalSection.querySelectorAll('.modal-close')
    const modals = modalSection.querySelectorAll('.modal')
    let activeModal

    if(choose) {
      const swapBottomInfoButton = choose.querySelector(".choose-bottom__select");
      const swapBottomInfoBlock = choose.querySelector(".choose-bottom");

      swapBottomInfoButton.addEventListener('click', () => {
        swapBottomInfoBlock.classList.toggle('active')
      })

      const settingButton = choose.querySelector('.choose-setting__button')
      const settingBlock = choose.querySelector('.choose-setting')

      settingButton.addEventListener('click', () => {
        settingBlock.classList.toggle('active')
        if(settingBlock.classList.contains('active')) {
          activeModal = settingBlock
        }
      })

      const selectToken = choose.querySelectorAll('.choose-item__select');
      const selectTokenModal = document.querySelector('.modalSelectToken');

      if(selectToken) {
        for(let button of selectToken) {
          button.addEventListener('click', () => {
            selectTokenModal.classList.add('active')
            setTimeout(() => {
              activeModal = selectTokenModal.querySelector('.modal-block')
            }, 100)
          })
        }
      }
    }

    if(modalCloseButtons.length > 0) {
      for(let closeButton of modalCloseButtons) {
        let modal = closeButton.closest('.modal')
        closeButton.addEventListener('click', () => {
          modal.classList.remove('active')
          activeModal = 0
        })
      }
    }


    if(modals.length > 0) {

      const selectTocken = document.querySelector('.selectTocken')
      const manage = document.querySelector('.manage')

      document.addEventListener( 'click', (e) => {
        if(activeModal) {
          const withinBoundaries = e.composedPath().includes(activeModal);
          if ( ! withinBoundaries ) {
            if(activeModal.classList.contains('modal-block')) {
              let modal = activeModal.closest('.modal')
              modal.classList.remove('active')
              activeModal = 0
            } else {
              activeModal.classList.remove('active');
              activeModal = 0
            }
            if(manage.classList.contains('active')) {
              selectTocken.classList.add('active')
              manage.classList.remove('active')
            }
          }
        }
        
      })
    }
    

    const modalSelectToken = modalSection.querySelector('.modalSelectToken')

    if(modalSelectToken) {

      const selectTocken = modalSelectToken.querySelector('.selectTocken')
      const manage = modalSelectToken.querySelector('.manage')
      const manageButtonOpen = modalSelectToken.querySelector('.selectTocken-manage')
      const manageButtonCloseBack = modalSelectToken.querySelector('.manage-back')
      const manageButtonClose = modalSelectToken.querySelector('.manage .modal-close')
      const manageTabs = modalSelectToken.querySelectorAll('.manage-tab')
      const manageContents = modalSelectToken.querySelectorAll('.manage-content')

      manageButtonOpen.addEventListener("click", () => {
        selectTocken.classList.remove('active')
        manage.classList.add('active')

        let manageHeight = manage.clientHeight
        let modalSelectTokenHeight = modalSelectToken.clientHeight

        if(modalSelectTokenHeight > manageHeight) {
          manage.style.minHeight = manageHeight + "px"
        } else {
          manage.style.minHeight = "0px"
        }
      })
      manageButtonCloseBack.addEventListener("click", () => {
        selectTocken.classList.add('active')
        manage.classList.remove('active')
      })
      manageButtonClose.addEventListener("click", () => {
        selectTocken.classList.add('active')
        manage.classList.remove('active')
      })

      for(let i = 0; i < manageTabs.length; i++) {
        manageTabs[i].addEventListener('click', () => {

          for(let tab of manageTabs) {
            tab.classList.remove('active')
          }

          for(let o = 0; o < manageContents.length; o++) {
            manageContents[o].classList.remove('active')
            if(i == o) {
              manageTabs[i].classList.add('active')
              manageContents[i].classList.add('active')
            }
          }
        })
      }

      


    }

    const connectWalletButton = modalSection.querySelector('.connectWalletButton');
    
    if(connectWalletButton) {
      const connectWalletModal = modalSection.querySelector('.connectWallet')
      const howUseButton = modalSection.querySelector('.connectWallet-how')
      const legalModal = modalSection.querySelector('.legal');
      const legalModalBack = legalModal.querySelector('.modal-back');


      connectWalletButton.addEventListener('click', () => {
        connectWalletModal.classList.add('active')
        setTimeout(() => {
          activeModal = connectWalletModal.querySelector('.modal-block')
        }, 100)
      }) 

      howUseButton.addEventListener('click', () => {
        connectWalletModal.classList.remove('active')
        legalModal.classList.add('active')
        setTimeout(() => {
          activeModal = legalModal.querySelector('.modal-block')
        }, 100)
      }) 
      
      legalModalBack.addEventListener('click', () => {
        connectWalletModal.classList.add('active')
        legalModal.classList.remove('active')
      }) 
    }

  

  }

  const charactersPage = document.querySelector('.charactersPage');

  if(charactersPage) {
    const characters = document.querySelector('.characters');
    const items = characters.querySelectorAll('.items')

    for(let item of items) {
      let top =  item.querySelector('.items-top');
      top.addEventListener('click', () => {
        item.classList.toggle('active')
      })
    }

    const blocks = characters.querySelectorAll('.block')
    const modal = document.querySelector('.characters-modal')
    const modalBlock = modal.querySelector('.modal-block')
    const modalClose = modal.querySelector('.modal-close')
    let modalStatus = false

    for(let block of blocks) {
      block.addEventListener('click', () => {
        modal.classList.add('active')
        setTimeout(() => {
          modalStatus = true
        }, 100)
      })
    }

    modalClose.addEventListener('click', () => {
      modal.classList.remove('active')
      modalStatus = false
    })

    document.addEventListener( 'click', (e) => {
      const withinBoundaries = e.composedPath().includes(modalBlock);
      if ( ! withinBoundaries ) {
        if(modalStatus) {
          modal.classList.remove('active')
          modalStatus = false
        } 
      }
    })

    const modalImage = modal.querySelector('.modal-image')
    const modalImageBig = modal.querySelector('.modal-image__big')
    const modalImageBigBlock = modalImageBig.querySelector('.image-block')

    const openBigImage = modalImage.querySelector('.plus')
    const closeBigImage = modalImageBig.querySelector('.minus')

    let showBigImage = false

    openBigImage.addEventListener('click', () => {
      modalImageBig.classList.add('active')
      setTimeout(() => {
        showBigImage = true
      }, 100)
    })
    closeBigImage.addEventListener('click', () => {
      modalImageBig.classList.remove('active')
      showBigImage = false
    })

    document.addEventListener( 'click', (e) => {
      const withinBoundaries = e.composedPath().includes(modalImageBigBlock);
      if ( ! withinBoundaries ) {
        if(showBigImage) {
          modalImageBig.classList.remove('active')
          showBigImage = false
        } 
      }
    })

    const filterOpenButton = document.querySelector('.filter-btn');
    const filterMenu = document.querySelector('.leftMenu')
    const filterMenuClose = document.querySelector('.leftMenu-close')
    const filterMenuBlock = document.querySelector('.leftMenu-block')
    let filterMenuStatus = false

    filterOpenButton.addEventListener('click', () => {
      filterMenu.classList.add('active')
      setTimeout(() => {
        filterMenuStatus = true
      }, 100)
    })
    filterMenuClose.addEventListener('click', () => {
      filterMenu.classList.remove('active')
      filterMenuStatus = false
    })

    document.addEventListener( 'click', (e) => {
      const withinBoundaries = e.composedPath().includes(filterMenuBlock);
      if ( ! withinBoundaries ) {
        if(filterMenuStatus) {
          filterMenu.classList.remove('active')
          filterMenuStatus = false
        } 
      }
    })
  }

  const monksPage = document.querySelector('.monksPage');

  if(monksPage) {
    const options = monksPage.querySelectorAll('.option');

    for(let option of options) {
      let optionResult = option.querySelector('.option-result');

      let all = option.querySelector('.all').innerHTML;
      let now = option.querySelector('.now').innerHTML;

      let result = now / all  * 100 ; //вычисление процентов
      optionResult.style.width = result + "%"
    }

    let monksSwiper = new Swiper(".monks-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      loop: true,
      navigation: {
        nextEl: ".monks-swiper__button-next",
        prevEl: ".monks-swiper__button-prev",
      },
    });

    const items = monksPage.querySelectorAll('.rightMenu .items-options')

    for(let item of items) {
      let top =  item.querySelector('.items-options-top');
      top.addEventListener('click', () => {
        item.classList.toggle('active')
      })
    }


  }

  

})

