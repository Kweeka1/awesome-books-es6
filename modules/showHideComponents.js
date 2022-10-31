const sections = {
  bookSectionEl: null,
  createBookSectionEl: null,
  contactSection: null,
};

export const addSectionEl = (booksSectionEl, createBookSectionEl, contactSectionEl) => {
  sections.bookSectionEl = booksSectionEl;
  sections.createBookSectionEl = createBookSectionEl;
  sections.contactSectionEl = contactSectionEl;
};

const showComponent = (componentId) => {
  switch (componentId) {
    case 'book-container':
      sections.bookSectionEl.classList.add('visible');
      sections.createBookSectionEl.classList.remove('visible');
      sections.contactSectionEl.classList.remove('visible');
      break;
    case 'book-form':
      sections.bookSectionEl.classList.remove('visible');
      sections.createBookSectionEl.classList.add('visible');
      sections.contactSectionEl.classList.remove('visible');
      break;
    case 'contact-info':
      sections.bookSectionEl.classList.remove('visible');
      sections.createBookSectionEl.classList.remove('visible');
      sections.contactSectionEl.classList.add('visible');
      break;
    default:
      break;
  }
};

export const addNavLinksEventListener = (navLinks) => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      const componentId = ev.target.getAttribute('showComponent');
      showComponent(componentId);
    });
  });
};