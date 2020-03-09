import 'jquery';

import Hamburger from './hamburger';

const CONFIG = {
    TRIGGER: '.menu-item-has-children > a',
    MENU_ITEM: '.menu-item a',
    MENU: '.menu',
    CLASS: '-is-active',
    OFFANIMATION: '-no-animate',
    WRAPPER: '#wrapper',
    HOME: '.home',
};

const { TRIGGER, MENU, CLASS, OFFANIMATION, WRAPPER, HOME, MENU_ITEM } = CONFIG;

const menu = {
    init() {
        this.trigger = document.querySelectorAll(TRIGGER);
        this.menuItem = document.querySelectorAll(MENU_ITEM);
        this.menu = document.querySelector(MENU);
        this.wrapper = document.querySelector(WRAPPER);
        this.home = document.querySelector(HOME);

        this.class = CLASS;
        this.offanimation = OFFANIMATION;
        this.addEvents();
    },

    addEvents() {
        this.trigger.forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault();

                const $this = e.currentTarget;

                this.trigger.forEach(element => { element.parentElement.classList.remove(this.class) });

                $this.parentElement.classList.add(this.class);

                this.menu.classList.add(this.class);
            });
        });

        this.menuItem.forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault();

                const $this = e.currentTarget;

                if (!$this.parentElement.classList.contains('menu-item-has-children')) {
                    this.loadPage($this);
                }
            });
        });
    },

    loadPage($this) {
        const url = $this.getAttribute('href');
        const home = this.home;
        console.log(url);

        if (url !== '#') {
            $(WRAPPER).load(url + ' ' + WRAPPER + '>*', function () {

                Hamburger.hide();

                if (home) {
                    home.classList.remove('home');
                }
            });

            // $(WRAPPER).load('http://localhost:3000/psm/projekty/korona-warmii-i-mazur-3x3/');
            // if (home) {
            //     home.classList.remove(HOME);
            // }
        }
    },
}

export default menu;