const promoContentListCont = document.querySelectorAll('.promo_content__list-cont')
const promoContentListItem = document.querySelectorAll('.promo_content__list-item')

promoContentListItem.forEach(b => {
    b.addEventListener('click', function() {
        let index = Array.from(promoContentListItem).indexOf(this);
        promoContentListCont[index].classList.toggle('none');
    });
});


const hamburger = document.querySelector('.hamburger')
const listItemSpanContainer = document.querySelector('.list_item__spanContainer')
const hamburgerBlockCross = document.querySelector('.hamburger_block__cross')

listItemSpanContainer.addEventListener('click', () => {
    hamburger.classList.remove('humburgerNone')
})

hamburgerBlockCross.addEventListener('click', () => {
    hamburger.classList.toggle('humburgerNone')
})