import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">

      {/* Header */}
      <div className="header">
        <h1>Manoj GK</h1>
        <p>MCA Student | Job Aspirant</p>
        <p>Email: manoj@gmail.com | Phone: 9999999999</p>
      </div>

      {/* Career Objective */}
      <div className="section">
        <h2>Career Objective</h2>
        <p>
          Motivated MCA student seeking an entry-level software developer role
          to apply programming skills and contribute to organizational growth.
        </p>
      </div>

      {/* Education */}
      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>MCA – NMIT College, Bengaluru (2024–2026)</li>
          <li>BCA – XYZ College (2021–2024)</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>React JS</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Java, Python</li>
          <li>MySQL</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="section">
        <h2>Projects</h2>
        <ul>
          <li>Student Registration System using React</li>
          <li>Expense Tracker App</li>
          <li>Online Book Cart CRUD Application</li>
        </ul>
      </div>

      {/* Certificates */}
      <div className="section">
        <h2>Certificates</h2>
        <ul>
          <li>React JS Certification</li>
          <li>Python Programming Certificate</li>
          <li>AWS Cloud Basics</li>
        </ul>
      </div>

      {/* Declaration */}
      <div className="section">
        <h2>Declaration</h2>
        <p>
          I hereby declare that the above information is true to the best of my knowledge.
        </p>
      </div>

    </div>
  );
}

export default Resume;
