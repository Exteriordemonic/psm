var Flickity = require('flickity');

const CONFIG = {
    ELEM: '.gallery__slider',
    CELL: '.gallery__elem',
    BUTTON: 'data-gallery-button',
};

const gallery = {
    init() {
        const { ELEM, BUTTON } = CONFIG;
        this.elem = document.querySelectorAll(ELEM);
        this.button = document.querySelectorAll(`[${BUTTON}]`);

        this.sliders = [];
        console.log('this.elem', this.elem.length);
        if (this.elem.length) {
            this.createSlider();
            this.resize();
            this.addEvents();
        }
    },

    addEvents() {
        this.button.forEach(elem => {
            elem.addEventListener('click', e => {
                const $this = e.currentTarget;
                const dir = $this.dataset.galleryButton;

                if(dir === 'next') this.sliders[0].next();
                if(dir === 'prev') this.sliders[0].previous();

                console.log(dir)
            })
        });
    },

    createSlider() {
        const { CELL } = CONFIG;

        this.elem.forEach(element => {
            console.log(element);
            const slider = new Flickity(element, {
                pageDots: false,
                prevNextButtons: false,
                cellSelector: CELL,
                autoPlay: false,
                wrapAround: true,
            });

            console.log(slider);
            this.sliders.push(slider);
        });
    },

    resize() {
        console.log('resize INIT', this.sliders);
        if (this.sliders) {
            this.sliders.forEach(element => {
                console.log('resize');
                element.resize();
            });
        }
    },
};

export default gallery;