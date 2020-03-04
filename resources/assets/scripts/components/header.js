import slider from './slider'

const CONFIG = {
  ELEM: 'data-header',
  CLASS: 'header--hide',
  OFFSET: 2,
};

var s, ls;

const header = {
  init() {
    const { ELEM, CLASS, OFFSET } = CONFIG;

    this.elem = document.querySelector(`[${ELEM}]`);
    this.class = CLASS;
    this.offset = OFFSET;

    this.scroll();
  },

  scroll() {
    window.onscroll = () => {
      s = window.scrollY;
      const isScrollDown =  s > 100 && s > ls + this.offset ? true : false;
      const isScrollTop = s < 100  ? true : false;
      if (isScrollDown)
        this.elem.classList.add(this.class);
      
      if (isScrollTop)
        this.elem.classList.remove(this.class);


      if(s < 100) slider.resize();
      ls = s;
    };
  },
};

export default header;
