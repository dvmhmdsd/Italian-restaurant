// slide the navbar list on clicking the collapse buton
let collapseButton = document.querySelector(".collapse-btn");
let isCollapsed = true;
// slide the list of the navbar
collapseButton.addEventListener("click", function() {
  // toggle the list
  isCollapsed = !isCollapsed;

  let collapseList = document.querySelector(".nav-list-section");

  const originHeight = "210px";
  collapseList.style.transition = "height 0.3s";
  collapseList.style.height = originHeight;
  // check the current state of the list
  if (!isCollapsed) {
    // slide the list down
    collapseList.classList.remove("visible-bg");
    collapseList.style.height = originHeight;
  } else {
    // slide the list up
    collapseList.style.height = "0";
    // add the class after sliding up for big screens
    setTimeout(() => {
      collapseList.classList.add("visible-bg");
    }, 300);
  }
});

// scroll to elements on click on the link i navbar
let navLi = document.querySelectorAll(".nav-list-item");

// iterate over list items and attach the click event to them
navLi.forEach(li => {
  // attach the click event to the li item
  li.addEventListener("click", function(e) {
    e.preventDefault();
    // remove the class active from all siblings
    navLi.forEach(item => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    // add the class active to the current item
    this.classList.add("active");

    // scroll to the corresponding section
    scrollTo(0, document.getElementById(this.dataset.id).offsetTop);
  });
});

// remove all styles from nav list
window.addEventListener("scroll", function() {
  if (this.pageYOffset == 0) {
    navLi.forEach(item => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  }
});
