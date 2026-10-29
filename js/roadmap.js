const roadmapData = {
  software: {
    name: "Software Development",
    steps: [
      { title: "Learn HTML and CSS", detail: "Build simple pages with headings, lists, images, links and basic layouts." },
      { title: "Practise JavaScript fundamentals", detail: "Learn variables, conditions, loops, functions and how to change a page with the DOM." },
      { title: "Build small interactive websites", detail: "Make things like a to-do list or a quiz that respond to clicks and input." },
      { title: "Learn Git and GitHub", detail: "Save your work with commits and put your projects online in repositories." },
      { title: "Create portfolio projects", detail: "Finish two or three complete projects and write a short README for each." },
      { title: "Apply for internships or junior roles", detail: "Prepare a simple resume with your project links and apply to roles that match your level." }
    ]
  },

  data: {
    name: "Data Science and Analytics",
    steps: [
      { title: "Learn spreadsheets and basic statistics", detail: "Practise formulas, sorting, filtering, averages and simple charts in Excel or Google Sheets." },
      { title: "Learn SQL", detail: "Write queries to select, filter and group data from a database." },
      { title: "Learn Python basics and pandas", detail: "Read data files, clean missing values and calculate summaries." },
      { title: "Practise on real datasets", detail: "Use free public datasets and make clear charts that answer a question." },
      { title: "Build small analysis projects", detail: "Write up two or three projects explaining your question, method and findings." },
      { title: "Apply for internships or junior analyst roles", detail: "Share your projects and apply to roles that mention Excel, SQL or Python." }
    ]
  },

  cybersecurity: {
    name: "Cybersecurity",
    steps: [
      { title: "Learn networking basics", detail: "Understand IP addresses, DNS, HTTP and how data travels across a network." },
      { title: "Get comfortable with Linux", detail: "Practise the command line, files, permissions and simple commands." },
      { title: "Learn about common threats", detail: "Study phishing, malware and weak passwords, and how to prevent them." },
      { title: "Practise in legal labs", detail: "Use beginner training platforms and your own virtual machines. Never test other people's systems." },
      { title: "Learn simple Python scripting", detail: "Write small scripts to automate repeated tasks." },
      { title: "Apply for IT support or junior security roles", detail: "Start in IT support or networking if needed and grow towards security." }
    ]
  },

  design: {
    name: "UI/UX Design",
    steps: [
      { title: "Learn design basics", detail: "Study layout, spacing, colour contrast and readable fonts." },
      { title: "Learn a design tool such as Figma", detail: "Practise frames, shapes, text and simple clickable prototypes." },
      { title: "Study apps you use", detail: "Note what feels easy or confusing, and why." },
      { title: "Create wireframes and prototypes", detail: "Sketch screens on paper first, then build clickable versions." },
      { title: "Collect feedback", detail: "Ask friends to try your design and notice where they get stuck." },
      { title: "Build a portfolio and apply", detail: "Show two or three projects with the problem, your process and the result." }
    ]
  },

  business: {
    name: "Business and Management",
    steps: [
      { title: "Learn business basics", detail: "Cover simple accounting, economics and how organisations are structured." },
      { title: "Improve your communication", detail: "Practise presentations, emails and group discussions." },
      { title: "Learn Excel and project planning", detail: "Make simple budgets, schedules and task lists." },
      { title: "Take a leadership task", detail: "Organise part of a college event or club activity." },
      { title: "Do an internship or small project", detail: "Get real experience, even if it is short." },
      { title: "Apply for trainee roles", detail: "Use your experience and communication skills to apply for entry-level positions." }
    ]
  },

  marketing: {
    name: "Digital Marketing",
    steps: [
      { title: "Learn how digital marketing works", detail: "Understand social media, search engines, email and content marketing." },
      { title: "Practise writing", detail: "Write short posts, captions and a simple blog article." },
      { title: "Learn basic design", detail: "Make posters and banners with a tool such as Canva." },
      { title: "Learn the basics of analytics", detail: "Read simple numbers such as visits, clicks and reach." },
      { title: "Run a small campaign", detail: "Promote a college club or your own page and see what works." },
      { title: "Apply for internships and junior roles", detail: "Share your campaign results and apply to entry-level marketing roles." }
    ]
  }
};

const careerKeys = ["software", "data", "cybersecurity", "design", "business", "marketing"];

const buttonsBox = document.getElementById("career-buttons");
const pickMessage = document.getElementById("pick-message");
const contentBox = document.getElementById("roadmap-content");
const stepsBox = document.getElementById("steps");


function showRoadmap(key) {
  const career = roadmapData[key];

  document.getElementById("career-name").textContent = career.name + " Roadmap";
  stepsBox.innerHTML = "";

  for (let i = 0; i < career.steps.length; i++) {
    const card = document.createElement("div");
    card.className = "card step";

    const number = document.createElement("div");
    number.className = "step-number";
    number.textContent = i + 1;

    const text = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = career.steps[i].title;

    const detail = document.createElement("p");
    detail.textContent = career.steps[i].detail;

    text.appendChild(title);
    text.appendChild(detail);
    card.appendChild(number);
    card.appendChild(text);
    stepsBox.appendChild(card);
  }

  pickMessage.hidden = true;
  contentBox.hidden = false;

  
  const buttons = buttonsBox.children;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].dataset.career === key) {
      buttons[i].className = "btn";
    } else {
      buttons[i].className = "btn btn-secondary";
    }
  }

  
  try {
    sessionStorage.setItem("selectedCareer", key);
  } catch (error) {
    
  }
}


function makeButtons() {
  for (let i = 0; i < careerKeys.length; i++) {
    const key = careerKeys[i];
    const button = document.createElement("button");
    button.className = "btn btn-secondary";
    button.textContent = roadmapData[key].name;
    button.dataset.career = key;
    button.addEventListener("click", function () {
      showRoadmap(key);
    });
    buttonsBox.appendChild(button);
  }
}


function getSelectedCareer() {
  try {
    return sessionStorage.getItem("selectedCareer");
  } catch (error) {
    return null;
  }
}

makeButtons();

const selected = getSelectedCareer();
if (selected !== null && roadmapData[selected] !== undefined) {
  showRoadmap(selected);
}