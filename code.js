let currentMode=0;

function toggleMode(){
const body=document.body;

switch(currentMode){
    case 0:
    body.classList.remove('light-mode');
    break;
    case 1:
    body.classList.remove('dark-mode');
    break;
    case 0:
    body.classList.remove('reset-mode');
    break;
}

currentMode=(currentMode+1)%3;

switch (currentMode) {
    case 0:
        body.classList.add('light-mode');
        break;
    case 1:
        body.classList.add('dark-mode');
        break;
    case 2:
        body.classList.add('reset-mode');
        break;
}
}


function scrollToSection(sectionId) {
var section = document.getElementById(sectionId);
if (section) {
    section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center',
    });

}
}

function openPdf(pdfPath) {
window.open(pdfPath, '_blank');
}

// Add an event listener to trigger animations when sections come into view
document.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.section');
    let windowHeight = window.innerHeight;

    sections.forEach(function (section) {
        let boundingBox = section.getBoundingClientRect();

        if (boundingBox.top < windowHeight / 2 && boundingBox.bottom > windowHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});