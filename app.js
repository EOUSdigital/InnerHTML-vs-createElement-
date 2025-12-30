l"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 09. InnerHTML vs createElement()

//TODO  3. Guided Practice – Using Your Current HTML

//? Task 1 – Replace “New Tasks” with innerHTML
//  Goal: see how innerHTML wipes and replaces content.

//  1. Select the “New Tasks” list:

const newTasksList = document.querySelector("#section3 .tasks");

//  2. Use innerHTML to completely replace its content:

if  (newTasksList) {
    newTasksList.innerHTML = `
    <li class="task>Task A - From innerHTML</li>
    <li class="task>Task B - From innerHTML</li>
    <li class="task>Task C - From innerHTML</li>
    `;
}

//? Task 2 – innerHTML and event listeners (why it is risky)
//  Goal: understand that innerHTML destroys existing nodes and their listeners.

//* 1. Add a click listener to the “My Tasks” items:

const myTasksList = document.querySelector("#section4 .tasks");

if (myTasksList) {
    myTasksList.addEventListener("click", (event) => {
        const li = event.target.closest(".task");
        if (!li) return;
        li.classList.toggle("task--selected");
    });
}

//* 2. Test it:

//* 3. Now, later in the same file, overwrite innerHTML of #section4 .tasks:

if (myTasksList) {
    myTasksList.innerHTML = `
    <li class="task">New Task 1 - Rewritten via innerHTML</li>
    <li class="task">New Task 2 - Rewritten via innerHTML</li>
    `;
}

//* 4. Test again:


































