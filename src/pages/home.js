import React from "react";
class Home extends React.Component {
    render() {
        return(
           
        <div>
             <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="assets/img/1.jpg"
              alt="mv logo"
              class="header__logo-img"
            />
          </div>
          <span  class="header__logo-sub">Muthuvel M</span>
        </div>
        <div class="header__main">
            <script src="assets/index.js"></script>
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html"  class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about"  class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects"  class="header__link">Projects</a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#timeline"  class="header__link">Time Line</a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#contact"   class="header__link"> Contact </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="assets/svg/ham-menu.svg"
              alt=""
              class="header__main-ham-menu"
            />
            <img
              src="assets/svg/ham-menu-close.svg"
              alt=""
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, My name is Muthuvel M</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            Smart Thinker | Inquisitive | Versatile<br></br>
            I am FrontEnd Developer,
            Mentnee at Spotknack<br></br>
            Currently student at Sri Ramakrishna Institute Of Technology

          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">Projects</a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="https://www.linkedin.com/in/muthuvel-m/" class="home-hero__social-icon-link">
            <img src="assets/png/l.png"alt="icon"class="home-hero__social-icon"/>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://github.com/Muthuvel-M" class="home-hero__social-icon-link">
            <img src="assets/png/g.png" alt="icon"class="home-hero__social-icon"/>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://twitter.com/Thisismuthuvel" class="home-hero__social-icon-link">
            <img src="assets/png/t.png"alt="icon"class="home-hero__social-icon"/>
        </a>
     </div>
        <div class="home-hero__social">
          <a href="https://www.instagram.com/vel_mv/" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
            <img src="assets/png/i.png"alt="icon"class="home-hero__social-icon"/>
          </a>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
   
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
          Listed  projects  are done by me.
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img src="assets/png/p1.png"alt="Software Screenshot"class="projects__row-img"loading="lazy"/>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Cloning of  Apple website</h3>
              <p class="projects__row-content-desc">
                This website is created in the form of parallax. I have created this website by using the Html,Css and java scripts.
              </p>
              <a
                href="assets/project-1.html"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Case Study</a
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
                <img src="assets/png/p2.png"alt="Software Screenshot"class="projects__row-img"loading="lazy"/>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Simple Calculator</h3>
              <p class="projects__row-content-desc">
                This is the simple calculator which performs Addition ,Subtraction,Multiplication,Division and Percentage.
                <br></br> This calci is made by HTML,CSS and JS.
              </p>
              <a
                href="assets/project-2.html"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Case Study</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            Smart, enthusiastic about learning new things,<br></br>
             a good communicator, and an upcoming computer science engineer, <br></br>running toward his career and dream.
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Hey! It's
                <strong>Muthuvel M</strong>
                and I'm a <strong> Frontend Web Developer. </strong>  I've done
                <strong> some </strong>
                projects 
              </p>
              <p class="about__content-details-para">
                 Feel free to
                <strong>contact</strong> me here.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
            <div class="skills__skill">React(Beginner)</div>
            <div class="skills__skill">Bootstrap</div>
            <div class="skills__skill">Python</div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="timeline">
      <div class="timeline-container">
        <div class="timeline">
          <span class="heading-sec__main">Time line</span>
          <ul>
            <li>
              <div class="timeline-content">
                <h3 class="date">10th may, 2022</h3>
                <h1>Spotknack</h1>
                <p>As my next step toward my career, I've been learning as a front end developer in Spotknack.</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">04th jun, 2022</h3>
                <h1>First project using html,css,js</h1>
                <p>My first attempt at front-end development with HTML, CSS, and JS is a clone of Apple's webpage.<br></br>The way for the cloned Apple webpage by clicking this word -<a href=" https://superb-croissant-be0beb.netlify.app/">Apple </a>
                  <br></br><a target="_blank" rel="noreferrer" href="https://github.com/Muthuvel-M/Apple-1">
                    <img class="timeline_icon"src="assets/png/g.png"alt="icon"/> </a>
                  
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section >
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            If you require any further information, let me know.

          </span>
        </h2>
        <div class="contact__form-container">
          <form action="https://formsubmit.co/mmuthuvel126@gmail.com" method="POST" class="contact__form">
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Name</label>
              <input required placeholder="Enter Your Name" type="text" class="contact__form-input" name="name" id="name" />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
   
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muthuvel-m/">
                <img class="main-footer__icon"src="assets/png/l.png"alt="icon"/> </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Muthuvel-M">
                <img class="main-footer__icon"src="assets/png/g.png"alt="icon"/> </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Thisismuthuvel">
                <img class="main-footer__icon"src="assets/png/t.png"alt="icon"/> </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vel_mv/">
                <img class="main-footer__icon"src="assets/png/i.png"alt="icon"/> </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Muthuvel M</h4>
            <p class="main-footer__short-desc">
              FrontEnd Developer , Smart , Fast leaner.
            </p>
          </div>
        </div>
      </div>
      <div class="credit"> Created by <span>Muthuvel M</span> </div>
    </footer>
    
        </div>
        
        );
    }
}
export default Home;
