const sections = document.querySelectorAll('section');
const indicator = document.querySelector('.indicator');

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
    let className = entry.target.className;
    console.log(className);
    });
}

sections.forEach(section => {
    observer.observe(section)  
});

function top() {
    window.location.href = "dev.html";
}
