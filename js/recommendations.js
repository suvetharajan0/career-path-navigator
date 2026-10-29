const careerInfo = {
  software: {
    name: "Software Development",
    summary: "Software developers build websites, apps and programs. This field suits people who enjoy logical thinking and creating things with code."
  },
  data: {
    name: "Data Science and Analytics",
    summary: "Data analysts collect and study data to find patterns that help people make decisions. It suits people who like numbers and careful analysis."
  },
  cybersecurity: {
    name: "Cybersecurity",
    summary: "Cybersecurity professionals protect computers, networks and information from attacks. It suits people who are curious about how systems can be broken and protected."
  },
  design: {
    name: "UI/UX Design",
    summary: "UI/UX designers plan how websites and apps look and how easy they are to use. It suits creative people who care about users."
  },
  business: {
    name: "Business and Management",
    summary: "Business and management professionals plan, organise and lead people and projects. It suits people who like teamwork, planning and leadership."
  },
  marketing: {
    name: "Digital Marketing",
    summary: "Digital marketers promote products and ideas using social media, search engines and online content. It suits people who enjoy communication and creative ideas."
  }
};

const careerKeys = ["software", "data", "cybersecurity", "design", "business", "marketing"];

const messageBox = document.getElementById("message");
const resultsBox = document.getElementById("results");
const retakeButton = document.getElementById("retake-button");


function getSavedScores() {
  try {
    const saved = sessionStorage.getItem("careerScores");
    if (saved === null) {
      return null;
    }
    return JSON.parse(saved);
  } catch (error) {
    return null;
  }
}

function goToPage(key, page) {
  try {
    sessionStorage.setItem("selectedCareer", key);
  } catch (error) {
    
  }
  window.location.href = page;
}


function makeCareerCard(key, score, label) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML =
    '<div class="card-top">' +
      '<div class="card-text">' +
        '<span class="result-label">' + label + '</span>' +
        '<h2>' + careerInfo[key].name + '</h2>' +
        '<p>' + careerInfo[key].summary + '</p>' +
      '</div>' +
      '<div class="score-circle">' +
        '<span class="score-number">' + score + '</span>' +
        '<span class="score-unit">points</span>' +
      '</div>' +
    '</div>';

  const buttonRow = document.createElement("div");
  buttonRow.className = "button-row";

  const detailsButton = document.createElement("button");
  detailsButton.className = "btn";
  detailsButton.textContent = "View Career Details";
  detailsButton.addEventListener("click", function () {
    goToPage(key, "career-details.html");
  });

  const roadmapButton = document.createElement("button");
  roadmapButton.className = "btn btn-secondary";
  roadmapButton.textContent = "Explore Learning Roadmap";
  roadmapButton.addEventListener("click", function () {
    goToPage(key, "roadmap.html");
  });

  buttonRow.appendChild(detailsButton);
  buttonRow.appendChild(roadmapButton);
  card.appendChild(buttonRow);

  return card;
}

function showResults() {
  const scores = getSavedScores();

  if (scores === null) {
    messageBox.innerHTML = 'No assessment results found. Please <a href="assessment.html">take the assessment</a> first.';
    return;
  }

  
  const list = [];
  for (let i = 0; i < careerKeys.length; i++) {
    const key = careerKeys[i];
    let score = Number(scores[key]);
    if (isNaN(score)) {
      score = 0;
    }
    list.push({ key: key, score: score });
  }

  
  list.sort(function (a, b) {
    return b.score - a.score;
  });

  const topScore = list[0].score;

  if (topScore === 0) {
    messageBox.innerHTML = 'We could not find a match from your answers. Please <a href="assessment.html">retake the assessment</a> and choose the options that describe you.';
    return;
  }

  
  const toShow = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].score === topScore) {
      toShow.push(list[i]);
    }
  }

  const isTie = toShow.length > 1;

  
  let secondItem = null;
  if (!isTie && list[1].score > 0 && list[1].score >= topScore * 0.6) {
    secondItem = list[1];
  }

  if (isTie) {
    const tieNote = document.createElement("p");
    tieNote.textContent = "Your top scores are tied, so all the tied careers are shown as top matches.";
    resultsBox.appendChild(tieNote);
  }

  for (let i = 0; i < toShow.length; i++) {
    let label = "Top Match";
    if (isTie) {
      label = "Tied Top Match";
    }
    resultsBox.appendChild(makeCareerCard(toShow[i].key, toShow[i].score, label));
  }

  if (secondItem !== null) {
    resultsBox.appendChild(makeCareerCard(secondItem.key, secondItem.score, "Also a Good Match"));
  }

  
  const allScores = document.createElement("div");
  allScores.className = "card";
  let scoreHtml = "<h3>Your Scores</h3><ul>";
  for (let i = 0; i < list.length; i++) {
    scoreHtml = scoreHtml + "<li>" + careerInfo[list[i].key].name + ": " + list[i].score + " points</li>";
  }
  scoreHtml = scoreHtml + "</ul>";
  allScores.innerHTML = scoreHtml;
  resultsBox.appendChild(allScores);
}


retakeButton.addEventListener("click", function () {
  sessionStorage.removeItem("careerScores");
  sessionStorage.removeItem("selectedCareer");
  window.location.href = "assessment.html";
});

showResults();