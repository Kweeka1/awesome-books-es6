import showDateTime from './modules/dateTime.js';
import { addNavLinksEventListener, addSectionEl } from './modules/showHideComponents.js';
import initializeAwesomeBooks from './modules/awesomeBooks.js';

const formEl = document.querySelector('form');
const containerEl = document.getElementById('book-detail');
const navLinks = document.querySelectorAll('.menu-items li');
const currentDateEl = document.getElementById('current-date');
const booksSection = document.getElementById('book-container');
const addBookSection = document.getElementById('book-form');
const contactSection = document.getElementById('contact-info');

initializeAwesomeBooks(formEl, containerEl);

// add SPA functionality
addSectionEl(booksSection, addBookSection, contactSection);
addNavLinksEventListener(navLinks);

showDateTime(currentDateEl);

setInterval(() => {
  showDateTime(currentDateEl);
}, 1000);
