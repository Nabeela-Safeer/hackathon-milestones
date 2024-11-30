"use strict";
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experiance = document.getElementById('experiance').value;
    const skills = document.getElementById('skills').value;
    const resumeHTML = `<h2><b>Editable Resume</b></h2>
    <h3>personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experiance</h3>
    <p contenteditable="true">${experiance}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>`;
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
