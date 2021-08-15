# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop

![](./screenshot/desktop.png)

#### Mobile

![](./screenshot/mobile.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/mobile-first-scss-and-vanilla-javascript-HggtIXVRX)
- [Live Demo](https://jol-sunnyside-landing-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript
- SCSS

### What I learned

From this challange, i learned how to use SCSS and Mobile-first workflow. Also i learned how to make collapse-menu closed wherever i click and when the window size more than 768px.

```js
function clearMenu() {
  const menu = document.querySelector("nav ul");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.remove("menu-collapse");
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".hamburger-icon")) {
    clearMenu();
  }
};

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width:768px)").matches) {
    clearMenu();
  }
});
```

### Continued development

For the next challange, i would like to make a website using Tailwind CSS library.

### Useful resources

- [CSS-TRICKS](https://css-tricks.com) - This helped me for understanding how flexbox and grid works.
- [W3Schools](https://www.w3schools.com) - This helped me for remember HTML and CSS properties and also JavaScript.
- [Stack Overflow](https://stackoverflow.com) - This helped me for understanding JavaScript.

## Author

- Frontend Mentor - [@jolangker](https://www.frontendmentor.io/profile/jolangker)
- Instagram - [@thoriqqq1](https://instagram.com/thoriqqq1)
