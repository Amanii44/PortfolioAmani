
// Menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Dark mode toggle
const darkModeIcon = document.getElementById('darkmode');
darkModeIcon.addEventListener('click', () => {
  document.body.classList.toggle('active');
});

// Scroll reveal for sections
const revealElements = document.querySelectorAll('.reveal');
const bars = document.querySelectorAll('.bars-box');
window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('active');
  });
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) bar.classList.add('active');
  });
});

// Load more projects
const moreBtn = document.getElementById('loadMore');
moreBtn.addEventListener('click', () => {
  const container = document.querySelector('.projects-container');
  const extra = [
    {title:'Digital Dashboard Design',desc:'Interactive dashboard using Power BI and wireframes.',icon:'bx-bar-chart'},
    {title:'Process Automation Proposal',desc:'Document proposing automation for SFDA workflows.',icon:'bx-gear'},
  ];
  extra.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${p.title}</h3><div class="project-info"><p>${p.desc}</p></div>`;
    container.appendChild(card);
  });
  moreBtn.style.display = 'none';
});
