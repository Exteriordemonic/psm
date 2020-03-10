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
                    this.loadPage($this.getAttribute('href'));
                }
            });
        });

        /* These are the modifications: */
        history.pushState = (f => function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        })(history.pushState);

        history.replaceState = (f => function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        })(history.replaceState);

        window.addEventListener('popstate', () => {
            window.dispatchEvent(new Event('locationchange'))
            const url = window.location.href;

            this.loadPage(url);
            console.log('test');
        });
    },

    loadPage(url) {
        const title = this.getTitle(url);
        console.log(title)
        const home = this.home;
        console.log(window.location.href.indexOf(url), url, window.location.href);

        if (url !== '#' && window.location.href.indexOf(url) < 1) {
            $(WRAPPER).load(url + ' ' + WRAPPER + '>*', function () {

                Hamburger.hide();
                history.pushState('', title, url)
                console.log('New link');

                if (home) {
                    home.classList.remove('home');
                }
            });
        }
    },

    getTitle(url) {
        return fetch(url)
            .then((response) => response.text())
            .then((html) => {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                const title = doc.querySelectorAll('title')[0];
                console.log(title.innerText);

                document.querySelector('title').innerText = title.innerText;
            });
    },
}

export default menu;