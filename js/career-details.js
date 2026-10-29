// career-details.js
// Holds the information for every career and shows the selected one.

const careerData = {
  software: {
    name: "Software Development",
    overview: "Software developers design, write, test and maintain programs, websites and apps. The work involves a lot of problem solving and continuous learning.",
    skills: [
      "HTML, CSS and JavaScript",
      "One programming language such as Python or Java",
      "Logical thinking and problem solving",
      "Git and GitHub",
      "Basic knowledge of databases",
      "Teamwork and communication"
    ],
    roadmap: [
      "Learn HTML and CSS.",
      "Practise JavaScript fundamentals.",
      "Build small interactive websites.",
      "Learn Git and GitHub.",
      "Create portfolio projects.",
      "Apply for suitable internships or junior roles."
    ],
    jobs: [
      "Junior Web Developer",
      "Frontend Developer (entry level)",
      "Software Developer Trainee",
      "Software Testing Trainee"
    ],
    projects: [
      "To-do list app",
      "Quiz app",
      "Personal portfolio website",
      "Simple calculator"
    ],
    nextSteps: [
      "Choose one language and practise a little every day.",
      "Upload your projects to GitHub.",
      "Read other people's code to learn new ideas."
    ]
  },

  data: {
    name: "Data Science and Analytics",
    overview: "Data analysts collect, clean and study data to find patterns. Their findings help organisations make better decisions.",
    skills: [
      "Spreadsheets such as Excel",
      "Basic statistics",
      "SQL for reading data from databases",
      "Python basics",
      "Making charts and reports",
      "Attention to detail"
    ],
    roadmap: [
      "Learn spreadsheets and basic statistics.",
      "Learn SQL to read data from databases.",
      "Learn Python basics and a data library such as pandas.",
      "Practise cleaning and charting real datasets.",
      "Build two or three small analysis projects.",
      "Apply for data internships or junior analyst roles."
    ],
    jobs: [
      "Data Analyst Intern",
      "Junior Data Analyst",
      "Reporting Analyst Trainee",
      "MIS Executive"
    ],
    projects: [
      "Analyse a public dataset and make charts",
      "Sales report using Excel",
      "Analysis of a small survey of classmates"
    ],
    nextSteps: [
      "Download a free dataset and explore it.",
      "Complete a beginner data course.",
      "Write a short report explaining your findings."
    ]
  },

  cybersecurity: {
    name: "Cybersecurity",
    overview: "Cybersecurity professionals protect computers, networks and data from attacks and misuse. Many people start in IT support or networking before moving into security.",
    skills: [
      "Networking basics",
      "Linux and Windows basics",
      "Common threats such as phishing and malware",
      "Basic scripting",
      "Attention to detail",
      "An honest and ethical approach"
    ],
    roadmap: [
      "Learn computer networking basics.",
      "Get comfortable with the Linux command line.",
      "Learn about common threats and how to prevent them.",
      "Practise in legal beginner labs and learning platforms.",
      "Learn some Python for simple scripts.",
      "Apply for IT support or junior security roles."
    ],
    jobs: [
      "Junior Security Analyst",
      "IT Support Technician",
      "Network Support Engineer (entry level)",
      "Security Intern"
    ],
    projects: [
      "A password safety guide for students",
      "A simple password strength checker",
      "A virtual machine setup to practise Linux"
    ],
    nextSteps: [
      "Practise only on systems you own or in legal training labs.",
      "Follow beginner security blogs and courses.",
      "Join a college technical club."
    ]
  },

  design: {
    name: "UI/UX Design",
    overview: "UI/UX designers plan how websites and apps look and how easy they are to use. They think about the needs of users and test their ideas.",
    skills: [
      "Layout, colour and font basics",
      "A design tool such as Figma",
      "Understanding what users need",
      "Sketching wireframes",
      "Basic HTML and CSS (helpful)",
      "Accepting and using feedback"
    ],
    roadmap: [
      "Learn the basics of layout, colour and fonts.",
      "Learn to use a design tool such as Figma.",
      "Study apps you use and note what works well.",
      "Create wireframes and simple prototypes.",
      "Ask friends to test your designs and give feedback.",
      "Build a portfolio with two or three projects and apply."
    ],
    jobs: [
      "Junior UI Designer",
      "UX Design Intern",
      "Junior Web Designer",
      "Graphic Designer (entry level)"
    ],
    projects: [
      "Redesign one screen of a college app",
      "A mobile app prototype in Figma",
      "A landing page design for a student club"
    ],
    nextSteps: [
      "Practise by copying a screen you like, then improve it.",
      "Share your designs and ask for feedback.",
      "Put your best work in an online portfolio."
    ]
  },

  business: {
    name: "Business and Management",
    overview: "Business and management professionals plan, organise and lead people and resources so that an organisation can reach its goals.",
    skills: [
      "Communication and presentation",
      "Teamwork and leadership",
      "Planning and time management",
      "Basic accounting and finance",
      "Excel",
      "Problem solving"
    ],
    roadmap: [
      "Learn the basics of business, accounting and economics.",
      "Improve your communication and presentation skills.",
      "Learn Excel and basic project planning.",
      "Lead a small task in a college club or event.",
      "Complete an internship or a small business project.",
      "Apply for trainee roles."
    ],
    jobs: [
      "Business Development Trainee",
      "Management Trainee",
      "Operations Assistant",
      "HR Assistant",
      "Project Coordinator"
    ],
    projects: [
      "Plan the budget and schedule for a college event",
      "Write a business plan for a small student startup idea",
      "Survey what customers need from a local shop"
    ],
    nextSteps: [
      "Take responsibility for a task in a college event.",
      "Practise speaking in front of a group.",
      "Read about how small businesses work."
    ]
  },

  marketing: {
    name: "Digital Marketing",
    overview: "Digital marketers promote products, services and ideas online using social media, search engines, email and content.",
    skills: [
      "Writing and communication",
      "Social media basics",
      "Search engine optimisation (SEO) basics",
      "Basic analytics (visits and clicks)",
      "Simple design tools such as Canva",
      "Understanding what an audience wants"
    ],
    roadmap: [
      "Learn how social media, search and email marketing work.",
      "Practise writing short and clear posts.",
      "Learn basic design with a tool such as Canva.",
      "Learn the basics of analytics.",
      "Run a small campaign for a college club or your own page.",
      "Apply for internships and junior roles."
    ],
    jobs: [
      "Digital Marketing Intern",
      "Social Media Executive (entry level)",
      "Junior Content Writer",
      "SEO Assistant"
    ],
    projects: [
      "A one-month content calendar",
      "A social media page for a college club",
      "A small blog written with SEO basics"
    ],
    nextSteps: [
      "Start a small page or blog and post regularly.",
      "Check which posts get the most response and learn from them.",
      "Complete a free beginner marketing course."
    ]
  }
};

const careerKeys = ["software", "data", "cybersecurity", "design", "business", "marketing"];

const buttonsBox = document.getElementById("career-buttons");
const pickMessage = document.getElementById("pick-message");
const contentBox = document.getElementById("career-content");

// Put each item of an array into a list on the page
function fillList(listId, items) {
  const list = document.getElementById(listId);
  list.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.textContent = items[i];
    list.appendChild(li);
  }
}

// Show the information for one career
function showCareer(key) {
  const career = careerData[key];

  document.getElementById("career-name").textContent = career.name;
  document.getElementById("career-overview").textContent = career.overview;
  fillList("skills-list", career.skills);
  fillList("roadmap-list", career.roadmap);
  fillList("jobs-list", career.jobs);
  fillList("projects-list", career.projects);
  fillList("nextsteps-list", career.nextSteps);

  pickMessage.hidden = true;
  contentBox.hidden = false;

  // Make the selected career button look active
  const buttons = buttonsBox.children;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].dataset.career === key) {
      buttons[i].className = "btn";
    } else {
      buttons[i].className = "btn btn-secondary";
    }
  }
}

// Create one button for each career
function makeButtons() {
  for (let i = 0; i < careerKeys.length; i++) {
    const key = careerKeys[i];
    const button = document.createElement("button");
    button.className = "btn btn-secondary";
    button.textContent = careerData[key].name;
    button.dataset.career = key;
    button.addEventListener("click", function () {
      showCareer(key);
    });
    buttonsBox.appendChild(button);
  }
}

// Get the career chosen on the recommendations page
function getSelectedCareer() {
  try {
    return sessionStorage.getItem("selectedCareer");
  } catch (error) {
    return null;
  }
}

makeButtons();

const selected = getSelectedCareer();
if (selected !== null && careerData[selected] !== undefined) {
  showCareer(selected);
}