import React from "react";
// import '../about/about.css'
import EducationSection from "../../components/EducationSection";


// import { IoMdStarOutline } from "react-icons/io";
function About() {
    return (
        <div id="About" className="about">

            <h2>About</h2>
            
            <EducationSection year="2021 - 2023" school="Vishwakarma College Of Arts Commerce and Science" percentage="80.85 %" />

            <EducationSection year="2021 - 2023" school="Poona Collage Of Arts Commerce and Science " percentage="72.56 %" />

            <EducationSection year="2021 - 2023" school="S.J.V" percentage="60%" />

            <EducationSection year="2021 - 2023" school="S.J.V" percentage="80%" />

            
        </div>
    );
}

export default About;