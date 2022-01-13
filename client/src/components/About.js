import React from 'react';
export default function Welcome(props){
    return(
      <section>
          <div >
              <div >
                  <h1 >Hi, I'm Travis</h1><br />
                  I love building web applications
                  <p>I look forward to utilizing new technologies to build different web applications</p>
              </div>
              <div className={`about-nav`}>
                  <a href='#contact'>Contact</a>
                  <a href='#projects'>Projects</a>
              </div>
          </div>
          <div className={`about-img`}>
              <img alt="default react"
                  src='./logo192.png'
              />
          </div>
      </section>  
    );
}