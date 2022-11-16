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
  },
];

const works = document.querySelector('#portfolio');

const createCardContent = (obj) => {
  const content = `
    <div class="portfolio-snapshot">
      <img
        src="${obj.image}"
        alt="portfolio-1"
      >
    </div>
    <div class="left-block">
      <div class="portfolio-info">
        <h1 class="portfolio-title">${obj.name}</h1>
        <ul class="client-role-year">
          <li class="client">CANOPY</li>
          <li class="role">Back End Dev</li>
          <li class="year">2015</li>
        </ul>
      </div>
      <p class="portfolio-description">
        A daily selection of privately personalized reads; no accounts or
        sign-ups required.
      </p>
      <div>
        <ul class="tags">
          <li class="tag">HTML</li>
          <li class="tag">CSS</li>
          <li class="tag">JavaScript</li>
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
