const btnNext1 = document.querySelector('.btn-next')
const bntBack1 = document.querySelector('.btn-back')
const bntBack2 = document.querySelector('.btn-back2')
const btnNext2 = document.querySelector('.btn-next2')
const firstScreen = document.querySelector('.firstscreen')
const secondScreen = document.querySelector('.secondscreen')
const thirdScreen = document.querySelector('.thirdscreen')
btnNext1.addEventListener('click', function() {
    firstScreen.style.display = 'none'
    if(firstScreen.style.display = 'none'){
        secondScreen.style.transition = 'all 2s'
        secondScreen.style.display = 'block'
    }else{
        console.log('Error')
    }
})
bntBack1.addEventListener('click', function() {
    firstScreen.style.display = 'block'
    secondScreen.style.display = 'none'
})
btnNext2.addEventListener('click', function() {
    secondScreen.style.display = 'none'
    thirdScreen.style.display = 'block'
})
bntBack2.addEventListener('click', function() {
    thirdScreen.style.display = 'none'
    secondScreen.style.display = 'block'
})

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block'
//     }
//     trans() {
//         transition.begin(this.$el, ["1s", "ease-in-out"]);
//     }
// }

// class Slider extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.addEventListener('click', function() {
//                 this.$el.style.display = 'none'
//                 this.$el.trans()
//                 this.$el.style.display = 'block'
//             })
//     }
    
// }

// const slider1 = new Slider({
//     selector: '.firstscreen'

// })
// const btnNext1 = new Slider({
//     selector: '.btn-next'
// })

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByTagName('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        if(error = 0) {

        }else {
            alert('Заполните обязательное поле');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for(let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);
            if(input.classList.contains('_email')){
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }else if(input.getAttribute("type" === 'checkbox' && input.checked === false)){
                    formAddError(input);
                    error++;
                }else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
})