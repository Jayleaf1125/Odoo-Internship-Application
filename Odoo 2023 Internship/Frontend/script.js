/* 
7) Write Javascript to randomly give each box a different height.

- Find a way to target every box in the page 
- Create a function that randmoly gives out a number, specfically 1-100 inclusively
- Change the height of every box
*/

const boxes = document.querySelectorAll(".box");

window.addEventListener("load", randomizeBoxHeight);

function randomizeBoxHeight() {
  boxes.forEach((box) => {
    const randomNumber = Math.floor(Math.random() * 100 + 100);
    box.style.height = `${randomNumber}px`;
  });
}

// Question 8

const draggables = document.querySelectorAll(".draggable");
const columns = document.querySelectorAll(".column");

draggables.forEach((draggable) => {
  // When the user starts to drag
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  // When the user stops dragging
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    event.preventDefault();
    const afterBox = draggingBoxesInBewteen(column, event.clientY);
    // Targets the current box that is being dragged
    const draggable = document.querySelector(".dragging");
    if (afterBox === null) {
      column.appendChild(draggable);
    } else {
      column.insertBefore(draggable, afterBox);
    }
  });
});

function draggingBoxesInBewteen(column, y) {
  const draggableBoxes = [
    ...column.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableBoxes.reduce(
    (closetBox, childBox) => {
      const box = childBox.getBoundingClientRect();
      //   Gets the middle of the box
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closetBox.offset) {
        return { offset: offset, element: childBox };
      } else {
        return closetBox;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// Question 9

const appCategoryMap = new Map();

fetch("../All Apps _ Odoo.html")
  .then((res) => res.text())
  .then((html) => {
    const parser = new DOMParser();
    const page = parser.parseFromString(html, "text/html");
    appCartegorysObject(page);
  })
  .catch((err) => {
    console.warn(err.message);
  });

function appCartegorysObject(page) {
  const appSections = [...page.querySelector(".oe_structure").childNodes];

  const filterSections = appSections.filter((section) => {
    return section.nodeName === "SECTION";
  });

  for (let i = 1; i < filterSections.length; i++) {
    const section = filterSections[i];
    const appCategory = buildingKey(section);
    const amountOfChildrenApps = buildingValue(section);

    appCategoryMap.set(appCategory, amountOfChildrenApps);
  }

  appCategoryMap.delete("Unleash your growth potential");
}

function buildingKey(section) {
  return section.childNodes[1].childNodes[1].innerText;
}

function buildingValue(section) {
  const childrenApps = [...section.childNodes[1].childNodes[3].childNodes];

  const filterActualApps = childrenApps.filter((app) => {
    return app.className === `col-sm-6 col-md-4 col-lg-3`;
  });

  return filterActualApps.length;
}

console.log(appCategoryMap);
