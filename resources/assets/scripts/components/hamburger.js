const CONFIG = {
  TRIGGER: '[data-toggle-menu]',
  ELEM: '[data-menu]',
  CLASS: '-is-active',
};

const toggleMenu = {
  init() {
    const { TRIGGER, ELEM } = CONFIG;
    this.$trigger = document.querySelectorAll(TRIGGER);
    this.$elem = document.querySelector(ELEM);
    this.addEvent();
  },

  addEvent() {
    const { CLASS } = CONFIG;
    this.$trigger.forEach(element => {
      element.addEventListener('click', () => {
        this.$trigger.forEach(element => { element.classList.toggle(CLASS); });
        this.toggleElem(CLASS);
      });
    });

    document.onkeydown = (evt) => {
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
    };
  },

  toggleElem(CLASS) {
    this.$elem.classList.toggle(CLASS);
  },
};

export default toggleMenu;