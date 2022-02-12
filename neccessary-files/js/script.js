/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const items = 9;

const showPage = (list, page) => {
   const startIndex = (page * items) - items; 
   const endIndex = page * items;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let showStudent =  
         `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`;

       studentList.insertAdjacentHTML('beforeend', showStudent);
      };
   };
};





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = list => {
   const numOfButtons = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 0; i < numOfButtons; i++) {
      const showButton = `
         <li>
            <button type="button">${i + 1}</button>
          </li>`;
       linkList.insertAdjacentHTML('beforeend', showButton); 
   };
   const activeButton = document.querySelector('button[type="button"]');
   activeButton.className = 'active';
   linkList.addEventListener('click', (e) => {
      if (e.target = activeButton) {
         e.classList.remove('active');
      }
   });
};





// Call functions

showPage(data,1);
addPagination(data);






