
const questions = [
  {
    icon: "💡",
    text: "Which activity do you enjoy most in your free time?",
    options: [
      { icon: "💻", text: "Building or fixing things on a computer", points: { software: 2, cybersecurity: 1 } },
      { icon: "🧮", text: "Solving puzzles and working with numbers", points: { data: 2, cybersecurity: 1 } },
      { icon: "🎨", text: "Drawing, designing or making things look good", points: { design: 2, marketing: 1 } },
      { icon: "🗓️", text: "Organising events or leading a group", points: { business: 2, marketing: 1 } },
      { icon: "📱", text: "Creating posts or videos for social media", points: { marketing: 2, design: 1 } }
    ]
  },
  {
    icon: "⚙️",
    text: "What type of work environment do you prefer?",
    options: [
      { icon: "💻", text: "Working on a computer, coding or building software", points: { software: 3 } },
      { icon: "👥", text: "Working with people, communication and teamwork", points: { business: 3, marketing: 1 } },
      { icon: "🎨", text: "Creative work like designing, writing or making visuals", points: { design: 3, marketing: 1 } },
      { icon: "📊", text: "Analysing data, solving problems and finding patterns", points: { data: 3 } },
      { icon: "🛡️", text: "Ensuring security, finding risks and protecting systems", points: { cybersecurity: 3 } },
      { icon: "📣", text: "Creating content, marketing and promoting products", points: { marketing: 3 } }
    ]
  },
  {
    icon: "🧩",
    text: "What kind of problem would you most like to solve?",
    options: [
      { icon: "🐞", text: "Finding out why a program is not working", points: { software: 2, cybersecurity: 1 } },
      { icon: "📈", text: "Finding patterns hidden in data", points: { data: 3 } },
      { icon: "🔒", text: "Finding weak points in a system and protecting it", points: { cybersecurity: 3 } },
      { icon: "🖱️", text: "Making an app or website easier and nicer to use", points: { design: 3 } },
      { icon: "📋", text: "Planning how a team or business should work", points: { business: 3 } },
      { icon: "📣", text: "Finding ways to make people interested in a product", points: { marketing: 3 } }
    ]
  },
  {
    icon: "📚",
    text: "Which subject do you enjoy the most?",
    options: [
      { icon: "💻", text: "Computer science or programming", points: { software: 3 } },
      { icon: "➗", text: "Mathematics or statistics", points: { data: 3 } },
      { icon: "🌐", text: "Computer networks and how systems work", points: { cybersecurity: 2, software: 1 } },
      { icon: "🖌️", text: "Art, drawing or design", points: { design: 3 } },
      { icon: "💼", text: "Commerce, economics or management", points: { business: 3 } },
      { icon: "📰", text: "Languages, media or communication", points: { marketing: 2, business: 1 } }
    ]
  },
  {
    icon: "🛠️",
    text: "Which statement describes your technical skills best?",
    options: [
      { icon: "⌨️", text: "I am comfortable writing simple code", points: { software: 3, data: 1 } },
      { icon: "📊", text: "I can use spreadsheets and work with data", points: { data: 3 } },
      { icon: "🔐", text: "I know the basics of networks and online safety", points: { cybersecurity: 3 } },
      { icon: "🎬", text: "I can use design or photo/video editing apps", points: { design: 2, marketing: 1 } },
      { icon: "🌱", text: "I am a beginner, but I am willing to learn", points: {} }
    ]
  },
  {
    icon: "🎨",
    text: "How would you describe your creativity?",
    options: [
      { icon: "✨", text: "I love creating new visuals and ideas", points: { design: 3, marketing: 2 } },
      { icon: "🔧", text: "I am creative when solving technical problems", points: { software: 2, data: 1 } },
      { icon: "🧠", text: "I prefer logical, step-by-step work", points: { data: 2, cybersecurity: 2 } },
      { icon: "🎉", text: "I like coming up with ideas for people and events", points: { business: 1, marketing: 2 } }
    ]
  },
  {
    icon: "💬",
    text: "How do you prefer to communicate?",
    options: [
      { icon: "🎤", text: "I enjoy presenting and speaking to groups", points: { business: 3, marketing: 2 } },
      { icon: "✍️", text: "I like writing and explaining things clearly", points: { data: 2, marketing: 1, business: 1 } },
      { icon: "🎧", text: "I prefer working quietly on my own tasks", points: { software: 2, cybersecurity: 2, data: 1 } },
      { icon: "🗣️", text: "I like talking to people to understand what they need", points: { design: 2, business: 1, marketing: 1 } }
    ]
  },
  {
    icon: "👥",
    text: "Which role would you take in a group project?",
    options: [
      { icon: "💻", text: "Programming the main features", points: { software: 3 } },
      { icon: "📊", text: "Collecting and analysing the data", points: { data: 3 } },
      { icon: "🔍", text: "Testing for problems and risks", points: { cybersecurity: 3 } },
      { icon: "🎨", text: "Designing the look and layout", points: { design: 3 } },
      { icon: "📋", text: "Planning the work and managing the team", points: { business: 3 } },
      { icon: "📢", text: "Preparing the presentation and promotion", points: { marketing: 3 } }
    ]
  },
  {
    icon: "🎯",
    text: "Which area would you most like to learn about?",
    options: [
      { icon: "🌐", text: "Web and app development", points: { software: 3 } },
      { icon: "📊", text: "Data analysis and basic machine learning", points: { data: 3 } },
      { icon: "🛡️", text: "Ethical hacking and online safety", points: { cybersecurity: 3 } },
      { icon: "🖼️", text: "User experience and visual design", points: { design: 3 } },
      { icon: "🚀", text: "Starting or running a business", points: { business: 3 } },
      { icon: "📱", text: "Social media and online advertising", points: { marketing: 3 } }
    ]
  },
  {
    icon: "🧭",
    text: "How do you like to work on a task?",
    options: [
      { icon: "🧱", text: "Build it step by step and keep testing it", points: { software: 2, design: 1 } },
      { icon: "🔎", text: "Study the details carefully and look for evidence", points: { data: 2, cybersecurity: 2 } },
      { icon: "🤝", text: "Work in a team and share the responsibilities", points: { business: 2, marketing: 1 } },
      { icon: "⚡", text: "Try ideas quickly and keep improving them", points: { design: 2, marketing: 2 } }
    ]
  }
];


const stepBadge = document.getElementById("step-badge");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const questionIcon = document.getElementById("question-icon");
const questionTitle = document.getElementById("question-title");
const optionsBox = document.getElementById("options");
const errorMessage = document.getElementById("error-message");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


let currentQuestion = 0;


const answers = [];
for (let i = 0; i < questions.length; i++) {
  answers.push(null);
}


function showQuestion() {
  const question = questions[currentQuestion];
  const total = questions.length;
  const number = currentQuestion + 1;

  stepBadge.textContent = "Step " + number + " of " + total;
  progressText.textContent = number + " / " + total;
  progressFill.style.width = (number / total * 100) + "%";
  questionIcon.textContent = question.icon;
  questionTitle.textContent = number + ". " + question.text;
  errorMessage.textContent = "";
  optionsBox.innerHTML = "";

  for (let j = 0; j < question.options.length; j++) {
    const option = question.options[j];

    const label = document.createElement("label");
    label.className = "option";
    if (answers[currentQuestion] === j) {
      label.className = "option selected";
    }

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = j;
    if (answers[currentQuestion] === j) {
      radio.checked = true;
    }
    radio.addEventListener("change", function () {
      chooseOption(j);
    });

    const icon = document.createElement("span");
    icon.className = "option-icon";
    icon.textContent = option.icon;

    const text = document.createElement("span");
    text.textContent = option.text;

    label.appendChild(radio);
    label.appendChild(icon);
    label.appendChild(text);
    optionsBox.appendChild(label);
  }

 
  prevButton.disabled = (currentQuestion === 0);

 
  if (currentQuestion === total - 1) {
    nextButton.textContent = "See My Results";
  } else {
    nextButton.textContent = "Next →";
  }
}


function chooseOption(optionNumber) {
  answers[currentQuestion] = optionNumber;
  errorMessage.textContent = "";

  const labels = optionsBox.children;
  for (let i = 0; i < labels.length; i++) {
    if (i === optionNumber) {
      labels[i].className = "option selected";
    } else {
      labels[i].className = "option";
    }
  }
}

function finishAssessment() {
  
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === null) {
      currentQuestion = i;
      showQuestion();
      errorMessage.textContent = "Question " + (i + 1) + " is not answered yet. Please choose an answer.";
      return;
    }
  }

  const scores = {
    software: 0,
    data: 0,
    cybersecurity: 0,
    design: 0,
    business: 0,
    marketing: 0
  };

  for (let i = 0; i < questions.length; i++) {
    const points = questions[i].options[answers[i]].points;
    for (const career in points) {
      scores[career] = scores[career] + points[career];
    }
  }

  try {
    sessionStorage.setItem("careerScores", JSON.stringify(scores));
    sessionStorage.removeItem("selectedCareer");
    window.location.href = "recommendations.html";
  } catch (error) {
    errorMessage.textContent = "Sorry, your results could not be saved. Please check that your browser allows storage and try again.";
  }
}


nextButton.addEventListener("click", function () {
  if (answers[currentQuestion] === null) {
    errorMessage.textContent = "Please choose an answer before continuing.";
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion = currentQuestion + 1;
    showQuestion();
  } else {
    finishAssessment();
  }
});


prevButton.addEventListener("click", function () {
  if (currentQuestion > 0) {
    currentQuestion = currentQuestion - 1;
    showQuestion();
  }
});

showQuestion();