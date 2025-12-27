const list = document.querySelectorAll('.item')
const next = document.getElementById('next')
const prev = document.getElementById('prev')


let count = list.length // 3
let active = 0

next.addEventListener('click', () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count - 1 ? 0 : active + 1
    list[active].classList.add('active')

})

prev.addEventListener('click', () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active > 0 ? active  - 1 : count -1
    list[active].classList.add('active')
})