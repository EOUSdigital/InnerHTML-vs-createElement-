"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 09. InnerHTML vs createElement()

//  Up to now you have:
//  • Selected elements (querySelector, querySelectorAll)
//  • Traversed (parentElement, children, nextElementSibling, childNodes, etc.)
//  • Created elements and inserted them (createElement, append, prepend)

//* In this lesson you compare two different ways of building/updating DOM:
//  1. innerHTML – string-based updates
//  2. createElement + DOM methods – node-based updates

//  You will:
//  • See what innerHTML really does to existing DOM.
//  • Understand when it is convenient vs when it is dangerous.
//  • Contrast it with a structured createElement approach.

//TODO  1. Conceptual Overview

//? 1.1 innerHTML

const list = document.querySelector(".tasks");
list.innerHTML =`
    <li class="task">Task 1</li>
    <li class="task">Task 2</li>
`;

//* What it does:
//  • Parses the string as HTML
//  • Removes all existing child nodes of list.
//  • Replaces them with new nodes built from the HTML string.

//* Pros:
//  • Very quick to write.
//  • Easy to paste in some HTML markup.
//  • Good for simple one-off content.

//* Cons:
//  • Blows away existing child nodes → you lose:
//      • Any data you attached to them.
//      • Any event listeners bound directly to those elements.
//  • More error-prone (typos in HTML, unclosed tags, etc.).
//  • Dangerous if you inject unsanitized user input (XSS).
//  • String concatenation can become messy and hard to maintain.

//? 1.2 createElement and friends

const li = document.createElement("li");
li.classList.add("task");
li.textContent = "Task from JS";
list.append(li);

//* Pros:
//  • Structured, composable, and easier to refactor.
//  • Type-safe at the DOM level (you are working with real, nodes, not strings).
//  • Easier to attach event listeners before/after inserting.
//  • Safer when dealing with user input (you set textContext instead of injecting raw HTML).

//* Cons:
//  • More verbose (especially for deeply nested markup). (verbose = using or expressed in more words than are needed.)
//  • Can feel slower to write for quick prototypes.

//? 1.3 Practical rule of thumb
//  • Use innerHTML for:
//      • Very simple, static chunks (e.g. resetting a demo, small snippets).
//      • When you completely control the HTML string and it is not based on user input.
//  • Prefer createElement + append/prepend for:
//      • Interactive UI.
//      • Anything where you attach event listeners.
//      • Reusable components/cards/items.
//      • Data-driven rendering (lists, grids, feeds).


//TODO  2. Lesson Setup

//  Use the same structure as Lesson 08:
//  • #section3 – “New Tasks” (<ul class="tasks">)
//  • #section4 – “My Tasks” (<ul class="tasks">)
//  • .grid – cards
//  • #section2 – buttons (not strictly needed here)

//* Folder:

//  module-07/
//      lesson-09-innerhtml-vs-createelement/
//          index.html
//          style.css
//          app.js


//TODO  3. Guided Practice – Using Your Current HTML

//  All tasks below go into Lesson 09’s app.js.

//? Task 1 – Replace “New Tasks” with innerHTML

//  Goal: see how innerHTML wipes and replaces content.
//*  1. Select the “New Tasks” list:

//* 2. Use innerHTML to completely replace its content:

//  Refresh the page and observe:
//  • The original <li> items are gone.
//  • Only the new three items from the string remain.

//? Task 2 – innerHTML and event listeners (why it is risky)

//  Goal: understand that innerHTML destroys existing nodes and their listeners.
//* 1. Add a click listener to the “My Tasks” items:

//* 2. Test it:
//  • In the browser, click different tasks in “My Tasks”.
//  • They should toggle a .task--selected class (style this in CSS if you like).

//* 3. Now, later in the same file, overwrite innerHTML of #section4 .tasks:

//* 4. Test again:
//  • Click on these new tasks.
//  • What happens?

//  You will see:
//  • The event listener on myTasksList still works (because it was attached to the parent, not the children) → event delegation survives.
//  • But if you had attached listeners directly to each <li> (e.g. li.addEventListener("click", ...)), they would all be lost when you changed innerHTML.

//  This illustrates:
//  • Direct child listeners + innerHTML → broken.
//  • Delegated listener on parent + innerHTML → fine (because the parent node remains the same).

//? Task 3 – Append items with innerHTML += vs append

//  Goal: see the difference between string-based appending and node-based appending.
//* 1. In app.js, after the innerHTML replacement for newTasksList, try:

//* 2. Then, do the same with createElement:

//? Observation:
//  • Both add new tasks at the end.
//  • But innerHTML += works by:
//      • Reading existing HTML as a string,
//      • Concatenating the new HTML string,
//      • Re-parsing the whole thing,
//      • Replacing children.
//  • append simply adds one new child node without re-parsing the entire list.
//  In small demos you won’t notice a performance difference, but in larger apps you will.



















