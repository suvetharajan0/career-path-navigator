# Career Path Selection System

A team project that helps students explore career fields by
answering a short questionnaire. The website suggests careers using simple
JavaScript scoring (it does not use AI or machine learning).

## Features

- Home and About pages
- Questionnaire with 10 multiple-choice questions and answer validation
- Score calculation for 6 career fields
- Top recommendation, and a second one when the scores are close
- Tie handling and a Retake Assessment button
- Career details: overview, skills, learning roadmap, entry-level roles,
  example projects and next steps
- Contact page with a demo feedback form (not sent anywhere)
- Responsive layout for phones and laptops

## Career Fields

Software Development, Data Science and Analytics, Cybersecurity, UI/UX Design,
Business and Management, Digital Marketing

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub

## Project Structure

```
career-path-selection-system/
├── index.html
├── about.html
├── assessment.html
├── recommendations.html
├── career-details.html
├── contact.html
├── css/style.css
├── js/assessment.js
├── js/recommendations.js
├── js/career-details.js
├── images/
└── README.md
```

## How to Run Locally

1. Clone the repository: `git clone <repository-link>`
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or right-click it and choose
   "Open with Live Server".

No installation is needed because the project has no backend or database.

## How It Works

Each answer gives points to one or more careers. `assessment.js` adds the
points and saves the scores in `sessionStorage`. `recommendations.js` reads
the scores and shows the highest-scoring careers. `career-details.js` shows
the information for the selected career.

## Deployment

GitHub Pages:
1. Push the project to GitHub.
2. Go to Settings > Pages.
3. Under "Build and deployment", choose "Deploy from a branch".
4. Select the `main` branch and the `/ (root)` folder, then Save.
5. Open the link shown after a minute or two.

Vercel:
1. Sign in to Vercel with GitHub and click "Add New Project".
2. Import this repository.
3. Leave the build settings empty (it is a static site) and click Deploy.

## Note

The recommendations are only guidance and not a guarantee that a career is
right for someone.
