import React, { useEffect, useState } from 'react';
import Prof from "./img/prof.png";
import twitter from "./img/twitter.png";
import instagram from "./img/instagram.png";
import gmail from "./img/gmail.png";
import lee from "./img/lee.png";
import cc from "./img/cc.png";
import udemy from "./img/udemy.png";
import git from "./img/git.png";
import mb from "./img/mb.avif";
import ebook from "./img/ebook.jpeg";
import qui from "./img/qui.avif";
import exp from "./img/exp.png";
import kotlin from "./img/kotlin.png";
import js from "./img/java-script.png";
import java from "./img/java.png";
import python from "./img/python.png";
import html from "./img/html-5.png";
import css from "./img/css-3.png";
import linkedin from "./img/linkedin.png";
import axios from "axios";
import react from "./img/react.png";
import express from "./img/express.png"
import chat from "./img/download.jpeg"
const Portfolio = () => {
  const [theme, setTheme] = useState('light');
  const [text,Settext]=useState('');
  const [name,Setname]=useState('');
  const [Ph,SetPh]=useState();
  const [Status,SetStatus]=useState(false)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }; 
  // useEffect(()=>{
     
  // },[Status])
  const HandelMsg = async (e) => {
    e.preventDefault();
    try {
      if (name.trim() !== '' && Ph.trim() !== '' && text.trim() !== '') {
        const Msg = await axios.post("http://localhost:6900/post", {
          name,
          Ph,
          text
        });
        SetStatus(true); 
        Setname('');
        SetPh('');
        Settext('');
      } else {
        SetStatus(false);
      }
    } catch (error) {
      console.log("error: " + error);
    }
  }
  

  return (
    <div id="body" className={theme}>
      <section id="up"></section>
      <section id="down"></section>
      <section id="left"></section>
      <section id="right"></section>
      <header>
        <div className="container">
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#hero2">Achievements</a></li>
              <li><a href="#hero3">Projects</a></li>
              <li><a href="#hero4">Skills</a></li>
              <li><a href="#hero5">Contact</a></li>
              <li><button id="theme" onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button></li>
            </ul>
          </nav>
        </div>
      </header>
      <br /><br />
      <section id="hero">
        <div className="home">
          <div className="prof">
            <img id="profile" src={Prof} alt="profile" width="400px" />
          </div>
          <div id="prof">
            <h1>About Me:</h1>
            <p>Hi I am Mugeish Kumar iam a FullStack Developer MERN <br />i have done my UG in B.Tech Information Technology <br />from Sri Eashwar College of Engineering</p>
          </div>
          <div id="wel">
            <span>Iam<br /><h2>Mugeish kuamr S</h2><br />FullStack Developer(MERN)</span><br />
            <div id="apps">
              <a href="https://twitter.com/mugeish2005"><img className="conapp" src={twitter} alt="" width="30px" /></a>
              <a href="https://www.linkedin.com/in/mugeish-kumar-3a9258251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="conapp" src={linkedin} alt="" width="30px" /></a>
              <a href="https://www.instagram.com"><img className="conapp" src={instagram} alt="" width="30px" /></a>
              <a href="mailto:kmugeis.2005@gmail.com" ><img className="conapp" src={gmail} alt="" width="30px" /></a>
            </div><br />
            <div id="cv">
              <a href="C:\Users\Mugeish\Downloads\MyResumeFinal1.pdf" id="dwcv" download="MyResumeFinal1.pdf">Download My CV</a>
            </div>
          </div>
        </div>
      </section>
      <section id="hero2">
        <h1>My Achievements:</h1><br /><br /><br /><br />
        <div id="achivements">
          <div className="ach">
            <h1>Compatitive Programming:</h1>
            <ul>
              <li><a href="https://leetcode.com/Mugeish_kumars/"><img src={lee} alt="" width="40px" /></a>Leetcode</li><br />
              <li><a href="https://www.codechef.com/users/mugeish_kumar"><img src={cc} alt="" width="40px" /></a>CodeChef</li>
            </ul>
          </div>
          <div className="ach">
            <h1>Courses:</h1><br /><br />
            <ul>
              <li><a href="https://www.udemy.com/course/datastructurescncpp/learn/lecture/13193486?start=0"><img src={udemy} width="50px" /></a>Mastering Data Structures using C</li><br />
              <li><a href="https://www.udemy.com/course/android-kotlin-developer/learn/lecture/40493104?start=45#overview"><img src={udemy}  width="50px" /></a>Android developoment using Kotlin</li>
            </ul>
          </div>
          <div className="ach">
            <h1>Hackathons/Other Events:</h1>
            <ul>
              <li>Placed 6th in national level Hackathon</li>
              <li>Paper Presentation in Hindustan</li>
              <li>Paper Presentation in KPR</li>
              <li>Also participated in IISF(1st round)</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="hero3">
        <h1 style={{ color: 'white' }}>Projects:</h1>
        <div className="grid-container">
          <div className="grid-item" id="g">
            <h1>Medical Chat Bot:</h1><br /><br />
            <div className="im">
              <img src={mb} alt="" width="170px" />
            </div>
            <p>Developed a medical chatbot website using HTML,CSS and JS which aims to develop an AI-powered conversational interface that can assist users with medical inquiries, provide health-related information, and offer basic medical advice. Leveraging natural language processing the chatbot will be capable of understanding user queries.</p><br />
            <a href="https://github.com/mugeishkumar912005?tab=repositories"><img src={git} alt="" width="80px" /></a>
          </div>
          <div className="grid-item" id="g1">
            <h1>Expense Tracker</h1><br /><br />
            <div className="im">
              <img src={exp} alt="" width="170px" />
            </div>
            <p>This expense tracker project facilitates users in recording expenses with details like amount, date, and category. It incorporates user authentication for data security and personalization. Expenses are categorized to provide users with insights into spending habits. Data is stored securely in a database, enabling analysis and visualization of spending patterns. Budgeting features help users set limits and track their expenditure against those limits. Reminders and notifications ensure users stay informed about upcoming expenses and bills. Exporting options allow users to save and share their expense data for further analysis or collaboration. Accessibility and localization features enhance usability and inclusivity. The project may be implemented as a web, mobile, or desktop application based on user preferences. Overall, it empowers users to manage their finances efficiently and make informed financial decisions.</p><br />
            <a href="https://github.com/mugeishkumar912005?tab=repositories"><img src={git} alt="" width="80px" /></a>
          </div>
          <div className="grid-item" id="g2">
            <h1>Ebook System</h1><br /><br /><br />
            <div className="im">
              <img src={ebook} alt="" width="170px" />
            </div>
            <p>This eBook system project enables users to access and manage digital books efficiently. It includes a user-friendly interface for browsing, searching, and reading eBooks. Authentication ensures secure access to personal libraries and preferences. eBooks are categorized based on genres, authors, or user-defined tags for easy navigation. A robust database stores eBook metadata and content securely. Features for bookmarking, highlighting, and note-taking enhance the reading experience. Integration with e-readers or mobile apps allows seamless access across devices. Options for exporting or sharing eBooks facilitate collaboration and offline reading. Accessibility features ensure inclusivity for users with different needs. Localization supports multiple languages for a global user base. Whether web-based, mobile, or desktop, the project aims to provide users with a rich and personalized reading experience.</p><br />
            <a href="https://github.com/mugeishkumar912005?tab=repositories"><img src={git} alt="" width="80px" /></a>
          </div>
          <div className="grid-item" id="g3">
            <h1>Online Quizz System</h1><br /><br /><br />
            <div className="im">
              <img src={qui} alt="" width="170px" />
            </div>
            <p>It is Quizz application which is used to generate and attend quizz based on the unique id generated to a particular quizz our quizz and its result are stored in our created</p><br /><br />
            <a href="https://github.com/mugeishkumar912005?tab=repositories"><img src={git} alt="" width="80px" /></a>
          </div>
        </div>
      </section>
      <section id="hero4">
  <h1>I am Skilled In:</h1><br /><br />
  <div className="grid-container2">
    <div className="grid-item2" id="s1">
      <p><img src={java} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk1"></div>
        <span>75%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s2">
      <p><img src={python} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk2"></div>
        <span>85%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s3">
      <p><img src={kotlin} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk3"></div>
        <span>40%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s4">
      <p><img src={html} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk4"></div>
        <span>90%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s5">
      <p><img src={css} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk5"></div>
        <span>75%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s6">
      <p><img src={js} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk6"></div>
        <span>70%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s7">
      <p><img src={express} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk7"></div>
        <span>75%</span>
      </div>
    </div><br />
    <div className="grid-item2" id="s8">
      <p><img src={react} alt="" width="40px" /></p>
      <div className="skills">
        <div id="sk8"></div>
        <span>75%</span>
      </div>
    </div>
  </div>
</section>

      <section id="hero5">
        <div id="con">
          <div id="ms">
            <h1>Contact Me Via:</h1>
            <input type="text" className="in " placeholder="Name" value={name} onChange={(e)=>{Setname(e.target.value)}}/>
            <input type="number" className="in " placeholder="Phone.No" value={Ph} onChange={(e)=>{SetPh(e.target.value)}} />
            <textarea name="Message" id="m1" cols="30" rows="10" placeholder="TYPE Here" value={text} onChange={(e)=>{Settext(e.target.value)}}></textarea>
            {Status && <div className="Status">
                 <p>Success</p>
              </div>}
            <div id="btcon">
              <a onClick={HandelMsg}>Share ur Toughts</a>
            </div>
          </div>
        </div>
      </section>
      <footer id="foot">
        <div className="container">
          <p>&copy; 2024 My Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
