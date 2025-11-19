import './scss/modules.scss';
import 'simplebar/dist/simplebar.min.css';
import 'virtual:svg-icons/register';
import { StickyNav, ToggleNav } from './components/header/_header';
import './components/contacts/_contacts.js';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', function () {
    const stickyNav = new StickyNav();
    const toggleNav = new ToggleNav();

    stickyNav.init();
    toggleNav.init();

    window.stickyNavInstance = stickyNav;
    window.toggleNavInstance = toggleNav;
});