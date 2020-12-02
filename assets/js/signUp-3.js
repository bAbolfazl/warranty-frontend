// vars
const discountBtn = document.querySelector('#discount-btn')
const discountCont = document.querySelector('#discount-cont')
const term = document.querySelector('#term')
const submit = document.querySelector('#submit')

// funcs
const handle_discountBtn_click = () => {
    discountBtn.classList.add('hide')
    discountBtn.classList.remove('show')

    discountCont.classList.remove('hide')
    discountCont.classList.add('show')
}
const handle_term_checked = (e) => {
    console.log(e.target.checked)
    if (e.target.checked) submit.removeAttribute("disabled");
    else submit.setAttribute("disabled","true")
}

// events
discountBtn.addEventListener('click', handle_discountBtn_click)
term.addEventListener('change', handle_term_checked)
