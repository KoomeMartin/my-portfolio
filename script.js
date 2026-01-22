// ==========================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ==========================================

// ========== PROJECTS DATA ==========
const projects = [
    {
        name: 'Campus Link',
        description: 'AI-powered platform optimizing campus experience by integrating personalized learning, degree planning, information systems, and event management. Consolidates university data into a knowledge-based system using RAG.',
        problem: 'Students at CMU Africa faced fragmented access to academic and administrative services, leading to inefficiencies and reduced productivity.',
        solution: 'Designed retrieval-augmented generation pipelines using LightRAG, evaluated language models, and aligned product functionality with student needs.',
        impact: 'Streamline student services, reduce service access bottlenecks, currently incubated at Industry Innovation Lab.',
        techStack: ['Python', 'FastAPI', 'RAG', 'TypeScript', 'Pinecone', 'LightRAG'],
        image: 'assets/images/projects/campus-link.jpg',
        demo: 'https://campus-link-seven.vercel.app/'
    },
    {
        name: 'SafeSpace Africa',
        description: 'AI-powered mental wellness platform providing accessible, affordable care in local languages through AI-guided triage, education, group sessions, and therapist support.',
        problem: 'Mental health services in Africa are scarce, expensive, and often not culturally adapted or available in local languages.',
        solution: 'Built multilingual AI platform with guided triage, educational resources, group support, and professional therapist connections.',
        impact: 'Democratizing mental health access across Africa with culturally appropriate, affordable AI-powered care.',
        techStack: ['Web Development', 'Market Analysis', 'Database', 'Product Design', 'AI Triage'],
        image: 'assets/images/projects/safespace-africa.jpg',
        demo: 'https://github.com/KoomeMartin/RegenAI'
    },
    {
        name: 'Kumva AI',
        description: 'Voice-based Kinyarwanda-English learning assistant for early-grade students. Bridges language gaps by teaching concepts naturally in Kinyarwanda while guiding learners into English.',
        problem: 'Early-grade students in Rwanda struggle with English-only instruction, creating learning barriers and limiting educational outcomes.',
        solution: 'Developed speech-to-speech AI assistant that teaches in Kinyarwanda while progressively introducing English vocabulary and concepts.',
        impact: 'Making education more accessible for Rwandan students by removing language barriers in early learning.',
        techStack: ['AI Engineering', 'Speech-to-Speech', 'Web Development', 'API Integration', 'NLP'],
        image: 'assets/images/projects/kumva-ai.jpg',
        demo: 'https://kumva-front.andasy.dev/'
    },
    {
        name: 'Survival Analysis in Education',
        description: 'Data-driven research project applying time-dependent survival analysis to examine student dropout patterns in STEM programs at Multimedia University of Kenya.',
        problem: 'High dropout rates in STEM programs at Multimedia University with limited understanding of risk periods and contributing factors.',
        solution: 'Applied Kaplan-Meier estimation, Cox Proportional Hazards modeling, and multivariate analysis on longitudinal data of 400+ students.',
        impact: 'Identified significant dropout predictors and delivered actionable recommendations to university management, projected to reduce dropout rates by 15-20%.',
        techStack: ['Python (lifelines, pandas)', 'R (survival package)', 'Statistical Modeling', 'Data Analysis', 'Policy Research'],
        image: 'assets/images/projects/survival-analysis.jpg',
        demo: 'https://github.com/KoomeMartin/Survival-Analysis-in-Education-'
    },
    {
        name: 'Mathlearn Chatbot',
        description: 'Fine-tuned Gemma2 9b model with custom chain-of-thought data to solve mathematics problems step-by-step. Interactive Streamlit interface for easy model access.',
        problem: 'Students need personalized, step-by-step math tutoring that adapts to their learning pace and explains reasoning clearly.',
        solution: 'Fine-tuned large language model on chain-of-thought mathematics data, deployed with accessible Streamlit interface.',
        impact: 'Democratizing access to personalized math tutoring with AI-powered step-by-step problem solving.',
        techStack: ['LLM Fine-tuning', 'Transformers', 'Streamlit', 'Data Engineering', 'Quantization', 'Python'],
        image: 'assets/images/projects/mathlearn-chatbot.jpg',
        demo: 'https://github.com/KoomeMartin/Mathlearn-Chatbot'
    },
    {
        name: 'Zindi Competitions',
        description: 'Active participation in Africa\'s largest data science community with 70+ challenges completed in classification, regression, computer vision, LLM fine-tuning, and data collection.',
        problem: 'Real-world ML challenges from African organizations requiring innovative solutions across diverse problem domains.',
        solution: 'Apply advanced ML techniques, optimal cross-validation strategies, hyperparameter optimization, and ensemble methods.',
        impact: 'Achieved 7th rank in Kenya, 60th globally. Built practical ML skills solving diverse real-world African data challenges.',
        techStack: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'LLM Fine-tuning', 'Hyperparameter Tuning', 'CV Strategies'],
        image: 'assets/images/projects/zindi.jpg',
        demo: 'https://zindi.africa/users/Koome'
    },
    {
        name: 'TELEMED App',
        description: 'Innovative solution for hypertension patients in marginalized areas to monitor vitals in real-time through smartwatch and mobile app with AI-powered emergency alerts.',
        problem: 'Hypertension patients in marginalized areas lack access to continuous monitoring and timely emergency response.',
        solution: 'Led team to build integrated smartwatch-mobile app system with real-time vital monitoring and AI emergency detection.',
        impact: 'Enabling remote health monitoring for underserved communities, potentially saving lives through early intervention.',
        techStack: ['UI/UX Design', 'Empirical Research', 'Human-Centered Design', 'IoT Integration', 'Mobile Development'],
        image: 'assets/images/projects/telemed-app.jpg',
        demo: 'https://www.datascienceportfol.io/koomemartin43/projects/1'
    },
    {
        name: 'Virtual Assistant Certification',
        description: 'Completed 15-week hands-on ALX program focused on communication, troubleshooting, organization, and productivity. Gained professional skills in Google Workspace and client support.',
        problem: 'Need for comprehensive training in professional virtual assistant skills for modern remote work environments.',
        solution: 'Completed intensive certification covering Google Workspace, scheduling, email/calendar management, research, and client support.',
        impact: 'Enhanced professional productivity skills and client communication capabilities for remote work excellence.',
        techStack: ['Google Workspace', 'Communication', 'Troubleshooting', 'Organization', 'Professional Support'],
        image: 'assets/images/projects/virtual-assistant.jpg',
        demo: 'https://www.virtualbadge.io/certificate-validator?credential=cer-57b8b2bb-7448-405f-8fd7-fc7734a0'
    }
];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1000);

    // Initialize all features
    initNavigationScroll();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initBackToTop();
    initParticles();
    renderProjects();
    initContactForm();
});

// ========== NAVIGATION SCROLL ==========
function initNavigationScroll() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Header background on scroll
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
        
        // Active navigation link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const reveals = document.querySelectorAll('.card-hover, .timeline-item, .achievement-card');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('reveal', 'active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== BACK TO TOP BUTTON ==========
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ========== PARTICLES ANIMATION ==========
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(59, 130, 246, 0.4)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0);
                opacity: 0;
            }
            10%, 90% {
                opacity: 1;
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ========== RENDER PROJECTS ==========
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card card-hover">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-details">
                    ${project.problem ? `
                        <div class="project-detail">
                            <span class="detail-label detail-label-blue">Problem:</span>
                            <p class="detail-text">${project.problem}</p>
                        </div>
                    ` : ''}
                    
                    ${project.solution ? `
                        <div class="project-detail">
                            <span class="detail-label detail-label-purple">Solution:</span>
                            <p class="detail-text">${project.solution}</p>
                        </div>
                    ` : ''}
                    
                    ${project.impact ? `
                        <div class="project-detail">
                            <span class="detail-label detail-label-teal">Impact:</span>
                            <p class="detail-text">${project.impact}</p>
                        </div>
                    ` : ''}
                </div>
                
                <div class="project-tags">
                    ${project.techStack.map(tech => `
                        <span class="project-tag">${tech}</span>
                    `).join('')}
                </div>
                
                <div class="project-links">
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-primary">
                            View Project
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    ` : ''}
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-secondary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Code
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ========== CONTACT FORM WITH EMAILJS ==========
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('.form-submit');
        const submitText = submitButton.querySelector('.submit-text');
        const submitLoading = submitButton.querySelector('.submit-loading');
        const submitIcon = submitButton.querySelector('.submit-icon');
        const successMessage = document.getElementById('form-success');
        const errorMessage = document.getElementById('form-error');
        const errorMessageText = document.getElementById('error-message-text');
        
        // Hide previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Show loading state
        submitButton.disabled = true;
        submitText.style.display = 'none';
        submitIcon.style.display = 'none';
        submitLoading.style.display = 'flex';
        
        // Get form data
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            subject: form.querySelector('#subject').value,
            message: form.querySelector('#message').value
        };
        
        try {
            // EmailJS Integration
            // Replace these with your actual EmailJS credentials
            // Get them from https://www.emailjs.com/
            const serviceID = 'service_2bq3wlp';
            const templateID = 'template_6gah2ob';
            const publicKey = 'Ey4Xqpzc26zY4cX1t';
            
            // For now, simulate success (you'll replace this with actual EmailJS call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Uncomment and configure when you have EmailJS credentials:
            
            const response = await emailjs.send(serviceID, templateID, {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'mkoome@andrew.cmu.edu'
            }, publicKey);
            
            
            // Show success message
            successMessage.style.display = 'flex';
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            errorMessageText.textContent = 'Failed to send message. Please try emailing me directly at mkoome@andrew.cmu.edu';
            errorMessage.style.display = 'flex';
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitText.style.display = 'inline';
            submitIcon.style.display = 'inline';
            submitLoading.style.display = 'none';
        }
    });
}

// ========== UTILITY: DEBOUNCE ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
