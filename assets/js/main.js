// console.log('main js running...')

// preloader
window.addEventListener('load', () => {
    document.querySelector('.pre-loader').style.display = 'none'
})


// utils
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
// Decimal round
if (!Math.round10) {
    Math.round10 = function (value, exp) {
        return decimalAdjust('round', value, exp);
    };
}
// Decimal floor
// if (!Math.floor10) {
//     Math.floor10 = function (value, exp) {
//         return decimalAdjust('floor', value, exp);
//     };
// }
// // Decimal ceil
// if (!Math.ceil10) {
//     Math.ceil10 = function (value, exp) {
//         return decimalAdjust('ceil', value, exp);
//     };
// }

// vars
const mobileMenu = document.querySelector('#mobile-menu')
const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
const mobileMenuClose = document.querySelector('#mobile-menu-close')

const firstInput = document.querySelector('#first-input')
const firstInputBtn = document.querySelector('#fitst-input-btn')
const firtstInputBtnText = document.querySelector('#firtst-input-btn-text')
const firstPhone = document.querySelector('#phone1')
const firstEmail = document.querySelector('#email1')

const secondInput = document.querySelector('#second-input')
const secondInputBtn = document.querySelector('#second-input-btn')
const secondInputBtnText = document.querySelector('#second-input-btn-text')
const secondPhone = document.querySelector('#phone2')
const secondEmail = document.querySelector('#email2')

const nubmer = document.querySelector('#number')
const nubmerF = document.querySelector('#number-f')
const decrease = document.querySelector('#decrease')
const increase = document.querySelector('#increase')
const increaseF = document.querySelector('#increase-f')
const decreaseF = document.querySelector('#decrease-f')
const users = document.querySelector('#users')
let fee = 8.99
let totall = fee
let no = 1
let feeF = 19.99
let totallF = feeF
let noF = 4



// funcs
const handle_mobileMenuBtn_click = () => {
    mobileMenu.classList.add('show--custom')
    mobileMenu.classList.remove('hide')
}
const handle_mobileMenuClose_click = () => {
    mobileMenu.classList.remove('show--custom')
    mobileMenu.classList.add('hide')
}
const handle_firstInputBtn_click = () => {
    firstInput.classList.remove('hide')
    firstInput.classList.add('show')
    firtstInputBtnText.innerText = 'Start the protection'
    if (firtstInputBtnText.classList.contains('sub')) {
        if (firstPhone.value == '') {
            firstPhone.classList.add('alert')
            firstPhone.parentNode.classList.add('alert-cont')
        }
        else {

            firstPhone.classList.remove('alert')
            firstPhone.parentNode.classList.remove('alert-cont')
        }
        if (firstEmail.value == '') {
            firstEmail.classList.add('alert')
            firstEmail.parentNode.classList.add('alert-cont')
        }
        else {
            firstEmail.classList.remove('alert')
            firstEmail.parentNode.classList.remove('alert-cont')
        }
    }
    firtstInputBtnText.classList.add('sub')
}
const handle_secondInputBtn_click = () => {
    secondInput.classList.remove('hide')
    secondInput.classList.add('show')
    secondInputBtnText.innerText = 'Start the protection'
    if (secondInputBtnText.classList.contains('sub')) {
        if (secondPhone.value == '') {
            secondPhone.classList.add('alert')
            secondPhone.parentNode.classList.add('alert-cont')
        }
        else {
            secondPhone.classList.remove('alert')
            secondPhone.parentNode.classList.remove('alert-cont')
        }
        if (secondEmail.value == '') {
            secondEmail.classList.add('alert')
            secondEmail.parentNode.classList.add('alert-cont')
        }
        else {
            secondEmail.classList.remove('alert')
            secondEmail.parentNode.classList.remove('alert-cont')
        }
    }
    secondInputBtnText.classList.add('sub')
}
const handle_decrease_click = () => {
    const moneyBig = document.querySelector('#money-big')
    const moneyLittle = document.querySelector('#money-little')
    // let totall = Number(moneyBig) + Number(moneyLittle)

    if (no > 1) {
        --no
        nubmer.innerText = no
        totall -= fee
        console.log(Math.round10(totall, -2))
        moneyBig.innerText = Math.floor(totall)
        moneyLittle.innerText = totall - Math.floor(totall)
        // console.log(totall - Math.floor(totall))
        moneyLittle.innerText = (Math.round10((Math.round10(totall, -2) - Math.floor(totall)), -2)).toString().substring(1, 4);
        if (no !== 1) {
            users.innerText = 'users'
        } else {
            users.innerText = 'user'
        }
    }
}
const handle_increase_click = () => {
    const moneyBig = document.querySelector('#money-big')
    const moneyLittle = document.querySelector('#money-little')
    // let totall = Number(moneyBig) + Number(moneyLittle)

    if (no < 4) {
        ++no
        nubmer.innerText = no
        totall += fee
        console.log(Math.round10(totall, -2))
        console.log(Math.floor(totall))
        moneyBig.innerText = Math.floor(totall)
        // moneyLittle.innerText = Math.round(totall - Math.floor(totall), -2)
        moneyLittle.innerText = (Math.round10((Math.round10(totall, -2) - Math.floor(totall)), -2)).toString().substring(1, 4);
        // console.log(Math.round(totall - Math.floor(totall), -3))
        if (no !== 1) {
            users.innerText = 'users'
        } else {
            users.innerText = 'user'
        }
    }
}
const handle_decreaseF_click = () => {
    const moneyBig = document.querySelector('#money-big-f')
    const moneyLittle = document.querySelector('#money-little-f')
    // let totall = Number(moneyBig) + Number(moneyLittle)

    if (noF > 4) {

        noF -= 4
        nubmerF.innerText = noF
        totallF -= feeF
        console.log(feeF)
        console.log(totallF)
        console.log(Math.round10(totallF, -2))
        moneyBig.innerText = Math.floor(totallF)
        moneyLittle.innerText = totallF - Math.floor(totallF)
        // console.log(totallF - Math.floor(totallF))
        moneyLittle.innerText = (Math.round10((Math.round10(totallF, -2) - Math.floor(totallF)), -2)).toString().substring(1, 4);
        // if (noF !== 1) {
        //     usersF.innerText = 'users'
        // } else {
        //     usersF.innerText = 'user'
        // }
    }
}
const handle_increaseF_click = () => {
    const moneyBig = document.querySelector('#money-big-f')
    const moneyLittle = document.querySelector('#money-little-f')
    // let totallF = Number(moneyBig) + Number(moneyLittle)

    if (noF < 16) {
        noF += 4
        nubmerF.innerText = noF
        totallF += feeF
        console.log(Math.round10(totallF, -2))
        console.log(Math.floor(totallF))
        moneyBig.innerText = Math.floor(totallF)
        // moneyLittle.innerText = Math.round(totallF - Math.floor(totallF), -2)
        moneyLittle.innerText = (Math.round10((Math.round10(totallF, -2) - Math.floor(totallF)), -2)).toString().substring(1, 4);
        // console.log(Math.round(totall - Math.floor(totall), -3))
        // if (noF !== 1) {
        //     usersF.innerText = 'users'
        // } else {
        //     usersF.innerText = 'user'
        // }
    }
}



// events
mobileMenuClose.addEventListener('click', handle_mobileMenuClose_click)
mobileMenuBtn.addEventListener('click', handle_mobileMenuBtn_click)
firstInputBtn.addEventListener('click', handle_firstInputBtn_click)
secondInputBtn.addEventListener('click', handle_secondInputBtn_click)
decrease.addEventListener('click', handle_decrease_click)
increase.addEventListener('click', handle_increase_click)
decreaseF.addEventListener('click', handle_decreaseF_click)
increaseF.addEventListener('click', handle_increaseF_click)


// aos Animation
AOS.init({
    delay: 150,
    offset: 75,
    duration: 1200,
}
);
