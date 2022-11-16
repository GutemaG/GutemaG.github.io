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

const portfolios = {
  portfolio1: {
    id: 1,
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

  portfolio2: {
    id: 2,
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
};

const modalContainer = document.querySelector('.modal-container');
const works = document.querySelector('#portfolio');

const cardContent = (obj) => {
  const content = `
        <div class="portfolio-snapshot">
          <img
            src="${obj.image}"
            alt="portfolio-1"
          />
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
           ${obj.description}
          </p>
          <div>
            <ul class="tags">
              <li class="tag">HTML</li>
              <li class="tag">CSS</li>
              <li class="tag">JavaScript</li>
            </ul>
          </div>
          <div class="actions">
            <button class="action action-text btn" id="see-project-1" onclick='showDetailModal(${obj.id})'>See Project</button>
          </div>
        </div>
`;
  return content;
};

for (const portfolio in portfolios) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = cardContent(portfolios[portfolio]);
  works.append(cardElement);
}

const modalContent = (obj) => {
  const content = `
    <div class="modal">
      <div class="modal-top">
        <div class="modal-header">
          <h1>${obj.name}</h1>
          <button class="close-container" onclick=closeModal()>
            <!-- <img src="icons/close-menu.svg" alt="close-menu-icon" class="close-menu"> -->
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ul class="client-role-year">
          <li class="client">CANOPY</li>
          <li class="role">Back End Dev</li>
          <li class="year">2015</li>
        </ul>
      </div>
      <div class="modal-image">
        <img
          src="${obj.image}"
          alt="Portfolio-1"
        />
      </div>
      <div class="modal-bottom">
        <p class="portfolio-description">
          ${obj.description}
        </p>
        <ul class="tags">
          <li class="tag">HTML</li>
          <li class="tag">CSS</li>
          <li class="tag">JavaScript</li>
        </ul>
        <hr >
        <div class="project-btn">
          <a href=${obj.linkToLive}>
            <button class="btn">
              See live
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </a>
          <a href=${obj.linkToSource}>
            <button class="btn">
              See Source
              <i class="fa-brands fa-github"></i>
            </button>
          </a>
        </div>
      </div>
  </div>
  `;

  return content;
};

const findPortfolio = (id) => {
  for (const portfolio in portfolios) {
    if (portfolios[portfolio].id === id) {
      return portfolios[portfolio];
    }
  }
  return {};
};

const showDetailModal = (portfolioId) => {
  modalContainer.style.display = 'block';
  const portfolio = findPortfolio(portfolioId);
  modalContainer.innerHTML = modalContent(portfolio);
};

const closeModal = () => {
  modalContainer.style.display = 'none';
};
