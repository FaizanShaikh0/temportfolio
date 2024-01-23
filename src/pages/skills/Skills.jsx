// skills.js
import React from 'react';
import './skills.css';
import { skillsData } from '../../assets/imgindex';

function Skills() {
  return (
    <div id='Skills' className='parentPng'>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='skill__container'>

        <div className='app__skill-container left'>
          <ul className='png-item'>
            {skillsData.map((item, index) => (
              <div className='app__skill-list'>
                <div className='app__flex' key={`png-${index}`}>
                  <img src={item.logo} alt={`Logo for ${item.name}`} />
                </div>
                <p className='p-text'>{item.name}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className='right'>
          <h1>Web Development Intern</h1>
          <p>Barari iTech Pvt Ltd.</p>
          <div className='paragraph__section'>
          <p className='paragraph1'>
            - Collaborated with a dynamic team of skilled developers to
            conceptualize, design, develop, and maintain the official
            website for a prominent Medical Association. Actively
            contributed to brainstorming sessions aimed at refining
            website requirements and elevating the overall user
            experience.
          </p>

          <p className='paragraph2'> - Leveraged a comprehensive skill set encompassing HTML,
            CSS, Bootstrap, JavaScript, Python, MySQL, and Django to
            implement a cutting-edge and responsive web solution.
            Demonstrated proficiency in translating design concepts into
            a visually appealing interface, ensuring an engaging and
            intuitive user experience.</p>

          <p className='paragraph3'> - Played a key role in utilizing HTML for structuring the website,
            CSS for crafting visually pleasing styles, and Bootstrap for
            creating a responsive and mobile-friendly layout. Actively
            employed JavaScript to introduce dynamic and interactive
            elements, enhancing user engagement and satisfaction.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;

