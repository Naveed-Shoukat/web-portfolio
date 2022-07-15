import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__cards">
          <div className="experience__card">
            <div className="experience__heading">
              <h3>Architect</h3>
            </div>
            <div className="experience__contents">
              <ul>
                <li>Architect Design</li>
                <li>Migration Strategy</li>
                <li>Team Lead and collaboration and Mentoring</li>
                <li>Requirement gathering and Planning</li>
                <li> Evaluating vendors for PaaS and IaaS</li>
                <li>Applications delivery through CI/CD</li>
                <li>Deployments</li>
              </ul>
            </div>
          </div>

          <div className="experience__card">
            <div className="experience__heading">
              <h3>DevOps</h3>
            </div>
            <div className="experience__contents">
              <ul>
                <li>providing cost effective and scalable solutions</li>
                <li>
                  Conducted code reviews, Architected the services an
                  infrastructure
                </li>
                <li>Managed multiple cross functional teams</li>
                <li>
                  Building cloud-native, scalable systems using CI/CD Pipelines
                </li>
                <li>Team Development and motivation</li>
                <li>Devised innovative ways to reduce waste</li>
                <li>Change failure rate by introducing CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experiencce__skills">
          <ul>
            <li>Hibernate</li>
            <li>Scrum</li>
            <li>Agile Methodologies</li>
            <li>Software Development</li>
            <li>UML</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Spring</li>
            <li>Project Management</li>
            <li>Design Patterns</li>
            <li>Web Services</li>
            <li>JSP</li>
            <li>XML</li>
            <li>Subversion</li>
            <li>Microsoft SQL Server</li>
            <li>SOA</li>
            <li>AJAX</li>
            <li>Spring Framework</li>
            <li>Struts</li>
            <li>Eclipse</li>
            <li>Tomcat</li>
            <li>Terracotta</li>
            <li>JMS</li>
            <li>Visual Studio</li>
            <li>JBoss Application Server</li>
            <li>Service-Oriented Architecture</li>
            <li>iBatis</li>
            <li>Java Enterprise Edition</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
