import React from 'react';
import styles from './About.module.css'
export default function Welcome(props){
    return(
      <section className={`outer-about`}>
          <div className={`about1`}>
              <div className={`about2`}>
                  <h1 className={`about-intro`}>Hi, I'm Travis</h1><br />
                  I love building web applications
                  <p>I look forward to utilizing new technologies to build different web applications</p>
              </div>
              <div className={`about-nav`}>
                  <a href='#contact' className={`about-contact`}>Contact</a>
                  <a href='#projects' className={`about-projects`}>Projects</a>
              </div>
          </div>
          <div className={`about-img`}>
              <img className={`about-img1`} 
                  alt="default react"
                  src='./logo192.png'
              />
          </div>
      </section>  
    );
}