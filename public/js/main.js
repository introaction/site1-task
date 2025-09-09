'use strict';

window.addEventListener('load', () => {
  setupMenu()
  setupAccordion()
})


/* the Menu section */

function setupMenu () {
  const $menuButton = document.getElementById('header-menu-button')
  const $menuContainer = document.getElementById('header-menu-container')
  $menuButton.addEventListener('click', () => {
    $menuContainer.classList.toggle(CLASS_MENU_OPENED)
  })
  $menuContainer.addEventListener('click', evt => {
    if (evt.target === $menuContainer) { // the overlay's background clicked
      $menuContainer.classList.remove(CLASS_MENU_OPENED)
    }
  })
}

const CLASS_MENU_OPENED = 'header__menu-container--opened'


/* the Accordion component */

function setupAccordion () {
  document.addEventListener('click', evt => {
    const $control = evt.target.closest('.accordion__question')
    if ($control) {
      const $item = $control.closest('.accordion__item')
      if ($item) {
        $item.classList.toggle(CLASS_ACCORDION_EXPANDED)
        const ariaExpanded = $control.getAttribute('aria-expanded') === 'true'
        $control.setAttribute('aria-expanded', String(!ariaExpanded))
      }
    }
  })
}

const CLASS_ACCORDION_EXPANDED = 'accordion__item--expanded'