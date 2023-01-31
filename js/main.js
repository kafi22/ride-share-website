// THE NAVBAR TOGGLE 

const burgerIcon = document.querySelector('.burger');

const navBar = document.querySelector('#navbar');

const navLink =  document.querySelectorAll('.menu-links');


burgerIcon.addEventListener('click', () => {
     
      navBar.classList.toggle('active-nav')
      burgerIcon.classList.toggle('toggle')

      navLink.forEach(item => {
            item.addEventListener('click', () => {
            navBar.classList.remove('active-nav')
            burgerIcon.classList.remove('toggle')
            })
      })

      
})


