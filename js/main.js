const toggle = document.getElementById('toggle');
const navUl = document.getElementById("navUl");
const navUlLinks = document.querySelectorAll("header nav ul li a");
const shuffleList = document.querySelectorAll('.portfolio .main-heading ul  li a');
const imageContainer = document.querySelectorAll('.image-container');
const skillsBullets = document.querySelectorAll('.testimonials .skills-bullets li');

toggle.addEventListener('click', function() {
    if (navUl.classList.contains('display-toggle')) {
        navUl.classList.remove('display-toggle');
        navUl.classList.add('display-none');

    } else {
        navUl.classList.remove('display-none');
        navUl.classList.add('display-toggle');
    }
});

skillsBullets.forEach(bullet =>{

    bullet.addEventListener('click',function(){
        document.querySelector(' li.active')?.classList.remove('active');
        bullet.classList.add('active');
    })
})

shuffleList.forEach(shuffleItem => {
    shuffleItem.addEventListener("click", function(event) {
        // Prevent default anchor behavior if these are <a> elements
        event.preventDefault();

        // Remove the active class from the currently active link
        document.querySelector('.active-shuffle')?.classList.remove("active-shuffle");

        // Add the active class to the clicked link
        shuffleItem.classList.add("active-shuffle");

        // Hide all image containers
        for (let j = 0; j < imageContainer.length; j++) {
            imageContainer[j].classList.remove('active');
            imageContainer[j].classList.add('display-none');
        }

        // Get the target ID from the href attribute of the clicked link
        const targetId = shuffleItem.getAttribute('href').substring(1);

        // Find the div with the matching ID and show it
        const targetDiv = document.getElementById(targetId);
        if (targetDiv) {
            targetDiv.classList.remove('display-none');
            setTimeout(() => {
                targetDiv.classList.add('active');
            }, 100); // Delay adding the active class to ensure the transition
        }
    });
});


navUlLinks.forEach(navUlLink =>{

    navUlLink.addEventListener('click',function(){
        document.querySelector('.active-link').classList.remove('active-link');
        navUlLink.classList.add('active-link');
    })

})





document.addEventListener("DOMContentLoaded", function() {
    const landingPage = document.getElementById('landingPage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const bullets = document.querySelectorAll(' .bullets li');

    


    const images = [
        'images/photo4.jpeg',
        'images/photo3.webp',
        'images/owl.jpg',
        'images/portofolio-2.jpg',
        'images/mobile-devices.png'

    ];
    let currentIndex = 0;

    
    function updateBackgroundImage() {
        landingPage.style.backgroundImage = `url(${images[currentIndex]})`;
        
        bullets.forEach((bullet, index) => {
            
            bullet.classList.toggle('active-bullet', index === currentIndex);
        });
    }

    function prevImage(){
        currentIndex --;
        if(currentIndex < 0){
            currentIndex = images.length -1;
        }
        updateBackgroundImage();

    }
    function nextImage(){
        currentIndex++;

        if(currentIndex == images.length ){
            currentIndex = 0;

        }
        updateBackgroundImage();

    }
    


  
    
  
    bullets.forEach(bullet => {
        bullet.addEventListener('click', function() {
            currentIndex = parseInt(bullet.getAttribute('data-index'));
            updateBackgroundImage();
        });
    });
    // Set initial background image
    updateBackgroundImage();
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage );
 
        

});


function getOffset(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
    return {
        top: rect.top + scrollTop,
    };
}

// Example usage
var ourSkills = document.getElementById('ourSkills');
var offset = getOffset(ourSkills);
console.log("Element's offset top: " + offset.top);

window.addEventListener('scroll', function() {
    var skillsSection = document.querySelector('.skills');
    var skillsPosition = skillsSection.getBoundingClientRect();
    var screenHeight = window.innerHeight;
    var progressBars = document.querySelectorAll('.skills .prog span');

    if (skillsPosition.top < screenHeight && skillsPosition.bottom > 0) {
        progressBars.forEach(function(bar) {
            var value = bar.getAttribute('data-progress');
            bar.style.width = value;
        });
    } else {
        progressBars.forEach(function(bar) {
            bar.style.width = '0'; // Reset width when out of view
        });
    }
});














