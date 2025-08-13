// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            // Simulate successful subscription
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Subscribed!';
            button.style.background = '#48bb78';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                this.querySelector('input[type="email"]').value = '';
            }, 2000);
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.topic-card, .resource-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Stats counter animation
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 20);
    });
};

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(aboutSection);
}

// Enhanced neuron animation with neural connections
const neurons = document.querySelectorAll('.neuron');
const neuralEdges = document.querySelectorAll('.neural-edge');

// Define neural connections (moderately dense network)
const connections = {
    0: [1, 3, 10], // neuron 0 connects to 1, 3, 10
    1: [0, 2, 11], // neuron 1 connects to 0, 2, 11
    2: [1, 4, 9, 11], // neuron 2 connects to 1, 4, 9, 11
    3: [0, 4, 5, 8, 10], // neuron 3 connects to 0, 4, 5, 8, 10
    4: [2, 3, 5, 11], // neuron 4 connects to 2, 3, 5, 11
    5: [3, 4, 6, 7], // neuron 5 connects to 3, 4, 6, 7
    6: [5, 7, 8], // neuron 6 connects to 5, 7, 8
    7: [5, 6, 9], // neuron 7 connects to 5, 6, 9
    8: [3, 6], // neuron 8 connects to 3, 6
    9: [2, 7], // neuron 9 connects to 2, 7
    10: [0, 3, 11], // neuron 10 connects to 0, 3, 11
    11: [1, 2, 4, 10] // neuron 11 connects to 1, 2, 4, 10
};

// Function to find edge between two neurons
function findEdgeBetweenNeurons(neuronId1, neuronId2) {
    const neuron1 = document.querySelector(`[data-id="${neuronId1}"]`);
    const neuron2 = document.querySelector(`[data-id="${neuronId2}"]`);
    
    if (!neuron1 || !neuron2) return null;
    
    const x1 = neuron1.getAttribute('cx');
    const y1 = neuron1.getAttribute('cy');
    const x2 = neuron2.getAttribute('cx');
    const y2 = neuron2.getAttribute('cy');
    
    return Array.from(neuralEdges).find(edge => {
        const edgeX1 = edge.getAttribute('x1');
        const edgeY1 = edge.getAttribute('y1');
        const edgeX2 = edge.getAttribute('x2');
        const edgeY2 = edge.getAttribute('y2');
        
        return (edgeX1 == x1 && edgeY1 == y1 && edgeX2 == x2 && edgeY2 == y2) ||
               (edgeX1 == x2 && edgeY1 == y2 && edgeX2 == x1 && edgeY2 == y1);
    });
}

// Function to activate neural connections
function activateNeuralConnections(activeNeuronId) {
    const connectedNeurons = connections[activeNeuronId] || [];
    
    connectedNeurons.forEach(connectedId => {
        const edge = findEdgeBetweenNeurons(activeNeuronId, connectedId);
        if (edge) {
            edge.classList.add('active');
            setTimeout(() => {
                edge.classList.remove('active');
            }, 600);
        }
    });
}

if (neurons.length > 0) {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * neurons.length);
        const randomNeuron = neurons[randomIndex];
        const neuronId = parseInt(randomNeuron.getAttribute('data-id'));
        
        // Activate neuron
        randomNeuron.style.fill = '#fbbf24';
        
        // Activate connected edges
        activateNeuralConnections(neuronId);
        
        setTimeout(() => {
            randomNeuron.style.fill = '#4ade80';
        }, 300);
    }, 1000);
}

// Topic card hover effects
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Loading screen (optional)
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic brain animation based on scroll
window.addEventListener('scroll', () => {
    const brainSvg = document.querySelector('.brain-svg');
    if (brainSvg) {
        const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        const rotation = scrollPercent * 360;
        brainSvg.style.transform = `rotate(${rotation}deg)`;
    }
});

// Add click effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log(`
🧠 Welcome to NeuroAmateurs!

Interested in the code? Check out our GitHub repository!
Built with love for neuroscience enthusiasts everywhere.

`);