// EducationSection.js

import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import '../pages/about/about.css'; // You can create a separate CSS file for styling

function EducationSection({ year, school, percentage }) {
    return (
        <div className="education-section">
            {/* <h4>Education</h4> */}
            <div className="star-icon">
                <span>
                    <IoMdStarOutline style={{ color: 'red' }} />
                </span>
                <p className="year">{year}</p>
            </div>
            <div>
                <p className="abt-text">{school}</p>
                <p className="percentage">Percentage: {percentage}</p>
            </div>
        </div>
    );
}

export default EducationSection;
