const CONFIG = {
    TRIGGER: '.menu-item-has-children',
    MENU: '.menu',
    CLASS: '-is-active',
    OFFANIMATION: '-no-animate',
};

const { TRIGGER, MENU, CLASS, OFFANIMATION } = CONFIG;

const menu = {
    init() {
        this.trigger = document.querySelectorAll(TRIGGER);
        this.menu = document.querySelector(MENU);

        this.class = CLASS;
        this.offanimation = OFFANIMATION;
        this.addEvents();
    },

    addEvents() {
        this.trigger.forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault();

                const $this = e.currentTarget;

                this.trigger.forEach(element => { element.classList.remove(this.class) });

                $this.classList.add(this.class);
                this.menu.classList.add(this.class);


                console.log('Test kliku');
            });
        });
    },
}

export default menu;