// slide the navbar list on clicking the collapse buton
let collapseButton = document.querySelector('.collapse-btn');
let isCollapsed = true;
// slide the list of the navbar
collapseButton.addEventListener('click', function() {
    // toggle the list
    isCollapsed = !isCollapsed;
    
    let collapseList = document.querySelector('.nav-list-section');
    
    const originHeight = '210px';
    collapseList.style.transition = 'height 0.3s';
    collapseList.style.height = originHeight;
    // check the current state of the list
    if (!isCollapsed) {
        // slide the list down
        collapseList.classList.remove('visible-bg');
        collapseList.style.height = originHeight;
    } else {
        
        // slide the list up
        collapseList.style.height = '0';
        // add the class after sliding up for big screens
        setTimeout(() => {
            collapseList.classList.add('visible-bg');
        }, 300);
    }
});
