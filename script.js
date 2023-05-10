const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    name: 'TPPS April Conference',
    technologies: ['CSS', 'JavaScript', 'html', 'gitflow'],
    featuredImage: 'Images/desktop-capstone1.png',
    description:
      "This website (purely fictional) is to raise awareness for a developers' program aimed at supporting programmers all over the world.",
    liveLink: 'https://cisco-the-wayword.github.io/TPPS-Conference/',
    linkSource: 'https://github.com/Cisco-the-wayword/TPPS-Conference',
  },
  {
    name: 'Top streaming movies',
    technologies: ['CSS', 'JavaScript', 'html', 'webpack'],
    featuredImage: 'Images/topmovies.png',
    description:
      "This project is a webapp that involves the integration of APIs in getting and sending responses and displaying them correctly on the web application",
    liveLink: 'https://melodic-daffodil-777db0.netlify.app/',
    linkSource: 'https://github.com/federicaulzurrun/capstoneTwoJavaScript',
  },
  {
    name: 'Leaderboard',
    technologies: ['CSS', 'JavaScript', 'html', 'webpack'],
    featuredImage: 'Images/leaderboard.png',
    description:
      "This project is for the integration of API's by creating a web application for a score board that collects user information (name and score) and displays them on a score board numerically",
    liveLink: 'https://cisco-the-wayword-leaderboard.netlify.app/',
    linkSource: 'https://github.com/Cisco-the-wayword/Leaderboard',
  },
  {
    name: 'To-do List',
    technologies: ['CSS', 'JavaScript', 'html', 'webpack'],
    featuredImage: 'Images/todolist.png',
    description:
      "This project is for a To-do list application that helps the user keep track of pending actions and acts as a reminder to get them done.",
    liveLink: 'https://cisco-the-wayword.github.io/list/',
    linkSource: 'https://github.com/Cisco-the-wayword/To-do-list',
  },
  {
    name: 'Math-Magicians',
    technologies: ['JavaScript', 'CSS', 'html', 'React'],
    featuredImage: 'Images/math-magicians.png',
    description:
      "This project is a calculator web application that allows users to perform basic calculator operations and displays the answer correctly. It also has a quote section that uses an external API to generate random codes to serve as motivation for users.",
    liveLink: 'https://cisco-the-wayword-math-magicians.netlify.app/',
    linkSource: 'https://github.com/Cisco-the-wayword/Math-magicians',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'html'],
    featuredImage: 'Images/snapshot.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
];
function generateWorkCard() {
  projects.forEach((project, index) => {
    let technology = '';
    project.technologies.forEach((tech) => {
      technology += `<li>${tech}</li>`;
    });
    document.querySelector('.row').innerHTML += `
      <div class="block">
        <div class="gray-area">
         <img src="${project.featuredImage}" class="gray-area">
        </div>
        <div class="description">
            <h4 class="post">${project.name}</h4>
            <nav class="tags">
                <ul>
                    ${technology}
                </ul>
            </nav>
            <div class="button-space">
                <button type="button" data-index="${index}" class="project-text btn popup-window">See Project</button>
            </div>
        </div>
      </div>
      `;
  });
}
generateWorkCard();
const popupModals = document.querySelectorAll('.popup-window');
const closeModal = document.querySelector('.close-button');
function openModal(element) {
  const projectIndex = element.dataset.index;
  document.querySelector('.popup-header').textContent = projects[projectIndex].name;
  document
    .querySelector('.modal-project-image')
    .setAttribute(
      'src',
      `${projects[projectIndex].featuredImage}`,
    );
  document
    .querySelector('.modal-project-image')
    .setAttribute('alt', `${projects[projectIndex].name}`);
  document
    .querySelector('.moblie-see-live')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.moblie-see-source')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  document
    .querySelector('.desktop-see-live')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.desktop-see-source')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  let technology = '';
  projects[projectIndex].technologies.forEach((tech) => {
    technology += `<div class="tag">${tech}</div>`;
  });
  document.querySelector('.project-codekit .tags').innerHTML = technology;
  document.querySelector('.modal-project-description').textContent = projects[projectIndex].description;
  document.querySelector('.modal').style.display = 'flex';
}
popupModals.forEach((modal) => [
  modal.addEventListener('click', () => {
    openModal(modal);
  }),
]);

closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

const form = document.querySelector('#formspree');
const errorEmail = document.querySelector('#email_error');
function validateEmail(input) {
  const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
  return emailRegex.test(input);
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email.value);
  if (!emailValid) {
    errorEmail.style.display = 'block';
  } else {
    errorEmail.style.display = 'none';
    form.submit();
  }
});

form.addEventListener('keyup', () => {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('data', JSON.stringify(data));
});

function getData() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('message').value = data.message;
  }
}
getData();
