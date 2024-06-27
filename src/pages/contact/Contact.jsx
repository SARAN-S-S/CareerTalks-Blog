import React from 'react';
import './contact.css';

export default function Contact() {
  const members = [
    {
      name: 'Jayaprakash S',
      department: 'Electronics and Communication Engineering',
      email: 'jayaprakash.ec21@bitsathy.ac.in',
      linkedin: 'https://www.linkedin.com/in/saran-s-s-84a696245/',
    },
    {
      name: 'SARAN S S',
      department: 'Electronics and Communication Engineering',
      email: 'saran.ec21@bitsathy.ac.in',
      linkedin: 'https://www.linkedin.com/in/saran-s-s-84a696245/',
    },
    {
      name: 'VISHNU S',
      department: 'Electronics and Communication Engineering',
      email: 'vishnu.ec21@bitsathy.ac.in',
      linkedin: 'https://www.linkedin.com/in/saran-s-s-84a696245/',
    },
    {
      name: 'GNANAPRAKASH G',
      department: 'Electronics and Communication Engineering',
      email: 'gnanaprakash.ec21@bitsathy.ac.in',
      linkedin: 'https://www.linkedin.com/in/saran-s-s-84a696245/',
    },
  ];

  return (
    <div className="contactContainer">
      {members.map((member, index) => (
        <div className="contactCard" key={index}>
          <h2 className="contactName">Name: {member.name}</h2>
          <p className="contactDepartment">Department: {member.department}</p>
          <a href={`mailto:${member.email}`} className="contactEmail">Email: {member.email}</a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contactLink">
            LinkedIn
          </a>
        </div>
      ))}
    </div>
  );
}
