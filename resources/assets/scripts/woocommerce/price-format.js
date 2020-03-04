
const CONFIG = {
    ELEMENT: '[data-price]',
    SIGN: '.',
}

const priceFormat = {
    init() {
        console.log('Init price')

        const { ELEMENT, SIGN } = CONFIG;
        this.elements = document.querySelectorAll(ELEMENT);
        this.sign = SIGN;

        this.format();
    },

    format() {
        const smallPrice = this.smallPrice;

        this.elements.forEach((element) => {
            const val = element.innerText;
            const splited = val.split(this.sign);

            element.innerText = splited[0] ;
            element.appendChild(smallPrice(splited[1]));
        });
    },

    smallPrice(val) {

        const smallPrice = document.createElement('span');

        smallPrice.classList.add('subtitle', 'bold');
        smallPrice.innerHTML = '.' + val;

        return smallPrice;
    },
}

export default priceFormat;