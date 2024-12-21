// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Software Developer', 'Web Developer', 'Youtuber'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});






    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    });

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'var(--second-dark-clr)';
    } else {
        header.style.background = 'var(--dark-clr)';
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-times');
    
    // Toggle body scroll
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-times');
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-times');
        document.body.style.overflow = '';
    });
});

// Add viewport height fix for mobile browsers
function setMobileVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setMobileVH);
setMobileVH();

// Format email content
function formatEmail(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Add loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    const templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        message: form.message.value
    };

    // Add error handling and timeout
    const emailPromise = emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            form.reset();
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            alert('Thank you! Your message has been sent successfully.');
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(function() {
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }, 3000);
        });

    return false;
}





