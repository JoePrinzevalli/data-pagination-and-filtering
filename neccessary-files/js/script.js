
// Script.js file contains both functions to dosplay 9 students per page and pagination buttons//




// This function selects 9 students from the data.js file (using the items variable) and dynaimcally displays them in the browser // 

const items = 9;

const showPage = (list, page, search) => {
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

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', (e) => {
      const searchValue = e.target.value.toLowerCase();
      // put regular expresssion here? or does .toLowerCase() solve this //
      for (let i = 0; i < list.length; i++) {
         if(searchValue.includes(list[i].name)) {
            console.log('this if condition works')
            // create new list display here?? /
            let searchList = document.createElement('li');
         }
      }
    });
};





/*
This function dynaimcally inserts a number of pagination buttons located at the bottom of the browser. The number of pagination buttons is determined on how many studnets arte in the data.js file.The number of buttons will be the number of students divided by 9.
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
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').classList.remove('active');
         e.target.classList.add('active');
         let pageNum = e.target.textContent;
         showPage(list, pageNum);
      };
   });
};


// Calls all the functions written in this file.//

showPage(data,1,);
addPagination(data);



// Commented out code for search bar, will end up deleting before submitting project(may want to use some of these components) //

// This function dynamically inserts a search bar into the browser, allowing the user to search for specifc students //

// const searchBar = (list) => {
//    const header = document.querySelector('header');
//    let searchButton = document.createElement('input');
//    searchButton = 
//       `<label for="search" class="student-search">
//       <span>Search by name</span>
//       <input id="search" placeholder="Search by name...">
//       <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
//       </label>`
//     header.insertAdjacentHTML('beforeend', searchButton);

//    let searchInput = document.getElementById('search').value;
//    searchInput = searchInput.toLowerCase();
//    for (let i = 0; i < list.length; i++) {
//       if(searchInput.value) {
//          studentSearch = document.createElement('li')

//       }
//       };
   
   
   
//    // searchInput.addEventListener('click', (e) => {
//    //    if (e.target.tagName === 'INPUT') {
//    //       for (let i = 0; i < list.length; i++) {

//    //       };
//    //    };
//    // });

// }






