import React, { useEffect }from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
import $ from 'jquery';
function App() {
  useEffect(() => {
    jQueryInitialRender();
  }, [])
  const jQueryInitialRender = () => {
    
  const body = document.querySelector("body");
	const header = document.querySelector(".header");
	const page = document.querySelector(".main-wrapper");
  const main = document.querySelector("main");

  const isMobile = {
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

  }
  return (
    <>
      <div className="cursor-wrapper">
        <div className="cursor"></div>
	    </div>
      <div className="main-wrapper mainPage">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
