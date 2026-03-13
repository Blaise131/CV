import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

const profile = {
  name: "Mac-Collins Ogbonnah",
  shortName: "Mac",
  role: "Junior Software Developer",
  location: "Wigan, United Kingdom",
  email: "blaise131@icloud.com",
  linkedin: "https://www.linkedin.com/in/maccollinsmatblas",
  github: "https://github.com/Blaise131",
  summary:
    "Highly motivated software engineering graduate seeking an entry-level software development role. Strong academic foundation in programming, data structures, and software engineering, with hands-on experience building responsive web applications and REST-integrated products."
};

const experiences = [
  {
    title: "Junior Software Developer (Contract)",
    company: "MATBLAS LIMITED",
    date: "Jul 2024 - Present",
    location: "Chester, United Kingdom",
    bullets: [
      "Developing modern web applications using React.js and Python.",
      "Implementing responsive UI components and improving application usability.",
      "Collaborating with engineers to design scalable system architecture.",
      "Supporting backend development and REST API integration.",
      "Debugging and optimizing system performance across application modules."
    ]
  },
  {
    title: "Assistant Sales Manager",
    company: "Betfred",
    date: "Jan 2019 - Jul 2024",
    location: "Bolton, United Kingdom",
    bullets: [
      "Processed over-the-counter betting transactions contributing to 146% YTD shop profit.",
      "Managed and mentored trainee sales managers.",
      "Promoted Fixed Odds Betting Terminal services to increase shop revenue.",
      "Promoted safer gambling tools to support responsible gambling compliance.",
      "Increased SSBT terminal engagement contributing to 237% YTD profit growth."
    ]
  }
];

const skills = [
  "Python",
  "Java",
  "C#",
  "JavaScript",
  "R",
  "React.js",
  "Django",
  "Node.js",
  "Blazor",
  "MongoDB",
  "MySQL",
  "SQL Server",
  "SQLite",
  "Git",
  "REST APIs",
  "Agile Development"
];

const projects = [
  {
    name: "ETF Investment Application",
    stack: "Python, Django, SQL Server, Bootstrap",
    year: "2023",
    summary:
      "Developed a trading platform that enables users to buy ETFs and build investment portfolios in a Scrum team of four developers."
  },
  {
    name: "Repository Web Application",
    stack: "Node.js, MongoDB, HTML, CSS",
    year: "2022",
    summary:
      "Built a web platform for managing and sharing observations, hypotheses, and analyses with responsive frontend interfaces."
  }
];

const education = [
  {
    title: "BSc Software Engineering (First Class Honours)",
    school: "University of Bolton",
    date: "Sep 2020 - Jul 2023"
  },
  {
    title: "Access to HE Diploma (Computing and ICT)",
    school: "Bolton College",
    date: "Sep 2019 - Sep 2020"
  }
];

app.innerHTML = `
  <main class="page-shell">
    <section class="hero">
      <div class="hero-copy">
        <h1>${profile.shortName}</h1>
        <p class="role-line">${profile.role}</p>
        <p class="intro">${profile.summary}</p>

        <div class="cta-row">
          <a class="button secondary" href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="button secondary" href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <ul class="quick-facts" aria-label="Quick profile details">
          <li>${profile.name}</li>
          <li>${profile.location}</li>
          <li><a href="mailto:${profile.email}">${profile.email}</a></li>
        </ul>
      </div>

      <aside class="hero-card">
        <p class="card-label">Shareable profile</p>
        <h2>One link for applications</h2>
        <p>
          This page brings together your downloadable CV, LinkedIn profile, and GitHub profile in one clean public link.
        </p>
        <div class="mini-links">
          <a class="button primary hero-download" href="./cv.pdf" download>Download CV</a>
          <a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          <a href="${profile.github}" target="_blank" rel="noreferrer">GitHub Profile</a>
          <a href="mailto:${profile.email}">Email Contact</a>
        </div>
      </aside>
    </section>

    <section class="content-grid">
      <article class="panel">
        <p class="section-tag">Profile</p>
        <h3>About Me</h3>
        <p>${profile.summary}</p>
      </article>

      <article class="panel">
        <p class="section-tag">Experience</p>
        <h3>Recent Work</h3>
        ${experiences
          .map(
            (experience) => `
              <div class="timeline">
                <div class="timeline-item">
                  <div>
                    <strong>${experience.title}</strong>
                    <span>${experience.company}</span>
                  </div>
                  <p>${experience.date}</p>
                </div>
                <p class="timeline-location">${experience.location}</p>
                <ul class="detail-list">
                  ${experience.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </div>
            `
          )
          .join("")}
      </article>

      <article class="panel">
        <p class="section-tag">Skills</p>
        <h3>Technical Skills</h3>
        <div class="chip-row">
          ${skills.map((skill) => `<span>${skill}</span>`).join("")}
        </div>
      </article>

      <article class="panel">
        <p class="section-tag">Projects</p>
        <h3>Selected Projects</h3>
        <div class="project-list">
          ${projects
            .map(
              (project) => `
                <div class="project-item">
                  <div class="project-head">
                    <strong>${project.name}</strong>
                    <span>${project.year}</span>
                  </div>
                  <p class="project-stack">${project.stack}</p>
                  <p>${project.summary}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="panel">
        <p class="section-tag">Education</p>
        <h3>Education</h3>
        <div class="education-list">
          ${education
            .map(
              (item) => `
                <div class="education-item">
                  <strong>${item.title}</strong>
                  <span>${item.school}</span>
                  <p>${item.date}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="panel">
        <p class="section-tag">Links</p>
        <h3>Professional Links</h3>
        <ul class="link-list">
          <li><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="mailto:${profile.email}">Email</a></li>
        </ul>
      </article>
    </section>
  </main>
`;
