// Add click event to the logo to refresh the page
document.querySelector('.logo').addEventListener('click', function () {
    // Remove hash from the URL and reload the page
    history.replaceState(null, null, window.location.pathname);
    location.reload();
});

// Ensure the default section is Home after a refresh
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        if (!window.location.hash) {
            window.location.hash = '#home'; // Force Home section
        }
    }, 50); // Small delay to avoid conflicts
});



// Toggle menu for mobile screens
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Word-by-word animation for h1
function animateText(elementSelector, delayStep) {
    const element = document.querySelector(elementSelector);
    const text = element.textContent.trim().split(' ');
    element.textContent = ''; // Clear the text

    text.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word; // Set the word without extra space
        span.style.animationDelay = `${index * delayStep}s`; // Staggered delay
        element.appendChild(span);

        // Add a space after each word (except the last one)
        if (index < text.length - 1) {
            element.appendChild(document.createTextNode(' '));
        }
    });
}

// Load sections dynamically
document.addEventListener('DOMContentLoaded', () => {
    animateText('h1', 0.2); // 0.2s delay between each word in h1

    if (!location.hash) {
        window.location.href = '#home'; // Set URL hash to home
    }

    // Load the About section content
    fetch('pages/about.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#about').innerHTML = data;

            // Add click event to the View Resume button
            const resumeBtn = document.querySelector('.view-resume-btn');
            if (resumeBtn) {
                resumeBtn.addEventListener('click', () => {
                    document.querySelector('#resume').scrollIntoView({ behavior: 'smooth' });
                });
            }
        })
        .catch(error => {
            console.error('Error loading About section:', error);
            document.querySelector('#about').innerHTML = '<p>Error loading content.</p>';
        });

    // Load the Education section content
    fetch('pages/education.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#education').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading Education section:', error);
            document.querySelector('#education').innerHTML = '<p>Error loading content.</p>';
        });

    // Load the Projects section content
    fetch('pages/projects.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#projects').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading Projects section:', error);
            document.querySelector('#projects').innerHTML = '<p>Error loading content.</p>';
        });

    // Load the Skills section content
    fetch('pages/skills.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#skills').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading Skills section:', error);
            document.querySelector('#skills').innerHTML = '<p>Error loading content.</p>';
        });

    // Load the Resume section content
    fetch('pages/resume.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#resume').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading Resume section:', error);
            document.querySelector('#resume').innerHTML = '<p>Error loading content.</p>';
        });

    // Load the Contact section content
    fetch('pages/contact.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#contact').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading Contact section:', error);
            document.querySelector('#contact').innerHTML = '<p>Error loading content.</p>';
        });
});

// Use event delegation for dynamically loaded content
document.addEventListener('click', (event) => {
    const target = event.target;

    // Handle View Project button click
    if (target.classList.contains('view-project-btn')) {
        console.log('View Project button clicked');
        const projectItem = target.closest('.project-item');
        if (!projectItem) {
            console.error('Project item not found for View button');
            return;
        }

        // Close all other expanded projects
        document.querySelectorAll('.project-item').forEach(item => {
            if (item !== projectItem) {
                item.classList.remove('expanded');
            }
        });

        // Expand the clicked project
        projectItem.classList.add('expanded');
        console.log('Expanded class added to project item:', projectItem.classList);

        // Blur the background
        document.body.classList.add('blur-background');
        console.log('Blur background class added to body:', document.body.classList);
    }

    // Handle Close button click
    if (target.classList.contains('close-project-btn')) {
        console.log('Close button clicked');
        const projectItem = target.closest('.project-item');
        if (!projectItem) {
            console.error('Project item not found for Close button');
            return;
        }

        // Collapse the project
        projectItem.classList.remove('expanded');
        console.log('Expanded class added to project item:', projectItem.classList);

        // Remove background blur
        document.body.classList.remove('blur-background');
        console.log('Blur background class removed from body:', document.body.classList);
    }
});