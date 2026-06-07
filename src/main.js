const resumeData = {
  name: "Ly My Hoa (Haley) Tran",
  headline:
    "Computer Science and Data Science student at the University of Sydney, expected to graduate in December 2026.",
  profile:
    "Haley is strongest where backend and systems engineering meet product delivery: C/Linux concurrency, Java team delivery, MERN full-stack work, and applied AI/data evaluation.",
  contact: {
    email: "haleyhoaa@gmail.com",
    phone: "+61 451 063 993",
    location: "Sydney, NSW",
    github: "https://github.com/HaleyyT",
    portfolio: "https://portfolio-git-main-haleyyts-projects.vercel.app/"
  },
  resumes: [
    {
      label: "Software engineering / backend resume",
      path: "/resumes/SWE_HaleyTran_Backend.pdf",
      focus: "backend systems, concurrency, Java delivery, MERN APIs, OS projects, and systems coursework"
    },
    {
      label: "AI / ML resume",
      path: "/resumes/SWE_HaleyTran_ML-AI.pdf",
      focus: "applied AI, ML classifiers, regression, evaluation, coursework, and software engineering work samples"
    }
  ],
  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "R", "HTML/CSS"],
    systems: [
      "Linux/Unix",
      "POSIX threads",
      "IPC/FIFOs",
      "mutexes",
      "condition variables",
      "signals",
      "memory management",
      "system calls",
      "debugging",
      "performance analysis"
    ],
    backend: [
      "Node.js",
      "Express",
      "REST APIs",
      "Socket.IO",
      "JWT authentication",
      "MongoDB",
      "Mongoose",
      "environment-based configuration"
    ],
    delivery: ["Git/GitHub", "Make", "GCC", "Gradle", "JUnit", "Jenkins", "Docker", "JaCoCo", "Agile/Scrum", "Jira"],
    aiData: ["classification", "regression", "cross-validation", "benchmarking", "data preprocessing", "visualisation", "Weka", "RStudio"]
  },
  projects: [
    {
      title: "Concurrent Multi-Client State Synchronisation Editor",
      aliases: ["text editor", "markdown editor", "collaborative editor", "state synchronisation", "state synchronization"],
      area: "Systems / backend",
      tech: ["C", "Linux/Unix", "POSIX threads", "signals", "FIFOs", "mutexes", "role-based access control", "Make", "GCC"],
      github: "https://github.com/HaleyyT/text-editor",
      proof:
        "Built a C/Linux client-server backend that maintains authoritative shared document state across concurrent clients.",
      details: [
        "Used signal-based handshakes and dedicated FIFO channels for isolated bidirectional IPC.",
        "Implemented versioned shared state with optimistic concurrency control, rejecting stale writes to prevent lost updates.",
        "Used pthread session handling, serialised mutation logic, role-based write permissions, concurrency stress testing, and ASan memory checking."
      ]
    },
    {
      title: "Virtual Scroll Access System",
      aliases: ["vsas", "scroll access", "java team project", "virtual scroll"],
      area: "Java / team delivery",
      mark: "100",
      tech: ["Java", "Gradle", "JUnit", "JSON", "Jenkins", "Docker", "JaCoCo", "Git/GitHub", "Agile/Scrum"],
      github: "https://github.com/HaleyyT/Scroll-Access-System-",
      proof:
        "Served as developer and Scrum Master in a team of 4 on a production-style Java application.",
      details: [
        "Coordinated sprint planning, branch-based development, code reviews, and weekly client demos.",
        "Built and maintained CI/CD with Jenkins, Docker, and JaCoCo, with more than 75% coverage and 100% feature completion.",
        "Implemented upload/download, search, preview, page-table functions, record organisation, validation, and service-layer logic."
      ]
    },
    {
      title: "Multi-Level Queue Dispatcher",
      aliases: ["mlfq", "scheduler", "os scheduler", "dispatcher"],
      area: "Operating systems",
      mark: "100",
      tech: ["C", "FCFS", "Round Robin", "preemptive scheduling", "performance analysis"],
      github: "https://github.com/HaleyyT/MLFQ",
      proof:
        "Implemented a 3-level preemptive OS scheduler using FCFS and Round Robin with starvation prevention.",
      details: [
        "Tuned policy parameters to balance short-job response and long-running task fairness.",
        "Improved metrics to average turnaround 29.47, waiting 20.37, and response 0.47."
      ]
    },
    {
      title: "FrensChatApp",
      aliases: ["chat app", "frens chat", "mern", "real-time communication platform", "communication platform"],
      area: "Full stack / real time",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO"],
      github: "https://github.com/HaleyyT/FrensChatApp",
      proof:
        "Built a MERN communication platform with authenticated sessions, protected routes, and persistent conversation/message models.",
      details: [
        "Developed REST APIs for authentication, session restore, user lookup, chat history retrieval, and message storage.",
        "Implemented Socket.IO real-time messaging with online presence, typing indicators, unread counts, and instant active-session updates.",
        "Refactored real-time socket state into a reusable context/provider for maintainability."
      ]
    },
    {
      title: "FloodGuard",
      aliases: ["floodguard", "flood guard", "flood dashboard", "frontend dashboard", "dashboard work", "flood awareness", "parramatta dashboard"],
      area: "Frontend / data dashboard",
      tech: ["React", "Vite", "Recharts", "local JSON data", "dashboard design"],
      github: "https://github.com/HaleyyT/FloodGuard",
      proof:
        "Built a Parramatta-focused flood-awareness prototype that combines local weather observations, rainfall trends, river-context signals, and action-oriented panels.",
      details: [
        "The project shows product thinking around explainable dashboard panels and local risk context.",
        "It is a useful frontend/data-visualisation complement to her backend, systems, and AI work."
      ]
    },
    {
      title: "OS Synchronisation Simulation",
      aliases: ["synchronisation simulation", "synchronization simulation", "pthreads simulation", "thread simulation"],
      area: "Operating systems",
      mark: "92",
      tech: ["C", "pthreads", "mutexes", "condition variables"],
      github: "https://github.com/HaleyyT/synchronisation-simulation",
      proof:
        "Built a multithreaded C simulation coordinating shared resources under strict ordering and resource constraints.",
      details: [
        "Implemented concurrency control for predictable behaviour under contention.",
        "Applied systematic debugging and validation to reason about thread interaction, race conditions, and correctness."
      ]
    },
    {
      title: "ML Classifiers on Health Data",
      aliases: ["machine learning", "ml classifiers", "health data", "classification", "weka", "naive bayes", "decision tree"],
      area: "AI / machine learning",
      mark: "High Distinction",
      tech: ["Python", "Naive Bayes", "Decision Trees", "stratified k-fold cross-validation", "Weka"],
      github: "https://github.com/HaleyyT/ML-Classifiers",
      proof:
        "Implemented end-to-end Naive Bayes and Decision Tree classifiers on a clinical dataset.",
      details: [
        "Built preprocessing, training, stratified k-fold evaluation, error analysis, and technical reporting.",
        "Improved a custom decision-tree variant to 76.33% accuracy using gain ratio and early stopping.",
        "Implemented Naive Bayes within 0.14% of Weka's benchmark; report awarded High Distinction."
      ]
    },
    {
      title: "Predicting Body Fat Percentage",
      aliases: ["body fat", "regression", "data analytics", "r project"],
      area: "Data analytics / regression",
      mark: "High Distinction",
      tech: ["R", "regression", "10-fold cross-validation", "model selection"],
      github: "https://github.com/HaleyyT/regression-prediction",
      proof:
        "Collaborated in a team of 4 to predict body fat percentage from physiological measurements for 252 subjects.",
      details: [
        "Applied forward, backward, and exhaustive model selection.",
        "Validated linearity, multicollinearity, and normality assumptions; used 10-fold cross-validation and achieved about R-squared 0.74."
      ]
    },
    {
      title: "Connect-4 Minimax AI",
      aliases: ["connect 4", "connect-4", "connect four", "minimax", "alpha beta"],
      area: "AI search",
      mark: "100",
      tech: ["Python", "minimax", "alpha-beta pruning", "heuristic evaluation"],
      github: "https://github.com/HaleyyT/Connect-4-minimax-algorithm",
      proof:
        "Implemented a Connect-4 move-selection engine using depth-limited minimax, alpha-beta pruning, and heuristic evaluation.",
      details: ["Optimised move search and reduced branching while preserving clear decision logic."]
    },
    {
      title: "Audio Editor Backend",
      aliases: ["audio editor", "copy on write", "shared backing store", "backing store"],
      area: "Systems programming",
      tech: ["C", "dynamic memory", "linked data structures", "Unix"],
      proof:
        "Developed a low-level editing backend supporting insert/delete operations over shared backing memory.",
      details: [
        "Designed copy-on-write semantics to reduce duplication while preserving correctness.",
        "Managed manual memory ownership and used complexity, correctness, and randomised tests to validate behaviour."
      ]
    }
  ],
  coursework: [
    "COMP3520 Operating Systems Internals in C/C++: concurrency, synchronisation, process scheduling, and memory management; assignments earned 92 and 100.",
    "COMP3608 Introduction to Artificial Intelligence (Advanced): neural networks, ML, classifiers, heuristic search, probabilistic reasoning; ML report earned High Distinction.",
    "DATA2002 Data Analytics: regression modelling, statistical machine learning, and cross-validation; team report earned High Distinction.",
    "SOFT2412 Agile Software Development Practices: Agile teamwork, CI/CD, software process measurement, and quality assurance; earned High Distinction.",
    "COMP2123 Data Structures & Algorithms: efficient algorithms, data structures, and complexity analysis; earned Distinction.",
    "COMP2017 System Programming in C: memory management, system calls, dynamic allocation, concurrency, and Unix debugging."
  ],
  leadership: [
    "Developer and Scrum Master for the 100-mark Virtual Scroll Access System team project.",
    "Peer Mentor Program participant, building leadership, communication, initiative, and empathy.",
    "Computing society involvement through machine learning and AI workshops."
  ],
  skillEvidence: [
    {
      label: "C / systems C",
      aliases: ["c", "c language", "systems c", "low level c"],
      answer:
        "Yes. Haley has strong C evidence: the concurrent C/Linux text editor, the 100-mark Multi-Level Queue Dispatcher, the 92-mark OS Synchronisation Simulation, and an Audio Editor Backend using manual memory management and copy-on-write semantics."
    },
    {
      label: "C++",
      aliases: ["c++", "cpp", "c plus plus"],
      answer:
        "C++ appears in Haley's skills and coursework through COMP3520 Operating Systems Internals in C/C++, where she studied concurrency, scheduling, and memory management. Her strongest implemented systems evidence is in C."
    },
    {
      label: "Java",
      aliases: ["java", "junit", "gradle"],
      answer:
        "Yes. Haley used Java, Gradle, JUnit, and JSON in the 100-mark Virtual Scroll Access System, where she was developer and Scrum Master and built core workflows with service-layer logic and validation."
    },
    {
      label: "Python",
      aliases: ["python", "py"],
      answer:
        "Yes. Haley used Python for ML Classifiers on Health Data and the 100-mark Connect-4 Minimax AI, including model evaluation, decision trees, Naive Bayes, minimax, alpha-beta pruning, and heuristic search."
    },
    {
      label: "JavaScript / React",
      aliases: ["javascript", "js", "react", "vite", "frontend", "front end"],
      answer:
        "Yes. Haley used JavaScript, React, and Vite in FrensChatApp and FloodGuard. FrensChatApp is a MERN communication platform, and FloodGuard is a React/Vite/Recharts dashboard."
    },
    {
      label: "Node.js / Express / REST APIs",
      aliases: ["node", "nodejs", "node.js", "express", "rest", "rest api", "rest apis", "api", "apis", "backend api"],
      answer:
        "Yes. Haley used Node.js and Express in FrensChatApp, building REST APIs for authentication, session restore, user lookup, chat history retrieval, and message storage."
    },
    {
      label: "MongoDB / Mongoose",
      aliases: ["mongodb", "mongo", "mongoose", "database", "db"],
      answer:
        "Yes. Haley used MongoDB/Mongoose in FrensChatApp for persistent user, conversation, and message models."
    },
    {
      label: "Socket.IO / real-time messaging",
      aliases: ["socket", "socket.io", "socketio", "real time", "real-time", "websocket", "websockets", "live messaging"],
      answer:
        "Yes. Haley implemented Socket.IO real-time messaging in FrensChatApp, including online presence, typing indicators, unread counts, and instant updates across active sessions."
    },
    {
      label: "JWT / authentication",
      aliases: ["jwt", "auth", "authentication", "login", "session", "sessions", "protected routes"],
      answer:
        "Yes. Haley built JWT-authenticated sessions and protected routes in FrensChatApp, with APIs for authentication, session restore, user lookup, chat history retrieval, and message storage."
    },
    {
      label: "Linux / Unix",
      aliases: ["linux", "unix", "posix"],
      answer:
        "Yes. Haley's strongest Linux/Unix evidence is the concurrent client-server text editor in C, using POSIX threads, signals, FIFOs, and role-based shared-state control."
    },
    {
      label: "Concurrency / pthreads / IPC",
      aliases: ["concurrency", "parallel", "threads", "threading", "pthreads", "mutex", "mutexes", "condition variables", "ipc", "fifo", "fifos", "signals", "synchronisation", "synchronization"],
      answer:
        "Yes. Haley has deep concurrency evidence: pthread session handling, mutexes, condition variables, FIFO IPC, signal handshakes, optimistic concurrency control, OS scheduling, and strict synchronisation simulations."
    },
    {
      label: "Docker / Jenkins / CI/CD",
      aliases: ["docker", "jenkins", "ci", "cd", "ci/cd", "cicd", "jacoco", "pipeline", "coverage"],
      answer:
        "Yes. Haley used Jenkins, Docker, and JaCoCo in the 100-mark Virtual Scroll Access System, maintaining automated builds, integration checks, and more than 75% code coverage."
    },
    {
      label: "Git / GitHub",
      aliases: ["git", "github", "version control", "code review", "branch", "branches"],
      answer:
        "Yes. Haley used Git/GitHub across her projects. In the Virtual Scroll Access System, she coordinated branch-based development, code reviews, and team integration as Scrum Master."
    },
    {
      label: "Agile / Scrum / teamwork",
      aliases: ["agile", "scrum", "scrum master", "teamwork", "collaboration", "leadership", "jira"],
      answer:
        "Yes. Haley was developer and Scrum Master for a team of 4 on the 100-mark Virtual Scroll Access System, coordinating sprint planning, tasks, code reviews, Git workflows, and weekly client demos."
    },
    {
      label: "Machine learning / AI",
      aliases: ["ml", "machine learning", "ai", "classification", "classifier", "classifiers", "decision tree", "decision trees", "naive bayes", "weka", "minimax", "alpha beta", "alpha-beta"],
      answer:
        "Yes. Haley built High Distinction ML classifiers on health data using preprocessing, Naive Bayes, Decision Trees, stratified k-fold evaluation, Weka benchmarking, and error analysis. She also earned 100 for a Connect-4 minimax/alpha-beta AI."
    },
    {
      label: "R / statistics / regression",
      aliases: ["r", "rstudio", "statistics", "regression", "cross validation", "cross-validation", "data analytics", "body fat"],
      answer:
        "Yes. Haley used R for a High Distinction regression project predicting body fat percentage from 252 subjects, with model selection, assumption validation, and 10-fold cross-validation."
    },
    {
      label: "SQL",
      aliases: ["sql"],
      answer:
        "SQL is listed in Haley's language skills. The repo/resume evidence is stronger for MongoDB-backed full-stack work and Python/R data analysis than for a detailed SQL project."
    },
    {
      label: "Testing / debugging",
      aliases: ["testing", "tests", "debugging", "validation", "asan", "memory checking", "stress testing", "quality assurance", "qa"],
      answer:
        "Yes. Haley's evidence includes ASan memory checking and concurrency stress testing in C, JUnit/JaCoCo coverage in Java, validation/error handling in backend work, and systematic debugging around race conditions and correctness."
    }
  ]
};

const stopWords = new Set([
  "a", "an", "and", "are", "as", "ask", "about", "build", "built", "can", "could", "did", "does", "for", "from",
  "have", "has", "haley", "her", "how", "i", "is", "it", "me", "of", "on", "or", "project", "projects", "she",
  "tell", "the", "this", "to", "was", "what", "when", "where", "which", "who", "why", "with"
]);

const fallback =
  "I do not have a verified detail for that exact question yet. I can answer clearly about Haley's resumes, systems/backend projects, full-stack work, AI/data projects, skills, coursework, teamwork, contact details, and recruiter fit.";

const recruiterQuestionAnswer =
  [
    "Recruiters usually want quick proof for:",
    "1. Best backend/systems project",
    "2. Personal contribution vs team coordination",
    "3. C/Linux, concurrency, IPC, and debugging evidence",
    "4. APIs, auth, databases, and real-time features",
    "5. Evaluated AI/ML work beyond coursework",
    "6. Testing, CI/CD, and code-quality practices",
    "7. Best-fit role: backend, systems, full-stack, or AI/data",
    "8. Which resume to use for the role",
    "9. Graduation date and contact details",
    "",
    "Ask any of those directly and I will answer from Haley's resume-backed project data."
  ].join("\n");

function list(items) {
  return items.join(", ");
}

function projectSummary(project) {
  const mark = project.mark ? ` Mark: ${project.mark}.` : "";
  const tech = project.tech?.length ? ` Tech: ${list(project.tech)}.` : "";
  return `${project.title}: ${project.proof}${mark}${tech} ${project.details.join(" ")}`;
}

function shortProjectSummary(project) {
  const mark = project.mark ? ` (${project.mark})` : "";
  return `${project.title}${mark}: ${project.proof}`;
}

function recruiterPitch() {
  return [
    "Haley is a strong internship candidate because she has repeated evidence of finishing hard technical work, not just describing it.",
    "Her best proof is C/Linux concurrency and IPC, a 100-mark Java team project where she was Scrum Master, a real-time MERN chat app, and High Distinction AI/data work.",
    "She fits backend, systems, full-stack, and applied AI roles where debugging, ownership, and clear communication matter."
  ].join(" ");
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/\bc\+\+\b/g, "cpp")
    .replace(/\bc#\b/g, "csharp")
    .replace(/node\.js/g, "nodejs")
    .replace(/socket\.io/g, "socketio")
    .replace(/ci\/cd/g, "cicd")
    .replace(/rest api(s)?/g, "rest api")
    .replace(/front-end/g, "frontend")
    .replace(/full-stack/g, "fullstack")
    .replace(/real-time/g, "realtime");
}

function skillMatchScore(skill, normalized, words) {
  return skill.aliases.reduce((score, alias) => {
    const normalizedAlias = normalizeText(alias);
    const aliasWords = tokenize(normalizedAlias);

    if (normalizedAlias.length <= 2) {
      return score + (words.includes(normalizedAlias) ? 12 : 0);
    }

    if (normalized.includes(normalizedAlias)) return score + 12 + aliasWords.length;
    if (aliasWords.length && aliasWords.every((word) => words.includes(word))) return score + 8 + aliasWords.length;
    if (aliasWords.length > 1 && aliasWords.some((word) => word.length > 2 && words.includes(word))) return score + 2;
    return score;
  }, 0);
}

function answerSkillQuestion(words, normalized) {
  const skillQuestionSignals = [
    "skill",
    "skills",
    "stack",
    "know",
    "knows",
    "use",
    "uses",
    "used",
    "experience",
    "experienced",
    "worked",
    "familiar",
    "evidence",
    "proof"
  ];
  const soundsLikeSkillQuestion = skillQuestionSignals.some((signal) => normalized.includes(signal) || words.includes(signal));
  const matches = resumeData.skillEvidence
    .map((skill) => ({ skill, score: skillMatchScore(skill, normalized, words) }))
    .filter((match) => match.score >= 8)
    .sort((a, b) => b.score - a.score);

  if (!matches.length) return "";
  if (!soundsLikeSkillQuestion && matches[0].score < 12) return "";

  if (matches.length === 1 || matches[1].score < 10) {
    return matches[0].skill.answer;
  }

  const topMatches = matches.filter((match) => match.score >= 10).slice(0, 3);
  return topMatches.map((match) => match.skill.answer).join(" ");
}

function makeKnowledgeBase() {
  const projects = resumeData.projects;
  const byTitle = Object.fromEntries(projects.map((project) => [project.title, project]));

  return [
    {
      title: "Recruiter pitch",
      aliases: ["why should a recruiter interview haley", "why hire haley", "interview haley", "recruiter pitch", "candidate fit", "internship fit"],
      tags: ["recruiter", "interview", "hire", "fit", "internship", "candidate", "strength", "strong"],
      answer: recruiterPitch()
    },
    {
      title: "Recruiter questions",
      aliases: ["what questions would a recruiter ask", "questions recruiter would ask", "recruiter questions", "interview questions", "what would you ask"],
      tags: ["recruiter", "questions", "ask", "interview", "screen", "screening"],
      answer: recruiterQuestionAnswer
    },
    {
      title: "Profile summary",
      aliases: ["tell me about haley", "who is haley", "candidate summary", "profile summary", "about haley"],
      tags: ["summary", "profile", "about", "who", "student", "university", "graduate"],
      answer: `${resumeData.name} is a ${resumeData.headline} ${resumeData.profile} She is most credible for roles needing backend/systems depth, product-minded full-stack implementation, and evaluated AI/data work.`
    },
    {
      title: "Standout projects",
      aliases: ["strongest projects", "best projects", "standout projects", "portfolio projects", "top projects"],
      tags: ["project", "projects", "strongest", "standout", "best", "portfolio", "github", "proof"],
      answer:
        `Haley's strongest recruiter signals are: ${shortProjectSummary(byTitle["Concurrent Multi-Client State Synchronisation Editor"])} ${shortProjectSummary(byTitle["Virtual Scroll Access System"])} ${shortProjectSummary(byTitle["FrensChatApp"])} ${shortProjectSummary(byTitle["ML Classifiers on Health Data"])} ${shortProjectSummary(byTitle["Multi-Level Queue Dispatcher"])}`
    },
    {
      title: "Backend and systems fit",
      aliases: ["backend", "systems programming", "c linux", "concurrency", "low level", "systems experience", "backend experience"],
      tags: ["backend", "systems", "c", "linux", "unix", "concurrency", "ipc", "fifo", "thread", "mutex", "operating", "server"],
      answer:
        "For backend/systems roles, Haley's strongest proof is the Concurrent Multi-Client State Synchronisation Editor: C/Linux, signal handshakes, FIFO IPC, pthread session handling, versioned shared state, optimistic concurrency control, role-based writes, stress testing, and ASan checks. She also earned 100 for a preemptive OS scheduler and 92 for a pthreads synchronisation simulation."
    },
    {
      title: "Full-stack and product work",
      aliases: ["full stack", "full-stack", "product engineering", "web app", "frontend", "mern", "react"],
      tags: ["fullstack", "full-stack", "frontend", "react", "node", "express", "mongodb", "api", "product", "web", "socket"],
      answer:
        "Haley's main full-stack project is FrensChatApp, a MERN communication platform with JWT sessions, protected routes, conversation/message models, REST APIs, and Socket.IO real-time messaging with presence, typing indicators, unread counts, and instant updates. She also has product delivery experience from the 100-mark Java Virtual Scroll Access System."
    },
    {
      title: "AI and data science",
      aliases: ["machine learning", "ml classifiers", "ai work", "health data classifiers", "data science", "research"],
      tags: ["ai", "ml", "machine", "learning", "classifier", "classification", "weka", "naive", "bayes", "decision", "research", "data"],
      answer:
        "Haley's strongest AI/data work is ML Classifiers on Health Data: end-to-end Naive Bayes and Decision Tree classifiers, preprocessing, stratified k-fold evaluation, error analysis, Weka benchmarking, and a High Distinction report. Her custom decision tree reached 76.33% accuracy, and her Naive Bayes was within 0.14% of Weka's benchmark. She also completed a High Distinction R regression project predicting body fat percentage with 10-fold cross-validation."
    },
    {
      title: "Teamwork and leadership",
      aliases: ["teamwork", "leadership", "scrum master", "agile", "collaboration", "team"],
      tags: ["team", "teamwork", "leadership", "scrum", "agile", "collaboration", "mentor", "communication"],
      answer:
        `Haley's clearest leadership proof is the Virtual Scroll Access System: she was developer and Scrum Master for a team of 4, coordinated sprints, code reviews, Git workflows, and weekly client demos, and helped deliver a 100-mark project. Other signals: ${resumeData.leadership.slice(1).join(" ")}`
    },
    {
      title: "Technical skills",
      aliases: ["skills", "technical stack", "languages", "tools", "tech stack"],
      tags: ["skills", "stack", "languages", "tools", "technical"],
      answer:
        `Languages: ${list(resumeData.skills.languages)}. Systems: ${list(resumeData.skills.systems)}. Backend/web: ${list(resumeData.skills.backend)}. Delivery: ${list(resumeData.skills.delivery)}. AI/data: ${list(resumeData.skills.aiData)}.`
    },
    {
      title: "Education",
      aliases: ["education", "degree", "university", "graduation", "graduation date", "when does haley graduate"],
      tags: ["education", "university", "graduation", "degree", "graduate"],
      answer:
        "Haley studies a Bachelor of Science in Computer Science and Data Science at the University of Sydney and is expected to graduate in December 2026."
    },
    {
      title: "Coursework",
      aliases: ["coursework", "courses", "classes", "university subjects", "relevant coursework"],
      tags: ["education", "university", "graduation", "coursework", "degree", "courses", "class"],
      answer:
        `${resumeData.headline} Relevant coursework: ${resumeData.coursework.join(" ")}`
    },
    {
      title: "Resume files",
      aliases: ["resume", "resumes", "cv", "which resume", "download resume", "software engineering resume", "ai resume"],
      tags: ["resume", "resumes", "cv", "download", "pdf", "backend", "ai"],
      answer:
        `This portfolio links two resume PDFs: ${resumeData.resumes.map((resume) => `${resume.label} (${resume.path}) for ${resume.focus}`).join("; ")}.`
    },
    {
      title: "Contact",
      aliases: ["contact", "email", "github", "phone", "location"],
      tags: ["contact", "email", "github", "phone", "location", "portfolio"],
      answer:
        `Contact Haley at ${resumeData.contact.email}. GitHub: ${resumeData.contact.github}. Portfolio: ${resumeData.contact.portfolio}. Location: ${resumeData.contact.location}.`
    },
    ...projects.map((project) => ({
      title: project.title,
      aliases: [project.title.toLowerCase(), ...(project.aliases || [])],
      tags: [
        ...project.title.toLowerCase().split(/[^a-z0-9+#.]+/),
        ...project.area.toLowerCase().split(/[^a-z0-9+#.]+/),
        ...(project.tech || []).map((tech) => tech.toLowerCase())
      ],
      answer: projectSummary(project)
    }))
  ];
}

const knowledgeBase = makeKnowledgeBase();

const chatWindow = document.querySelector("#chatWindow");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatbot = document.querySelector("#chatbot");
const chatToggle = document.querySelector("#chatToggle");
const promptButtons = document.querySelectorAll("[data-question]");

function tokenize(text) {
  return normalizeText(text)
    .replace(/[^a-z0-9+#.]+/g, " ")
    .split(" ")
    .filter((word) => word && !stopWords.has(word));
}

function contextualFallback(words, normalized) {
  const includesAny = (terms) => terms.some((term) => normalized.includes(term) || words.includes(term));

  if (includesAny(["aws", "azure", "gcp", "kubernetes", "terraform"])) {
    return "I do not have verified resume evidence for that exact cloud platform. The closest relevant signals are Jenkins, Docker, Git/GitHub workflows, Vercel deployment for this portfolio, and environment-based configuration in full-stack work.";
  }

  if (includesAny(["security", "password", "cookie", "login", "session", "auth"])) {
    return "Haley's clearest security-adjacent work is FrensChatApp: JWT-authenticated sessions, protected routes, session restore APIs, user lookup, chat history retrieval, message storage, and production-minded environment configuration.";
  }

  if (includesAny(["mobile", "ios", "android"])) {
    return "I do not have verified mobile-app experience in the resume data. Haley's closest product experience is web/full-stack work with React/Vite, Node.js/Express, MongoDB, and real-time Socket.IO messaging.";
  }

  if (includesAny(["availability", "start date", "sponsorship", "visa", "work rights"])) {
    return "I do not have verified availability, sponsorship, or work-rights details in the resume files. The resume does verify Sydney location, University of Sydney enrolment, and expected graduation in December 2026.";
  }

  return fallback;
}

function scoreItem(item, words, normalized) {
  const aliases = item.aliases || [];
  const exactAliasScore = aliases.some((alias) => normalized.includes(alias)) ? 14 : 0;
  const titleScore = item.title && normalized.includes(item.title.toLowerCase()) ? 12 : 0;
  const tagScore = item.tags.reduce((total, tag) => {
    const normalTag = tag.toLowerCase();
    if (!normalTag || stopWords.has(normalTag)) return total;
    if (normalized.includes(normalTag) && normalTag.length > 2) return total + 4;
    return total + (words.some((word) => word.length > 2 && (normalTag === word || normalTag.includes(word) || word.includes(normalTag))) ? 2 : 0);
  }, 0);
  return exactAliasScore + titleScore + tagScore;
}

function answerQuestion(question) {
  const normalized = normalizeText(question).replace(/[^a-z0-9+#.]+/g, " ").trim();
  const words = tokenize(question);

  if (normalized.includes("question") && (normalized.includes("recruiter") || normalized.includes("interview") || normalized.includes("screen"))) {
    return recruiterQuestionAnswer;
  }

  const skillAnswer = answerSkillQuestion(words, normalized);
  if (skillAnswer) {
    return skillAnswer;
  }

  const scored = knowledgeBase
    .map((item) => ({ item, score: scoreItem(item, words, normalized) }))
    .sort((a, b) => b.score - a.score);

  if (!words.length || scored[0].score < 2) {
    return contextualFallback(words, normalized);
  }

  return scored[0].item.answer;
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  chatWindow.append(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function submitQuestion(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  addMessage(trimmed, "user");
  chatInput.value = "";

  window.setTimeout(() => {
    addMessage(answerQuestion(trimmed), "bot");
  }, 180);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(chatInput.value);
});

chatToggle.addEventListener("click", () => {
  const isCollapsed = chatbot.classList.toggle("collapsed");
  chatToggle.setAttribute("aria-expanded", String(!isCollapsed));
  if (!isCollapsed) {
    window.setTimeout(() => chatInput.focus(), 80);
  }
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chatbot.classList.remove("collapsed");
    chatToggle.setAttribute("aria-expanded", "true");
    submitQuestion(button.dataset.question);
    chatInput.focus();
  });
});
