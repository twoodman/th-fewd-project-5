(() => {
  // grab mobile nav
  const mobNav = document.querySelector('.mobile-nav')
  // grab mobile nav button
  const mobNavButton = document.querySelector('.mobile-nav__button')
  // grab mobile nav links
  const mobNavLinks = document.querySelectorAll('.mobile-nav__list-link')

  // on mobile nav button click
  mobNavButton.addEventListener('click', (event) => {
    event.preventDefault()
    // if its open
    if (mobNav.classList.contains('active')) {
      // close it
      mobNav.classList.remove('active')
    } else {
      // otherwise open it
      mobNav.classList.add('active')
    }
  })

  // add click event listeners to each mobile nav link
  for (let i = 0; i < mobNavLinks.length; i++) {
    mobNavLinks[i].addEventListener('click', () => {
      // close mobile nav on link click
      mobNav.classList.remove('active')
    })
  }
})()
