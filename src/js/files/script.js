// Подключение функционала "Чертогов Фрилансера"
import {addLoadedClass, _slideToggle} from "./functions.js";

addLoadedClass()

let moveLines = document.querySelectorAll('[data-move-line]')
if (moveLines.length) {
  moveLines.forEach(line => {
    let min = line.dataset.min
    let max = line.dataset.max
    let now = line.dataset.num
    let spanLine = line.querySelector('.right-header-item__line')
    let text = line.querySelector('.right-header-item__text')
    if (line.hasAttribute('data-diff')) {
      text.innerHTML = `(-${max - now}) ${now}`
    } else {
      text.innerHTML = now
    }
    let length = (now - min) / max * 100

    spanLine.style.cssText = `width: ${length - 7}%`
  })
}

let subMenuBtn = document.querySelector('#subMenuBtn')
if (subMenuBtn) {
  subMenuBtn.addEventListener("click", function (e) {
    _slideToggle(subMenuBtn.parentNode.querySelector('ul'))
  });
}

//region Confirm Popup
let confirmPopup = document.querySelector('[data-confirm-popup]')
if (confirmPopup) {
  let nameC = confirmPopup.querySelector('[data-confirm-name]')
  let imgC = confirmPopup.querySelector('[data-confirm-img] img')
  let imgC2 = confirmPopup.querySelector('[data-confirm-img] source')
  let priceC = confirmPopup.querySelector('[data-confirm-price]')
  let quanC = confirmPopup.querySelector('input[type=number]')
  let titleC = confirmPopup.querySelector('[data-confrim-title]')

  let buyBtns = document.querySelectorAll('[data-popup-buy]')
  let sellBtns = document.querySelectorAll('[data-popup-sell]')
  if (buyBtns.length && sellBtns.length) {
    let closeBtns = confirmPopup.querySelectorAll('[data-close-confirm]')
    if (closeBtns.length) {
      closeBtns.forEach(item => {
        item.addEventListener("click", function (e) {
          confirmPopup.classList.add('_hide')
        });
      })
    }

    buyBtns.forEach(btn => {
      btn.addEventListener("click", function (e) {
        let tr = btn.closest('tr')
        let price = tr.querySelector('.item-popup-market__price>span').innerHTML
        let owned = tr.querySelector('.item-popup-market__owned').innerHTML
        let name = tr.querySelector('.item-popup-market__name').innerHTML
        let img = tr.querySelector('.item-popup-market__img img')
        let img2 = tr.querySelector('.item-popup-market__img source')
        priceC.innerHTML = -price
        quanC.value = +owned
        imgC.src = img.src
        // imgC2.srcset = img2.srcset
        nameC.innerHTML = name
        titleC.innerHTML = btn.innerHTML
        confirmPopup.classList.toggle('_hide')
      });
    })
    sellBtns.forEach(btn => {
      btn.addEventListener("click", function (e) {
        let tr = btn.closest('tr')
        let price = tr.querySelector('.item-popup-market__price>span').innerHTML
        let owned = tr.querySelector('.item-popup-market__owned').innerHTML
        let name = tr.querySelector('.item-popup-market__name').innerHTML
        let img = tr.querySelector('.item-popup-market__img img')
        let img2 = tr.querySelector('.item-popup-market__img source')
        priceC.innerHTML = "+" + price
        quanC.value = +owned
        imgC.src = img.src
        // imgC2.srcset = img2.srcset
        nameC.innerHTML = name
        titleC.innerHTML = btn.innerHTML
        confirmPopup.classList.toggle('_hide')
      });
    })
  }
}
//endregion

// region Choose Popup
let choosePopup = document.querySelector('[data-confirm-choose]')
if (choosePopup) {

  //Окрытие окна
  let openBtn = document.querySelector('[data-filterOpen]')
  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      choosePopup.classList.remove('_hide')
    });
  }

  //Закрытие окна
  let closeBtns = choosePopup.querySelectorAll('[data-close-choose]')
  if (closeBtns.length) {
    closeBtns.forEach(item => {
      item.addEventListener("click", function (e) {
        choosePopup.classList.add('_hide')
      });
    })
  }

  //Выделение item
  let itemBtns = choosePopup.querySelectorAll('.bottom-popup-choose__item')
  if (itemBtns.length) {
    itemBtns.forEach(item => {
      item.addEventListener("click", function (e) {
        itemBtns.forEach(btn => {
          btn.classList.remove('_check')
        })
        item.classList.toggle('_check')
        let chooseBtn = choosePopup.querySelector('.bottom-popup-choose__btn')
        if (chooseBtn) {
          chooseBtn.disabled = false
        }
      });
    })
  }
}
// endregion

// region Change Popup
let changePopup = document.querySelector('[data-change-popup]')
if (changePopup) {

  //Окрытие окна
  let openBtns = document.querySelectorAll('[data-change-btn]')
  if (openBtns.length) {
    openBtns.forEach(item => {
      item.addEventListener("click", function (e) {
        changePopup.classList.remove('_hide')
      });
    })
  }

  //Закрытие окна
  let closeBtns = changePopup.querySelectorAll('[data-close-choose]')
  if (closeBtns.length) {
    closeBtns.forEach(item => {
      item.addEventListener("click", function (e) {
        changePopup.classList.add('_hide')
      });
    })
  }

  //Выделение item
  let itemBtns = changePopup.querySelectorAll('.bottom-popup-choose__item')
  if (itemBtns.length) {
    itemBtns.forEach(item => {
      item.addEventListener("click", function (e) {
        //Если нажали на build
        if (item.querySelector('._passive')) {
          let buildPopup = document.querySelector('[data-build-popup]')
          if (buildPopup) {
            buildPopup.classList.remove('_hide')
          }
        }
        //Если нажали на готовое
        else {
          itemBtns.forEach(btn => {
            btn.classList.remove('_check')
          })
          item.classList.toggle('_check')
          let chooseBtn = changePopup.querySelector('.bottom-popup-choose__btn')
          if (chooseBtn) {
            chooseBtn.disabled = false
          }
        }
      });
    })
  }
}
// endregion

// region Build Popup
let buildPopup = document.querySelector('[data-build-popup]')
if (buildPopup) {
  //Закрытие окна
  let closeBtns = buildPopup.querySelectorAll('[data-close-choose]')
  if (closeBtns.length) {
    closeBtns.forEach(item => {
      item.addEventListener("click", function (e) {
        buildPopup.classList.add('_hide')
      });
    })
  }
}
// endregion

// region TwoNumBlock
let twoParts = document.querySelectorAll('[data-two-num]')
if (twoParts.length) {
  twoParts.forEach(part => {
    let divValue = part.querySelector('.right-header-item__text')
    let max = +part.dataset.max
    let num = +part.dataset.num
    divValue.innerHTML = `${num}/${max}`
    if (num >= max) {
      part.classList.remove('_red')
      part.classList.add('_green')
    }
  })
}
// endregion

// region data-health-item
let healthItems = document.querySelectorAll('[data-health-item]')
if (healthItems.length) {
  healthItems.forEach(health => {
    let num = health.dataset.num
    let line = health.querySelector('div')
    line.innerHTML = (() => {
      let str = ""
      for (let i = 0; i < num; i++) {
        str += "<span></span>"
      }
      return str
    })()
  })
}
// endregion

// region data-tools-item
let toolsItems = document.querySelectorAll('[data-tools-item]')
if (toolsItems.length) {
  let hand = document.querySelector('.borders-tools-name-block__hand')
  let isOver = false
  let div = document.createElement('div')
  let timeout = null

  if (hand) {
    toolsItems.forEach(item => {
      item.parentNode.classList.remove('_equipped')
      item.addEventListener("dblclick", function (e) {
        let imgHtml = item.querySelector('.item-tools-slide__img').innerHTML

        toolsItems.forEach(tool => {
          tool.parentNode.classList.remove('_equipped')
        })

        hand.innerHTML = imgHtml

        item.parentNode.classList.add('_equipped')
      });

      item.parentNode.onmouseover = (event) => {
        if (!isOver) {
          isOver = true
          setTimeout(() => {
            div.innerHTML = `<div class="notify">
      <div class="notify__wrapper">
        <div class="notify__close _close">
          <img src="img/table/close.png" alt="">
        </div>
        <div class="notify__body">
          <div class="notify__column">
            <p class="notify__text">Vel sit leo, lectus id urna mattis elit. Ex. Amet, malesuada justo integer sed
                                    libero,
                                    amet, velit ipsum et vulputate mattis velit </p>
            <div class="notify__row">
              <p class="notify__text">sodales vitae orci, et vel dapibus adipiscing hac sit adipiscing efficitur platea
                                      ornare nulla sit vulputate </p>
              <div class="notify__img">
                <img src="img/items3/axe.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
            div.style.cssText = `
          position: fixed;
          left: ${event.clientX}px;
          top: ${event.clientY}px;
          z-index:9999;
          width: 300px;
          `
            document.body.append(div)
          }, 1000)
        }
      }
      item.parentNode.onmouseout = () => {
        clearTimeout(timeout)
        isOver = false
        div.innerHTML = ""
      }
    })
  }
}
// endregion

// region data-mine-item
let mineItems = document.querySelectorAll('[data-mine-item]')
let mineBtn = document.querySelector('[data-mine-btn]')

if (mineItems.length) {
  let mineWindow1 = document.querySelector('[data-mine-window1]')
  if (mineWindow1) {
    mineItems.forEach(item => {
      item.parentNode.classList.remove('_equipped')

      let mineTime = document.querySelector('[data-mine-time]')
      let mineProgressbar = document.querySelector('[data-mine-progressbar]')

      item.addEventListener("dblclick", function (e) {
        let imgHtml = item.querySelector('.item-tools-slide__img').innerHTML

        mineItems.forEach(tool => {
          tool.parentNode.classList.remove('_equipped')
        })

        mineWindow1.innerHTML = imgHtml

        item.parentNode.classList.add('_equipped')

        let mineWindow2 = document.querySelector('[data-mine-window2]')
        if (mineWindow2) {
          mineWindow2.innerHTML = imgHtml
        }
      });

      mineBtn.addEventListener("click", function (e) {
        progressBar(3000, mineProgressbar, mineTime, mineBtn)
      });
    })


  }
}

let searchPopupBtn = document.querySelector('[data-searchPopupBtn]')
let minePopupBtn = document.querySelector('[data-minePopupBtn]')

searchPopupBtn.addEventListener("click", function (e) {
  document.querySelector('[data-changeTitle]').innerHTML = "SEARCH"
  mineBtn.innerHTML = "SEARCH"
});

minePopupBtn.addEventListener("click", function (e) {
  document.querySelector('[data-changeTitle]').innerHTML = "MINE"
  mineBtn.innerHTML = "MINE"
});
// endregion

// region Hunt
let huntBtn = document.querySelector('[data-hunt-btn]')
if (huntBtn) {
  let popupSwipers = document.querySelectorAll('[data-swiperPopup]')
  let huntBlock1 = document.querySelector('[data-huntBlock1]')
  let huntBlock2 = document.querySelector('[data-huntBlock2]')
  let time = 3000
  let okBtn = document.querySelector('.huntProgress__btn')

  huntBtn.addEventListener("click", function (e) {
    okBtn.classList.add('_hide')
    if (popupSwipers.length) {
      popupSwipers.forEach(item => {
        item.classList.add("_hide")
      })
    }
    if (huntBlock1) {
      huntBlock1.classList.remove('_hide')
    }
    progressBar(time, document.querySelector('.huntProgress__progressBar'), null, okBtn)
    setTimeout(() => {
      if (okBtn) {
        okBtn.classList.remove('_hide')
        huntBlock2.classList.remove('_hide')
      }
      document.querySelector('.huntProgress__img').hidden = true;
    }, time)
  });

  okBtn.addEventListener("click", function (e) {
    huntBlock1.classList.add('_hide')
    huntBlock2.classList.add('_hide')
    document.querySelector('.huntProgress__img').hidden = false;
    if (popupSwipers.length) {
      popupSwipers.forEach(item => {
        item.classList.remove("_hide")
      })
    }
  });
}
// endregion

// region Seed (animals/farm)
let seedProgresses = document.querySelectorAll('[data-seedProgress]')
if (seedProgresses.length) {
  seedProgresses.forEach(block => {
    let progressBarItem = block.querySelector('div > div')
    let btn = block.querySelector('button')
    btn.addEventListener("click", function (e) {
      if (btn.innerHTML === "CLAIM") {
        btn.disabled = true
        return false
      }
      btn.classList.add("_hide")
      progressBarItem.classList.remove("_hide")
      progressBar(2000, progressBarItem, null, btn)

      setTimeout(() => {
        btn.classList.remove("_hide")
        progressBarItem.classList.add("_hide")
        btn.innerHTML = "CLAIM"
      }, 2000)
    });
  })
}

// endregion

// region smelter
let smelterItems = document.querySelectorAll('[data-smelter-item]')
if (smelterItems.length) {
  let window1 = document.querySelector('[data-smelterItem1]')
  let window2 = document.querySelector('[data-smelterItem2]')
  let isSecondClick = false

  let smelterBtn = document.querySelector('[data-smelterBtn]')
  let smelterBar = document.querySelector('[data-smelterProgressbar]')

  smelterItems.forEach(item => {
    item.parentNode.classList.remove('_equipped')
    item.addEventListener("dblclick", function (e) {
      let imgHtml = item.querySelector('.item-tools-slide__img').innerHTML

      if (!isSecondClick) {
        smelterItems.forEach(tool => {
          tool.parentNode.classList.remove('_equipped')
        })
        window1.innerHTML = imgHtml
      } else {
        window2.innerHTML = imgHtml
      }

      item.parentNode.classList.add('_equipped')

      isSecondClick = !isSecondClick
    });
  })

  smelterBtn.addEventListener("click", function (e) {
    smelterBar.classList.remove('_hide')
    progressBar(2000, smelterBar, null, smelterBtn)

    setTimeout(() => {
      smelterBar.classList.add('_hide')
      window1.innerHTML = null
      window2.innerHTML = null
      smelterItems.forEach(item => {
        item.parentNode.classList.remove('_equipped')
      })

    }, 2000)
  });
}

// endergion

function progressBar(time, progressbarItem, timeItem = null, btn) {
  btn.disabled = true
  let startTime = time / 1000
  let allTime = 0
  if (timeItem) {
    timeItem.innerHTML = "00:0" + startTime
  }
  let span = progressbarItem.querySelector('span')
  span.style.cssText = `width: ${allTime / time * 100000}%`

  progressbarItem.parentNode?.classList.remove('_hide')

  let progressInterval = setInterval(() => {
    startTime -= 1
    allTime += 1
    if (timeItem) {
      timeItem.innerHTML = "00:0" + startTime
    }
    span.style.cssText = `width: ${allTime / time * 100000}%`
  }, 1000)
  setTimeout(() => {
    clearInterval(progressInterval);
    btn.disabled = false;
    progressbarItem.parentNode.classList.add('_hide');
  }, time)
}
