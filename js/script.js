
// Script.js file contains both functions to display 9 students per page and pagination buttons//



 // formation of search button starts here //
 const header = document.querySelector('header');
 let searchButton = document.createElement('input');
 searchButton = 
    `<label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
    </label>`
  header.insertAdjacentHTML('beforeend', searchButton);

// This function filters the user's input into the search bar and matches it with the characters from data.js //
const list = document.querySelector('.student-list');
const handleSearch = (searchValue, studentList) => {
   let filteredNames = [];
   for (let i = 0; i < studentList.length; i++) {
     if (studentList[i].name.first.toLowerCase().includes(searchValue) || studentList[i].name.last.toLowerCase().includes(searchValue)) {
       filteredNames.push(studentList[i]);
     } 
   };

   if (filteredNames.length === 0) {
      list.innerHTML = '<li>No Results Found</li>';
      let li = list.firstChild;
      li.className = 'result';
      document.querySelector('.link-list').style.display = 'none';
    } else {
      document.querySelector('.link-list').style.display = 'initial';
      showPage(filteredNames,1);
      addPagination(filteredNames);
    }
 };

 // This event listener calls the handleSearch function //
 const searchInput = document.getElementById('search');
 searchInput.addEventListener('keyup', (e) => {
     const searchValue = e.target.value.toLowerCase();
     handleSearch(searchValue, data);
 });


// This function selects 9 students from the data.js file (using the items variable) and dynaimcally displays them in the browser // 

const items = 9;

const showPage = (list, page,) => {
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
This function dynaimcally inserts a number of pagination buttons located at the bottom of the browser. The number of pagination buttons is determined on how many studnets arte in the data.js file.The number of buttons will be the number of students divided by 9.
*/

const addPagination = list => {
   const numOfButtons = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list')
   linkList.innerHTML = '';
   for (let i = 0; i < numOfButtons; i++) {
      const showButton = `
         <li>
            <button type="button">${i + 1}</button>
          </li>`;
       linkList.insertAdjacentHTML('beforeend', showButton); 
   };

   // Code put in after project review//
   const firstList = linkList.firstElementChild;
   const firstButton = firstList.firstElementChild;
   firstButton.classList.add('active');
   
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').classList.remove('active');
         e.target.classList.add('active');
         let pageNum = e.target.textContent;
         showPage(list, pageNum);
      };
   });
};


// Calls the necessary functions //

showPage(data,1,);
addPagination(data);










