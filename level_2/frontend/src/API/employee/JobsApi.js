const jobs = [
    {
        "job_title": "Software Engineer",
        "company_name": "Tech Innovators Inc.",
        "job_description": "Design, develop, and maintain software solutions.",
        "location": "Bengaluru, India",
        "salary": "₹10,00,000 - ₹12,00,000",
        "job_qualification": "Bachelor's degree in Computer Science or related field.",
        "experience_level": "Mid-level",
        "job_id": "SOFTE222QTER001"
    },
    {
        "job_title": "Data Scientist",
        "company_name": "Data Insights LLC",
        "job_description": "Analyze and interpret complex data to provide business insights.",
        "location": "Hyderabad, India",
        "salary": "₹12,00,000 - ₹15,00,000",
        "job_qualification": "Master's in Data Science or equivalent.",
        "experience_level": "Mid-level",
        "job_id": "DATDA206KCXT002"
    },
    {
        "job_title": "Frontend Developer",
        "company_name": "Web Solutions Co.",
        "job_description": "Develop responsive web interfaces using modern JavaScript frameworks.",
        "location": "Pune, India",
        "salary": "₹8,00,000 - ₹10,00,000",
        "job_qualification": "Proficiency in React or Angular.",
        "experience_level": "Entry-level",
        "job_id": "FROWE505ZOLR003"
    },
    {
        "job_title": "Backend Developer",
        "company_name": "CloudSync",
        "job_description": "Build and maintain server-side logic for web applications.",
        "location": "Chennai, India",
        "salary": "₹10,00,000 - ₹14,00,000",
        "job_qualification": "Strong knowledge of Node.js and databases.",
        "experience_level": "Mid-level",
        "job_id": "BACCL422XEUR004"
    },
    {
        "job_title": "DevOps Engineer",
        "company_name": "AgileOps",
        "job_description": "Ensure seamless integration and delivery of software services.",
        "location": "Mumbai, India",
        "salary": "₹12,00,000 - ₹16,00,000",
        "job_qualification": "Experience with CI/CD tools like Jenkins or GitHub Actions.",
        "experience_level": "Mid-level",
        "job_id": "DEVAG524LTSR005"
    },
    {
        "job_title": "Cybersecurity Analyst",
        "company_name": "SecureNet",
        "job_description": "Monitor and protect systems from cyber threats.",
        "location": "Delhi, India",
        "salary": "₹10,00,000 - ₹13,00,000",
        "job_qualification": "Certified Ethical Hacker (CEH) or similar certification.",
        "experience_level": "Mid-level",
        "job_id": "CYBSE105RYHT006"
    },
    {
        "job_title": "AI/ML Engineer",
        "company_name": "AI Pioneers",
        "job_description": "Develop and deploy machine learning models for real-world applications.",
        "location": "Bengaluru, India",
        "salary": "₹15,00,000 - ₹20,00,000",
        "job_qualification": "Experience in Python and TensorFlow/PyTorch.",
        "experience_level": "Senior-level",
        "job_id": "AIZAI351QHIR007"
    },
    {
        "job_title": "Full Stack Developer",
        "company_name": "CodeXperts",
        "job_description": "Work on both frontend and backend components of web applications.",
        "location": "Noida, India",
        "salary": "₹10,00,000 - ₹14,00,000",
        "job_qualification": "Proficiency in JavaScript, HTML, CSS, and backend frameworks.",
        "experience_level": "Mid-level",
        "job_id": "FULCO533UMIR008"
    },
    {
        "job_title": "Mobile App Developer",
        "company_name": "AppWorld",
        "job_description": "Develop and maintain mobile applications for iOS and Android.",
        "location": "Kochi, India",
        "salary": "₹7,00,000 - ₹10,00,000",
        "job_qualification": "Proficiency in Flutter or Swift/Java.",
        "experience_level": "Entry-level",
        "job_id": "MOBAP741WHMR009"
    },
    {
        "job_title": "Game Developer",
        "company_name": "Gaming Studio",
        "job_description": "Design and code interactive gaming experiences.",
        "location": "Ahmedabad, India",
        "salary": "₹8,00,000 - ₹12,00,000",
        "job_qualification": "Experience with Unity or Unreal Engine.",
        "experience_level": "Mid-level",
        "job_id": "GAMGA841VDER010"
    }
]

export const getJobsList = () => {
      return jobs
}

export const getJobById = (id) => {
    const job = jobs.find( (item) => item.job_id === id)
    return job
}