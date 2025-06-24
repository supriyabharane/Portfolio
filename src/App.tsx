import React, { useState, useEffect } from 'react'
import './App.css'
import myPhoto from './assets/myphoto.jpg';
import project1 from './assets/project.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import newImage from './assets/newImage.jpg';
const profilePhoto = myPhoto;

function App() {
  const [dark, setDark] = useState(true); // Default to dark mode for hero look
  const projects = [
    {
      title: 'IoT Dashboard for Smart Farming',
      role: 'Open-Source Contributor, GSSOC June’24',
      description: [
        'Developed a real-time dashboard using React.js and Node.js to monitor weather and soil conditions, simulating data from 5+ IoT sensors.',
        'Built RESTful APIs for live data visualization, reducing data retrieval latency by 30%.',
        'Integrated MongoDB to store and manage 10,000+ sensor records.',
        'Coordinated with a globally distributed team of 5+ developers using Git and Docker, accelerating feature delivery cycle by 30% and reducing deployment errors by 25%.'
      ],
      image: undefined,
      tags: ['React.js', 'Node.js', 'MongoDB', 'API', 'Docker'],
    },
    {
      title: 'Keylogger Detection System',
      role: 'CDAC Government Project Aug 2024',
      description: [
        'Engineered a scalable backend using Python and MongoDB with OOP principles, supporting secure processing of 10,000+ keystroke logs per session with 99.9% uptime.',
        'Applied advanced Data Structures to analyze 10,000+ keystroke logs per session.',
        'Followed Agile methodology with sprint-based collaboration across a 4-member team.'
      ],
      image: project2,
      tags: ['Python', 'MongoDB', 'OOP', 'Agile'],
    },
    {
      title: 'AI-Powered Resume Analyzer',
      role: 'Course Project November’24',
      description: [
        'Built a web tool using Python (Flask) and OpenAI API that analyzed 100+ resume PDFs, providing improvement suggestions and increasing interview call rates by 20%.',
        'Optimized backend to deliver AI-driven insights in under 3 seconds per analysis.'
      ],
      image: project3,
      tags: ['Python', 'Flask', 'OpenAI API', 'AI'],
    },
    {
      title: 'Live Video Streaming Platform with Real-Time Quizzes',
      role: 'Course Project May’25',
      description: [
        'Developed a web platform using React, Vite, and Node.js, supporting 50+ concurrent users for live video streaming and quizzes.',
        'Implemented real-time features using Socket.io (auth, chat, betting) for a streaming platform with <1s latency, improving user retention by 40% across 50+ active sessions.',
        'Designed dynamic admin/user dashboards and deployed with a casino-style UI, increasing user engagement by 40%.'
      ],
      image: project1,
      tags: ['React', 'Vite', 'Node.js', 'Socket.io'],
    },
    {
      title: 'New Project Title',
      role: 'Your Role',
      description: [
        'Description line 1',
        'Description line 2',
      ],
      image: newImage,
      tags: ['Tag1', 'Tag2'],
    },
  ];
  const [showProjects, setShowProjects] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : '';
  }, [dark]);

  // Unified handler for opening project section with smooth scroll
  const openProjectSection = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowProjects(true);
    setTimeout(() => {
      const projSection = document.querySelector('.project-details-section');
      if (projSection) {
        projSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handler for opening contact page
  const openContactPage = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowContact(true);
    setShowProjects(false);
    setTimeout(() => {
      const contactSection = document.querySelector('.contact-details-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Added a handler for opening the services page section
  const openServicesPage = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowProjects(false);
    setShowContact(false);
    setShowServices(true);
    setTimeout(() => {
      const servicesSection = document.querySelector('.services-details-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Added a handler for opening the achievements page section
  const openAchievementsPage = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowProjects(false);
    setShowContact(false);
    setShowServices(false);
    setShowAchievements(true);
    setTimeout(() => {
      const achievementsSection = document.querySelector('.achievements-details-section');
      if (achievementsSection) {
        achievementsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Enhanced overall portfolio with animations and improved styling
  useEffect(() => {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transition = 'color 0.3s ease';
        link.style.color = '#007BFF';
      });
      link.addEventListener('mouseout', () => {
        link.style.color = '';
      });
    });
  }, []);

  // Added animations to sections
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transition = 'opacity 0.5s ease';
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.style.opacity = '1';
          }
        });
      });
      observer.observe(section);
    });
  }, []);

  return (
    <div className="hero-bg">
      <nav className="main-nav enhanced-nav">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#work">WORK</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#project" onClick={openProjectSection}>PROJECT</a></li>
          <li><a href="#service" onClick={openServicesPage}>SERVICE</a></li>
          <li><a href="#achievements" onClick={openAchievementsPage}>ACHIEVEMENTS</a></li>
        </ul>
      </nav>
      <section className="hero-section-modern">
        <div className="hero-left">
          <div className="hero-socials">
            <a href="https://linkedin.com/in/supriya-bharane" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/supriya-bharane" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:bharanesupriya6@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          </div>
          <h3>Hi! I Am <span className="highlight">Supriya Bharane</span></h3>
          <h1 className="hero-title">Full-Stack Developer.</h1>
          <p className="hero-desc">Contributor to global open-source projects and problem-solver with 1000+ DSA questions cracked!</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary" onClick={openContactPage}>Hire Me</a>
            <button className="btn-outline" onClick={openProjectSection}>View Project</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={profilePhoto} alt="Supriya Bharane" className="profile-photo-modern" />
        </div>
      </section>
      {showProjects && (
        <section className="project-details-section">
          <h2>Projects</h2>
          <div className="project-detail enhanced-project">
            <img src={projects[currentProject].image} alt={projects[currentProject].title} className="project-image" />
            <h3>{projects[currentProject].title}</h3>
            <p><strong>{projects[currentProject].role}</strong></p>
            <ul>
              {projects[currentProject].description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className="project-tags">
              {projects[currentProject].tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <div className="project-navigation">
              <button className="btn-outline" onClick={() => setCurrentProject((currentProject - 1 + projects.length) % projects.length)}>Previous</button>
              <button className="btn-outline" onClick={() => setCurrentProject((currentProject + 1) % projects.length)}>Next</button>
            </div>
          </div>
          <button className="btn-outline" onClick={() => setShowProjects(false)} style={{marginTop: '2rem'}}>Close</button>
        </section>
      )}
      {showContact && (
        <section className="contact-details-section">
          <h2>Contact Me</h2>
          <div className="contact-card">
            <p><strong>Email:</strong> <a href="mailto:bharanesupriya6@gmail.com">bharanesupriya6@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918888985420">+91-8888985420</a></p>
          </div>
          <button className="btn-outline" onClick={() => setShowContact(false)} style={{marginTop: '2rem'}}>Close</button>
        </section>
      )}
      {showServices && (
        <section className="services-details-section">
          <h2>Services</h2>
          <div className="services-card">
            <p><strong>LeetCode:</strong> <a href="https://leetcode.com/supriya-bharane" target="_blank" rel="noopener noreferrer">leetcode.com/supriya-bharane</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/supriya-bharane" target="_blank" rel="noopener noreferrer">github.com/supriya-bharane</a></p>
            <p><strong>GeeksforGeeks:</strong> <a href="https://www.geeksforgeeks.org/supriya-bharane" target="_blank" rel="noopener noreferrer">geeksforgeeks.org/supriya-bharane</a></p>
            <p><strong>Resume:</strong> <a href="https://drive.google.com/file/d/1A7jaFpiZ-G5oKihNGxY0E1qG_ohE22_O/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a></p>
          </div>
          <button className="btn-outline" onClick={() => setShowServices(false)} style={{marginTop: '2rem'}}>Close</button>
        </section>
      )}

      {showAchievements && (
        <section className="achievements-details-section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            <li><i className="fa-solid fa-award"></i> Selected in Adobe Career Academy 2024 (top candidate among thousands).</li>
            <li><i className="fa-solid fa-certificate"></i> Infosys SpringBoard 2024 – Completed rigorous technical training.</li>
            <li><i className="fa-solid fa-code"></i> Contributed to real-world open-source mobile dashboard project via GSSOC 2024.</li>
            <li><i className="fa-solid fa-brain"></i> Solved 1000+ DSA problems (LeetCode Max Rating: 1417, Codeforces: 834, CodeChef: Global Rank: 1100).</li>
          </ul>
          <button className="btn-outline" onClick={() => setShowAchievements(false)} style={{marginTop: '2rem'}}>Close</button>
        </section>
      )}
      <section id="about" className="portfolio-section">
        <h3>About Me</h3>
        <div className="about-flex">
          <div className="about-text">
            <p>
              <span className="about-highlight">Hi, I’m Supriya Bharane!</span> <br />
              I’m a passionate software
            </p>
            <p>
              <b>What I Do:</b> <br />
              I specialize in <b>full-stack development</b>, <b>cloud technologies</b>, and <b>data structures</b>—crafting real-time, scalable web applications that solve real-world problems.
            </p>
            <p>
              <b>My Projects:</b> <br />
              From a <b>Live Video Streaming Platform with Real-Time Quizzes</b> to a <b>Keylogger Detection System</b> for a government project, I love tackling diverse challenges. As a GSSOC 2024 open-source contributor, I built a <b>Smart Farming IoT Dashboard</b> to visualize live sensor data efficiently.
            </p>
            <p>
              <b>Achievements:</b> <br />
              • 1000+ DSA problems solved (LeetCode, Codeforces, CodeChef – Global Rank: 1100) <br />
              • Recognized by <b>Adobe Career Academy</b>, <b>LinkedIn Tech Community</b>, and <b>Devtown C++ Coding Competition</b>
            </p>
            <p>
              <b>Tech I Love:</b> <br />
              React, Vite, Flask, AWS, MongoDB, Socket.io, and more. I’m always exploring new tools—currently diving into <b>cloud-native architectures</b> and <b>AI-driven web tools</b>.
            </p>
            <p>
           
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
