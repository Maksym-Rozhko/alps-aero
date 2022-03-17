document.addEventListener('DOMContentLoaded', () => {
    programTabs();
    scrollToTop();
    headerScrollFixed();
    burgerMenu();
    smoothScrollToElem();
    sendFormBlockBanner();
    jQuery(function(){
        jQuery(".input-tel").mask("+38(999) 999-9999");
    });
});



function sendFormBlockBanner() {
  const btnSubmit = document.querySelector('#uForm__submit_1');
  const formBannerBlock = document.querySelector('#uForm_1');
  
  btnSubmit.addEventListener('click', () => {
    jQuery('#uForm_1').trigger('submit');
  });
}

function programTabs() {
    const programImage = document.querySelector('.dynamic-block__image');
    const programTitle = document.querySelector('.dynamic-block__title');
    const programText = document.querySelector('.dynamic-block__text');
    const programTabsItem = document.querySelectorAll('.program-list__item');

    const removeActiveListItems = () => programTabsItem.forEach(item => item.classList.remove('active'));

    programTabsItem.forEach(item => {
        let itemId = item.dataset.id;
        item.addEventListener('click', () => {
            removeActiveListItems();
            item.classList.add('active');
            switch(itemId) {
                case '1':
                    programImage.src = `/assets/images/program/0${itemId}.jpg`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text">
                        Важность планирования и понимания контекста и фактов / переменных / уступок 
                        Предположения <br>
                        Перерыв / разговор через  людей / слушание <br>
                        Тайм-ауты / терпение / стресс / развилки в дороге <br>
                        Чёткость общения <br>
                        Обобщение как средство понимания и управления темпами и
                        процессом
                    </p>
                    `;
                    break;
                case '2':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text">
                        Фазы переговоров - планирование / разведка / торг / перерыв / соглашение <br>
                        Min, BATNA, ZOPA, Этапы планирования
                    </p>
                    `;
                    break;
                case '3':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text">
                        Что такое уступка? <br>
                        Что такое состояние? <br>
                        Какая польза от уступок в переговорах? <br>
                        Типы и стили переговоров, методы и принципы <br> Культурное воздействие
                    </p>
                    `;
                    break;
                case '4':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text">
                        Переговорная тактика <br>
                        Способы уменьшить враждебность <br>
                        Способы выхода из тупика <br>
                        Переговоры с раздражителями <br>
                    </p>
                    `;
                    break;
                case '5':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text">
                        Причины того, что переговоры по телефону не являются хорошим средством общения <br>
                        Что такое «слепые» переговоры? <br>
                        Факторы, которые следует учитывать при использовании 
                        электронной почты
                    </p>
                    `;
                    break;
                case '6':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text">
                        Виды вопросов, используемых во время переговоров <br>
                        Какие вопросы будут способствовать «совместным» 
                        переговорам? <br>
                        Категории невербального поведения <br>
                    </p>
                    `;
                    break;
                case '7':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text"></p>
                    `;
                    break;
                case '8':
                    programImage.src = `/assets/images/program/0${itemId}.png`;
                    programTitle.innerHTML = item.innerHTML;
                    programText.innerHTML = `
                    <p class="dynamic-block__text"></p>
                    `;
                    break;
            }
        });
    });  
};

function burgerMenu() {
    const burgerMenuElem = document.querySelector('.burger-menu');
    const navigationMobileList = document.querySelector('.navigation__mobile');
    const navigationBackground = document.querySelector('.navigation-bg');
  
    burgerMenuElem.addEventListener('click', () => {
      burgerMenuElem.classList.toggle('burger-menu__active');
      navigationMobileList.classList.toggle('navigation__active');
      navigationBackground.classList.toggle('navigation-bg__active');
    });
};

function smoothScrollToElem() {
    const anchorsLink = document.querySelectorAll('a.scroll-link');
    const logoScrollToTop = document.querySelectorAll('a.logo');
    const scrollToPageForm = document.querySelectorAll('a.main-link');
    const burgerMenuElem = document.querySelector('.burger-menu');
    const navigationMobileList = document.querySelector('.navigation__mobile');
    const navigationBackground = document.querySelector('.navigation-bg');
  
    const removeBurgerOverflow = () => {
      burgerMenuElem.classList.toggle('burger-menu__active');
      navigationMobileList.classList.toggle('navigation__active');
      navigationBackground.classList.toggle('navigation-bg__active');
    };
  
    const smoothScroll = (anchors) => {
      for (let anchor of anchors) {
        const blockID = anchor.getAttribute('href');
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
  
          if(innerWidth <= 950 && burgerMenuElem.classList.contains('burger-menu__active')) {
            setTimeout(() => {
              removeBurgerOverflow();
            }, 500);
          }
  
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (anchor.classList.value === 'nav-list__link' || anchor.classList.value !== 'nav-list__link') {
            for (let anchor of anchors) {
              anchor.classList.remove('active-nav-link');
            }
            anchor.classList.add('active-nav-link');
          }
        });
      };
    };
  
    smoothScroll(logoScrollToTop);
    smoothScroll(anchorsLink);
    smoothScroll(scrollToPageForm);
}

function headerScrollFixed() {
    const headerFixed = document.querySelector('.header');
    const mainScreenContent = document.querySelector('.main-screen__content');
    const headerPhoneIcon = document.querySelector('.phone__icon img');
    
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      scrollY > 100 ? headerFixed.classList.add('active') : headerFixed.classList.remove('active');
      scrollY > 100 ? headerPhoneIcon.src = '/assets/images/icons/phone-fill.svg' : headerPhoneIcon.src = '/assets/images/icons/phone.svg';
      scrollY > 100 ? mainScreenContent.classList.add('pt') : mainScreenContent.classList.remove('pt');
    });
};

function scrollToTop() {
    const btnScrollUp = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        scrollY > 1000 ? btnScrollUp.classList.add('active') : btnScrollUp.classList.remove('active');
    });
    
    btnScrollUp.addEventListener('click', () => {
      jQuery("html, body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    });
  };