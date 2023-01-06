const cousesContainer1 = document.querySelector('.cousesContainer1');
const cousesContainer2 = document.querySelector('.cousesContainer2');
const moreCourses = document.querySelector('.moreCourses');

const courses = [
  {
    id: '0',
    imgSouce: 'assets/images/courses/course1.jpg',
    title: 'International Business Taxation',
    date: '16 May - 15 August 2022',
    text: 'This course will provide the essential knowledge and the network you need to achieve more in the field of international business taxation in just three months.',
  },
  {
    id: '1',
    imgSouce: 'assets/images/courses/course2.jpg',
    title: 'Fundamentals of Tax Treaties',
    date: '16 May - 15 August 2022',
    text: 'Gain a solid understanding of tax treaties – this course provides a solid grounding in the framework of international tax law and the principles of tax treaties.',
  },
  {
    id: '2',
    imgSouce: 'assets/images/courses/course3.jpg',
    title: 'Taxation of Indirect Asset Transfers',
    date: '24 January 2023',
    text: 'This webinar addresses a specific tax issue associated with the indirect transfer of assets that has been a hot topic for debate between taxpayers and tax authorities.',
  },
  {
    id: '3',
    imgSouce: 'assets/images/courses/course4.jpg',
    title: 'Employment and Related Income',
    date: '24 January 2023',
    text: 'Curious about how expatriates are taxed under tax treaties? takes you through both basic concepts and more situations that can arise in practice.',
  },
  {
    id: '4',
    imgSouce: 'assets/images/courses/course5.jpg',
    title: 'International Tax Planning',
    date: '24 January 2023',
    text: 'The basics of international tax planning, holding and financing activities and more, this course will outline the importance of both tax and non-tax considerations.',
  },
  {
    id: '5',
    imgSouce: 'assets/images/courses/course6.jpg',
    title: 'Transfer Pricing and Intra-Group Financing',
    date: '24 January 2023',
    text: 'This course is designed to be practical and includes tools, checklists, roadmaps and address, substantiate and price intragroup financial transactions.',
  },
];

const cousesDisplay = (course, cousesContainer) => {
  const cousesDisplayDiv = document.createElement('div');
  cousesDisplayDiv.classList.add(
    'card',
    'd-flex',
    'flex-row',
    'mb-4',
    'border-0',
  );
  cousesDisplayDiv.innerHTML = `
              <div class="images position-relative">
                <img src="assets/images/hero/behind-pix-desktop.png" class="img1" alt="behind-pix-desktop" />
                <img src=${course.imgSouce} class="img2" alt="course"/>
              </div>

              <div class="card-body text-start ps-0">
                <h3 class="card-title"><b>${course.title}</b></h3>
                <p class="card-text orangeColor fst-italic mb-2">${course.date}</p>
                <hr class="m-0" />
                <p class="card-text">${course.text}</p>
              </div>`;
  cousesContainer.appendChild(cousesDisplayDiv);
};

courses.forEach((course, index) => {
  if (index < 3) {
    cousesDisplay(course, cousesContainer1);
  } else {
    cousesDisplay(course, cousesContainer2);
  }
});

const myMediaQuery = window.matchMedia('(max-width: 768px)');
function widthChangeCallback(myMediaQuery) {
  cousesContainer1.innerHTML = '';
  cousesContainer2.innerHTML = '';
  if (myMediaQuery.matches) {
    courses.forEach((course, index) => {
      if (index < 2) {
        cousesDisplay(course, cousesContainer1);
      }
    });
    moreCourses.style.display = 'block';
  } else {
    courses.forEach((course, index) => {
      if (index < 3) {
        cousesDisplay(course, cousesContainer1);
      } else {
        cousesDisplay(course, cousesContainer2);
      }
    });
  }
}
myMediaQuery.addEventListener('change', widthChangeCallback);

moreCourses.onclick = function () {
  courses.forEach((course, index) => {
    if (index === 2) {
      cousesDisplay(course, cousesContainer1);
    } else if (index > 2) {
      cousesDisplay(course, cousesContainer2);
    }
  });
  moreCourses.style.display = 'none';
};
