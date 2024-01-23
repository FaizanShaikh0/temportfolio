import React from 'react';
import '../home/home.css'
import profile from '../../images/profile.png'

function Home() {
    return (
        <section id='Home' className="home section grid">
            <img src={profile} alt="" className='home_img' />
            <div className="home_content">
                <div className="home_data">
                    <h1 className="home_title">
                        <span>I'm Faizan Shaikh,</span> Web Developer.
                    </h1>
                    <p className='home_des'>
                        I'm a Pune based web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                    </p>
                    <div className="color_block"></div>
                </div>
            </div>
        </section>
    );
}
export default Home;