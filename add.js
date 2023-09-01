const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menu = document.querySelector('.sidebar')
const showMore = document.querySelector('.card-btn')
const card = document.querySelectorAll('.card-link--hidden')


sidebarToggleBtn.onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active')
    menu.classList.toggle('sidebar--mobile-active')
}

showMore.addEventListener('click', function () {
    card.forEach(function (hidd) {
        hidd.classList.toggle('card-link--hidden')
    })
})



const widgets = document.querySelectorAll('.widget')


widgets.forEach(function (widget) {

    widget.addEventListener('click', function (e) {

        if (e.target.classList.contains('widget-title')) {
            e.target.classList.toggle('widget-title--active')
            widget.querySelector('.widget-body').classList.toggle('widget-body--hidden')
        }
    })
})

const MoreShow = document.querySelector('.link-shiw-more')

const checkBoxs = document.querySelectorAll('.checkbox')
console.log(checkBoxs)
MoreShow.onclick = function () {
    checkBoxs.forEach(function (items) {
        items.classList.remove('none')
    })
}