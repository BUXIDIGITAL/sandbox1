// Resume Builder JavaScript

// State Management
let resumeData = {
    template: 'modern',
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
    experience: [],
    education: [],
    skills: '',
    certifications: ''
};

let experienceCount = 0;
let educationCount = 0;
let zoomLevel = 100;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    setupEventListeners();
    addExperienceItem();
    addEducationItem();
    updatePreview();
});

// Setup Event Listeners
function setupEventListeners() {
    // Template selection
    document.getElementById('templateSelect').addEventListener('change', (e) => {
        resumeData.template = e.target.value;
        saveToLocalStorage();
        updatePreview();
    });

    // Personal info inputs - use both 'input' and 'keyup' for better compatibility
    const personalFields = ['fullName', 'jobTitle', 'email', 'phone', 'location', 'linkedin', 'website', 'summary', 'skills', 'certifications'];
    personalFields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            // Use input event for real-time updates
            element.addEventListener('input', (e) => {
                resumeData[field] = e.target.value;
                updatePreview();
                saveToLocalStorage();
            });
            
            // Also listen to keyup as backup
            element.addEventListener('keyup', (e) => {
                resumeData[field] = e.target.value;
                updatePreview();
            });
            
            // And change event for when field loses focus
            element.addEventListener('change', (e) => {
                resumeData[field] = e.target.value;
                updatePreview();
                saveToLocalStorage();
            });
        } else {
            console.warn(`Element not found: ${field}`);
        }
    });

    // Add buttons
    document.getElementById('addExperience').addEventListener('click', addExperienceItem);
    document.getElementById('addEducation').addEventListener('click', addEducationItem);

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadPDF);

    // Zoom controls
    document.getElementById('zoomIn').addEventListener('click', () => {
        zoomLevel = Math.min(150, zoomLevel + 10);
        updateZoom();
    });

    document.getElementById('zoomOut').addEventListener('click', () => {
        zoomLevel = Math.max(50, zoomLevel - 10);
        updateZoom();
    });
}

// Add Experience Item
function addExperienceItem() {
    experienceCount++;
    const container = document.getElementById('experienceContainer');
    const item = document.createElement('div');
    item.className = 'experience-item';
    item.dataset.id = experienceCount;
    
    item.innerHTML = `
        <div class="item-header">
            <span class="item-number">Experience #${experienceCount}</span>
            <button class="btn-remove" onclick="removeExperience(${experienceCount})">Remove</button>
        </div>
        <input type="text" class="form-input exp-title" placeholder="Job Title" data-field="title">
        <input type="text" class="form-input exp-company" placeholder="Company Name" data-field="company">
        <input type="text" class="form-input exp-location" placeholder="Location" data-field="location">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <input type="text" class="form-input exp-start" placeholder="Start Date (e.g., Jan 2020)" data-field="startDate">
            <input type="text" class="form-input exp-end" placeholder="End Date (or 'Present')" data-field="endDate">
        </div>
        <textarea class="form-textarea exp-description" rows="4" placeholder="Describe your responsibilities and achievements (use bullet points with - or •)" data-field="description"></textarea>
    `;
    
    container.appendChild(item);
    
    // Add event listeners to new inputs
    item.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            updateExperienceData();
            saveToLocalStorage();
            updatePreview();
        });
    });
    
    updateExperienceData();
}

// Remove Experience Item
function removeExperience(id) {
    const item = document.querySelector(`.experience-item[data-id="${id}"]`);
    if (item) {
        item.remove();
        updateExperienceData();
        saveToLocalStorage();
        updatePreview();
    }
}

// Update Experience Data
function updateExperienceData() {
    resumeData.experience = [];
    document.querySelectorAll('.experience-item').forEach(item => {
        const exp = {
            title: item.querySelector('.exp-title').value,
            company: item.querySelector('.exp-company').value,
            location: item.querySelector('.exp-location').value,
            startDate: item.querySelector('.exp-start').value,
            endDate: item.querySelector('.exp-end').value,
            description: item.querySelector('.exp-description').value
        };
        resumeData.experience.push(exp);
    });
}

// Add Education Item
function addEducationItem() {
    educationCount++;
    const container = document.getElementById('educationContainer');
    const item = document.createElement('div');
    item.className = 'education-item';
    item.dataset.id = educationCount;
    
    item.innerHTML = `
        <div class="item-header">
            <span class="item-number">Education #${educationCount}</span>
            <button class="btn-remove" onclick="removeEducation(${educationCount})">Remove</button>
        </div>
        <input type="text" class="form-input edu-degree" placeholder="Degree (e.g., Bachelor of Science)" data-field="degree">
        <input type="text" class="form-input edu-school" placeholder="School/University Name" data-field="school">
        <input type="text" class="form-input edu-location" placeholder="Location" data-field="location">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <input type="text" class="form-input edu-start" placeholder="Start Year" data-field="startDate">
            <input type="text" class="form-input edu-end" placeholder="End Year (or 'Expected')" data-field="endDate">
        </div>
        <textarea class="form-textarea edu-details" rows="2" placeholder="Additional details (GPA, honors, relevant coursework - optional)" data-field="details"></textarea>
    `;
    
    container.appendChild(item);
    
    // Add event listeners to new inputs
    item.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            updateEducationData();
            saveToLocalStorage();
            updatePreview();
        });
    });
    
    updateEducationData();
}

// Remove Education Item
function removeEducation(id) {
    const item = document.querySelector(`.education-item[data-id="${id}"]`);
    if (item) {
        item.remove();
        updateEducationData();
        saveToLocalStorage();
        updatePreview();
    }
}

// Update Education Data
function updateEducationData() {
    resumeData.education = [];
    document.querySelectorAll('.education-item').forEach(item => {
        const edu = {
            degree: item.querySelector('.edu-degree').value,
            school: item.querySelector('.edu-school').value,
            location: item.querySelector('.edu-location').value,
            startDate: item.querySelector('.edu-start').value,
            endDate: item.querySelector('.edu-end').value,
            details: item.querySelector('.edu-details').value
        };
        resumeData.education.push(edu);
    });
}

// Update Preview
function updatePreview() {
    const preview = document.getElementById('resumePreview');
    preview.className = `resume-preview ${resumeData.template}-template`;
    
    let html = generateResumeHTML();
    preview.innerHTML = html;
    
    // Debug logging
    console.log('Preview updated with data:', resumeData);
}

// Generate Resume HTML
function generateResumeHTML() {
    const { fullName, jobTitle, email, phone, location, linkedin, website, summary, experience, education, skills, certifications } = resumeData;
    
    console.log('Generating HTML with:', { fullName, jobTitle, email, phone, location });
    
    let html = '<div class="resume-header">';
    html += `<div class="resume-name">${fullName || 'Your Name'}</div>`;
    html += `<div class="resume-title">${jobTitle || 'Your Professional Title'}</div>`;
    html += '<div class="resume-contact">';
    if (email) html += `<span>📧 ${email}</span>`;
    if (phone) html += `<span>📱 ${phone}</span>`;
    if (location) html += `<span>📍 ${location}</span>`;
    if (linkedin) html += `<span>💼 LinkedIn</span>`;
    if (website) html += `<span>🌐 Portfolio</span>`;
    html += '</div></div>';
    
    // Summary
    if (summary) {
        html += '<div class="resume-section">';
        html += '<div class="section-title">Professional Summary</div>';
        html += `<div class="resume-summary">${summary}</div>`;
        html += '</div>';
    }
    
    // Experience
    if (experience.length > 0 && experience.some(exp => exp.title || exp.company)) {
        html += '<div class="resume-section">';
        html += '<div class="section-title">Work Experience</div>';
        experience.forEach(exp => {
            if (exp.title || exp.company) {
                html += '<div class="experience-item">';
                html += `<div class="item-title">${exp.title || 'Job Title'}</div>`;
                html += `<div class="item-company">${exp.company || 'Company Name'}${exp.location ? ' • ' + exp.location : ''}</div>`;
                if (exp.startDate || exp.endDate) {
                    html += `<div class="item-date">${exp.startDate || 'Start'} - ${exp.endDate || 'End'}</div>`;
                }
                if (exp.description) {
                    html += '<div class="item-description">';
                    const lines = exp.description.split('\n').filter(line => line.trim());
                    if (lines.length > 0) {
                        html += '<ul>';
                        lines.forEach(line => {
                            const cleanLine = line.replace(/^[-•]\s*/, '').trim();
                            if (cleanLine) html += `<li>${cleanLine}</li>`;
                        });
                        html += '</ul>';
                    }
                    html += '</div>';
                }
                html += '</div>';
            }
        });
        html += '</div>';
    }
    
    // Education
    if (education.length > 0 && education.some(edu => edu.degree || edu.school)) {
        html += '<div class="resume-section">';
        html += '<div class="section-title">Education</div>';
        education.forEach(edu => {
            if (edu.degree || edu.school) {
                html += '<div class="education-item">';
                html += `<div class="item-title">${edu.degree || 'Degree'}</div>`;
                html += `<div class="item-school">${edu.school || 'School Name'}${edu.location ? ' • ' + edu.location : ''}</div>`;
                if (edu.startDate || edu.endDate) {
                    html += `<div class="item-date">${edu.startDate || 'Start'} - ${edu.endDate || 'End'}</div>`;
                }
                if (edu.details) {
                    html += `<div class="item-description">${edu.details}</div>`;
                }
                html += '</div>';
            }
        });
        html += '</div>';
    }
    
    // Skills
    if (skills) {
        html += '<div class="resume-section">';
        html += '<div class="section-title">Skills</div>';
        html += '<div class="skills-list">';
        const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);
        skillsArray.forEach(skill => {
            html += `<span class="skill-tag">${skill}</span>`;
        });
        html += '</div></div>';
    }
    
    // Certifications
    if (certifications) {
        html += '<div class="resume-section">';
        html += '<div class="section-title">Certifications</div>';
        html += '<div class="certifications-list">';
        const certLines = certifications.split('\n').filter(line => line.trim());
        certLines.forEach(cert => {
            html += `<div>• ${cert}</div>`;
        });
        html += '</div></div>';
    }
    
    return html;
}

// Update Zoom
function updateZoom() {
    const preview = document.getElementById('resumePreview');
    preview.style.transform = `scale(${zoomLevel / 100})`;
    document.getElementById('zoomLevel').textContent = `${zoomLevel}%`;
}

// Save to Local Storage
function saveToLocalStorage() {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    document.getElementById('saveBtn').textContent = '💾 Saved!';
    setTimeout(() => {
        document.getElementById('saveBtn').textContent = '💾 Auto-Saved';
    }, 2000);
}

// Load from Local Storage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
        resumeData = JSON.parse(saved);
        
        // Populate form fields
        document.getElementById('templateSelect').value = resumeData.template || 'modern';
        document.getElementById('fullName').value = resumeData.fullName || '';
        document.getElementById('jobTitle').value = resumeData.jobTitle || '';
        document.getElementById('email').value = resumeData.email || '';
        document.getElementById('phone').value = resumeData.phone || '';
        document.getElementById('location').value = resumeData.location || '';
        document.getElementById('linkedin').value = resumeData.linkedin || '';
        document.getElementById('website').value = resumeData.website || '';
        document.getElementById('summary').value = resumeData.summary || '';
        document.getElementById('skills').value = resumeData.skills || '';
        document.getElementById('certifications').value = resumeData.certifications || '';
        
        // Restore experience items
        if (resumeData.experience && resumeData.experience.length > 0) {
            resumeData.experience.forEach((exp, index) => {
                if (index > 0) addExperienceItem();
                const items = document.querySelectorAll('.experience-item');
                const item = items[index];
                if (item) {
                    item.querySelector('.exp-title').value = exp.title || '';
                    item.querySelector('.exp-company').value = exp.company || '';
                    item.querySelector('.exp-location').value = exp.location || '';
                    item.querySelector('.exp-start').value = exp.startDate || '';
                    item.querySelector('.exp-end').value = exp.endDate || '';
                    item.querySelector('.exp-description').value = exp.description || '';
                }
            });
        }
        
        // Restore education items
        if (resumeData.education && resumeData.education.length > 0) {
            resumeData.education.forEach((edu, index) => {
                if (index > 0) addEducationItem();
                const items = document.querySelectorAll('.education-item');
                const item = items[index];
                if (item) {
                    item.querySelector('.edu-degree').value = edu.degree || '';
                    item.querySelector('.edu-school').value = edu.school || '';
                    item.querySelector('.edu-location').value = edu.location || '';
                    item.querySelector('.edu-start').value = edu.startDate || '';
                    item.querySelector('.edu-end').value = edu.endDate || '';
                    item.querySelector('.edu-details').value = edu.details || '';
                }
            });
        }
    }
}

// Download PDF
async function downloadPDF() {
    const button = document.getElementById('downloadBtn');
    button.textContent = '⏳ Generating PDF...';
    button.disabled = true;
    
    try {
        const element = document.getElementById('resumePreview');
        
        // Use html2canvas to capture the resume
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        
        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: 'letter'
        });
        
        const imgWidth = 8.5;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Download
        const fileName = resumeData.fullName 
            ? `${resumeData.fullName.replace(/\s+/g, '_')}_Resume.pdf`
            : 'Resume.pdf';
        pdf.save(fileName);
        
        button.textContent = '✅ Downloaded!';
        setTimeout(() => {
            button.textContent = '📥 Download PDF';
            button.disabled = false;
        }, 3000);
    } catch (error) {
        console.error('Error generating PDF:', error);
        button.textContent = '❌ Error - Try Again';
        setTimeout(() => {
            button.textContent = '📥 Download PDF';
            button.disabled = false;
        }, 3000);
    }
}

// Make functions globally accessible
window.removeExperience = removeExperience;
window.removeEducation = removeEducation;
