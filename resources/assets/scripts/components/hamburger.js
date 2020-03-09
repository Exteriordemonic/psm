const CONFIG = {
  TRIGGER: '[data-toggle-menu]',
  ELEM: '[data-menu]',
  CLASS: '-is-active',
  HOME: '.home',
};

const { CLASS } = CONFIG;

const toggleMenu = {
  init() {
    const { TRIGGER, ELEM, HOME } = CONFIG;
    this.$trigger = document.querySelectorAll(TRIGGER);
    this.$elem = document.querySelector(ELEM);
    this.isHome = document.querySelector(HOME);
    this.addEvent();
  },

  addEvent() {
    this.$trigger.forEach(element => {
      element.addEventListener('click', () => {
        this.$trigger.forEach(element => { element.classList.toggle(CLASS); });
        this.toggleElem(CLASS);
      });
    });

    this.addBtnFnc();
    
  },

  hide() {
    this.toggleElem(CLASS);
    this.$trigger.forEach(element => { element.classList.toggle(CLASS); });
    this.isHome = false;
  },

  addBtnFnc() {
    document.onkeydown = (evt) => {
      if(!this.isHome) {
        evt = evt || window.event;
        var isEscape = false;
        if ('key' in evt) {
          isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
        } else {
          isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
          this.$trigger[0].click();
        }
      }
    };
  },

  toggleElem(CLASS) {
    this.$elem.classList.toggle(CLASS);

    const activeElems = this.$elem.querySelector('.header__nav').querySelectorAll(`.${CLASS}`);

    activeElems.forEach(element => {
      element.classList.remove(CLASS);
    });
  },
};

export default toggleMenu;