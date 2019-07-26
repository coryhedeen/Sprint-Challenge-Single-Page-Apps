// <div class="menu">
//   <ul>
//     <li>Students</li>
//     <li>Faculty</li>
//     <li>What's New</li>
//     <li>Tech Trends</li>
//     <li>Music</li>
//     <li>Log Out</li>
//   </ul>
// </div>

const header = document.querySelector('.header')

header.appendChild(menuCreator);

function menuCreator(){
  const menu = document.createElement('div')
  menu.classList.add('menu')
  const menuTitle = document.createElement('ul')
  const students = document.createElement('li')
  const faculty = document.createElement('li')
  const whatsNew = document.createElement('li')
  const techTrends = document.createElement('li')
  const music = document.createElement('li')
  const logOut = document.createElement('li')
  const menuButton = document.querySelector('menu-button')

  students.textContent = "Students";
  faculty.textContent = "Faculty";
  whatsNew.textContent = "What's New";
  techTrends.textContent = "Tech Trends";
  music.textContent = "Music";
  logOut.textContent = "Log Out";

  menu.appendChild(menuTitle);
  menuTitle.appendChild(students);
  menuTitle.appendChild(faculty);
  menuTitle.appendChild(whatsNew);
  menuTitle.appendChild(techTrends);
  menuTitle.appendChild(music);
  menuTitle.appendChild(logOut);

// document.body.appendChild(menu)

  menu.addEventListener('click', toggleHandler)

  function toggleHandler(){
    menuButton.classList.toggle('menu--open')

return menu
}
