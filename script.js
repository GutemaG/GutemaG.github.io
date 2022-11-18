const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const navItems = document.querySelectorAll('.nav-item');

const toggleClassList = (element, className) => {
  element.classList.toggle(className);
};

openMenu.addEventListener('click', () => {
  toggleClassList(menu, 'active');
  toggleClassList(openMenu, 'hide');
  toggleClassList(closeMenu, 'show');
});

closeMenu.addEventListener('click', () => {
  toggleClassList(menu, 'active');
  toggleClassList(openMenu, 'hide');
  toggleClassList(closeMenu, 'show');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    toggleClassList(menu, 'active');
    openMenu.classList.remove('hide');
    closeMenu.classList.remove('show');
  });
});

const createClientRoleYear = (client, role, year) => (
  `
    <li class="client">${client}</li>
    <li class="role">${role}</li>
    <li class="year">${year}</li>
  `
);

const portfolios = [
  {
    id: 'portfolio1',
    name: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'assets/images/snapshoot-portfolio-1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
    featured: '',
    clientRoleYear: createClientRoleYear('CANOPY', 'Back End Dev', '2022'),
  },
  {
    id: 'portfolio2',
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'assets/images/snapshoot-portfolio-2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
    featured: '',
    clientRoleYear: createClientRoleYear('CANOPY', 'Back End Dev', '2020'),
  },
  {
    id: 'portfolio3',
    name: 'Facebook 360',
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'assets/images/snapshoot-portfolio-3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
    featured: '',
    clientRoleYear: createClientRoleYear('CANOPY', 'Back End Dev', '2021'),

  },
];

const works = document.querySelector('#portfolio');

const createCardContent = (obj) => {
  const content = `
    <div class="portfolio-snapshot">
      <img
        src="${obj.image}"
        alt="${obj.name}-image"
      >
    </div>
    <div class="left-block">
      <div class="portfolio-info">
        <h1 class="portfolio-title">${obj.name}</h1>
        <ul class="client-role-year">
          ${obj.clientRoleYear}
        </ul>
      </div>
      <p class="portfolio-description">
        ${obj.description}
      </p>
      <div>
        <ul class="tags">
        ${obj.technologies.map((technology) => `<li class="tag">${technology}</li>`).join('')}
        </ul>
      </div>
      <div class="actions">
        <button class="action action-text btn" id='${obj.id}'">See Project</button>
      </div>
    </div>
  `;
  return content;
};

const portfolioTitle = document.querySelector('.modal .portfolio-title');
const modalImage = document.querySelector('.modal-image img');
const portfolioDescription = document.querySelector('.modal .portfolio-description');
const liveLink = document.querySelector('#live-link');
const sourceLink = document.querySelector('#source-link');
const technologies = document.querySelector('.modal-bottom-right .technologies');
const clientRoleYear = document.querySelector('.modal .client-role-year');
const createCardDetailContent = (obj) => {
  portfolioTitle.textContent = obj.name;
  modalImage.setAttribute('src', obj.image);
  modalImage.setAttribute('alt', obj.name);
  portfolioDescription.textContent = obj.description;
  liveLink.setAttribute('href', obj.linkToLive);
  sourceLink.setAttribute('href', obj.linkToSource);
  technologies.innerHTML = '';
  for (let i = 0; i < obj.technologies.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('tag');
    listItem.textContent = obj.technologies[i];
    technologies.appendChild(listItem);
  }
  clientRoleYear.innerHTML = obj.clientRoleYear;
};

portfolios.forEach((portfolio) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = createCardContent(portfolio);
  works.append(cardElement);
});

const modal = document.querySelector('.modal-container');
portfolios.forEach((portfolio) => {
  const seeProjectButton = document.querySelector(`#${portfolio.id}`);
  seeProjectButton.addEventListener('click', () => {
    createCardDetailContent(portfolio);
    modal.style.display = 'flex';
  });
});

const closeModalContainer = document.querySelector('.close-container');
closeModalContainer.addEventListener('click', () => {
  modal.style.display = 'none';
});

const form = document.querySelector('.contact-form');
const errorMessageContent = document.querySelector('.error-message');

const showErrorMessage = (msg) => {
  errorMessageContent.textContent = msg;
  errorMessageContent.style.display = 'inline';
};

const hideErrorMessage = () => {
  errorMessageContent.textContent = '';
  errorMessageContent.style.display = 'none';
};

const isLowerText = (content) => (
  content.trim() === content.trim().toLowerCase()
);

const storeFormData = (key, value) => {
  localStorage.setItem(key, value);
};

const EMAIL_ERROR_MESSAGE_UPPERCASE_ERROR = 'Make sure the email is in lowercase';
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;
  if (!isLowerText(email)) {
    showErrorMessage(EMAIL_ERROR_MESSAGE_UPPERCASE_ERROR);
  } else {
    hideErrorMessage();
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    storeFormData('form-data', JSON.stringify(formData));
    form.submit();
  }
});

form.email.addEventListener('keyup', (event) => {
  if (!isLowerText(event.target.value)) {
    showErrorMessage(EMAIL_ERROR_MESSAGE_UPPERCASE_ERROR);
  } else {
    hideErrorMessage();
  }
});

const setFormDataFromLocalStorage = (formData) => {
  form.name.value = formData.name;
  form.email.value = formData.email;
  form.message.value = formData.message;
};

window.onload = () => {
  let formData = localStorage.getItem('form-data');
  if (formData) {
    formData = JSON.parse(formData);
    setFormDataFromLocalStorage(formData);
  }
};