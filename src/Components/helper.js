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

  export { Visible, typeText }