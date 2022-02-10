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

const showPage = (list, page) => {
   // for (let i = 0; i < list.length; i++) {
   //    let items = list[i];                //is this right? shoudl i do somehting else//
   //    return items;
   // }
   const startIndex = (page * items) - items; //what do the 'items' represent
   const endIndex = page * items;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const newLi = document.createElement('li');
         newLi.classList.add('student-item cf');
         const newDivStudent = document.createElement('div');
         newDivStudent.classList.add('student-details');
         const newImg = document.createElement('img'); //add an alt text to this at the end***//
         newImg.classList.add('avatar');
         const newH3 = document.createElement('h3');
         const newSpanEmail = document.createElement('span'); 
         newSpanEmail.classList.add('email');
         const newDivJoined = document.createElement('div');
         newDivJoined.classList.add('joined-details');
         const newSpanDate = document.createElement('span');
         newSpanDate.classList.add('date');

         studentList.insertAdjacentElement('beforeend', `${newLi}`);
      }

   }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
