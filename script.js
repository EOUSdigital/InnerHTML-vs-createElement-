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
//  • 









