import React from 'react';
import '../styles/homepage.css'; 
import profilePicture from '../assets/Angel_Burbano_Foto.jpg';
import picture from '../assets/imagen1.jpg';
import picture2 from '../assets/imagen2.jpg';
import picture3 from '../assets/imagen3.jpg';
import picture4 from '../assets/imagen4.jpg';
import picture5 from '../assets/imagen5.jpg';
import picture6 from '../assets/imagen6.jpg';

import { useInView } from 'react-intersection-observer';

const FadeInOut = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1   
  });

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
};
const HomePage = () => {
  const [text, setText] = React.useState('');
  const [isTypingFinished, setIsTypingFinished] = React.useState(false);
  const fullText = 'AGBR121';
  
  React.useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
        setIsTypingFinished(true); 
      }
    }, 300);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className={isTypingFinished ? 'finished' : 'typing'}>{text}</h1>
        <br></br>
        <div className="profile-container">
          <img 
            src={profilePicture} 
            alt="Angel Burbano" 
            className="profile-picture" 
          />
        </div>
        <FadeInOut>
          <h2>Hi, I'm Angel Gabriel Burbano</h2>
        </FadeInOut>
        <FadeInOut>
          <p>FullStack Developer</p>
        </FadeInOut>
        <div className="contact-buttons">
          <FadeInOut>
            <a href="https://github.com/AGBR121" target="_blank" rel="noopener noreferrer" className="contact-button">
              GitHub
            </a>
            <a href="https://linkedin.com/in/angel-gabriel-burbano-rodriguez-b26837317" target="_blank" rel="noopener noreferrer" className="contact-button">
              LinkedIn
            </a>
            <a href="https://wa.me/3154848215" target="_blank" rel="noopener noreferrer" className="contact-button">
              WhatsApp
            </a>
          </FadeInOut>
        </div>
      </header>
      <section className="about-me">
        <FadeInOut>
          <h2>About Me</h2>
          <p>
            I'm Angel Burbano, a young computer science candidate and fullstack developer passionate about learning and improving. I like programming and chess. 
            I spend part of my free time learning more and expanding my knowledge in programming and chess.
            My dream is to travel the world while doing what I am most passionate about.
          </p>
        </FadeInOut>
      </section>
      <section className="projects">
        <FadeInOut>
          <h2>Featured Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <img src={picture} alt="Memory Game" className="project-image" />
              <h3>Memory Game without JavaScript</h3>
              <p>Using only HTML and CSS, we create a memorama that has "randomness"</p>
              <a href="https://memorama-6zqyckwa3-agbr121s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <div className="project-item">
              <img src={picture2} alt="Cinema App" className="project-image" />
              <h3>Cinema App</h3>
              <p>Using React, Vite, and Axios, we made an application to know about movies, TV shows, and actors</p>
              <a href="https://aplicacion-cine-8.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <div className="project-item">
              <img src={picture3} alt="Calculator" className="project-image" />
              <h3>Calculator</h3>
              <p>Using React, we made a calculator</p>
              <a href="https://main--peppy-sable-920168.netlify.app/" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <div className="project-item">
              <img src={picture4} alt="Christmas Memory" className="project-image" />
              <h3>Christmas Memory</h3>
              <p>Using only HTML and CSS, we create a game for Christmas</p>
              <a href="https://memorama-a-la-navidad-css.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <div className="project-item">
              <img src={picture5} alt="Rock Paper Scissors" className="project-image" />
              <h3>Rock Paper Scissors</h3>
              <p>Using HTML, CSS, and JavaScript, we created the rock paper scissors game</p>
              <a href="https://juego-olive.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <div className="project-item">
              <img src={picture6} alt="News App" className="project-image" />
              <h3>News App</h3>
              <p>Using React, Vite, Tailwind, and Redux, we created a News app where you can see a lot of news</p>
              <a href="https://bootcamp-news.netlify.app" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </FadeInOut>
      </section>
    </div>
  );
};

export default HomePage;
