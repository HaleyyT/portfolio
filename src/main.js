const knowledgeBase = [
  {
    title: "Standout projects",
    aliases: ["strongest projects", "best projects", "standout projects", "portfolio projects"],
    tags: ["project", "projects", "strongest", "standout", "best", "portfolio", "github"],
    answer:
      "Haley's standout projects are: 1. Concurrent Multi-Client State Synchronisation Editor in C/Linux for concurrency, IPC, versioned state, optimistic concurrency control, role-based access, and correctness under contention. 2. Virtual Scroll Access System in Java, delivered as Scrum Master/developer with CI/CD and a 100 mark. 3. Multi-Level Queue Dispatcher in C, a 100-mark OS scheduler with policy tuning. 4. FrensChatApp, a MERN product with secure authentication and modular backend design. 5. FloodGuard, a React/Vite/Recharts flood-awareness dashboard prototype using weather, rainfall, and river-context signals. 6. OS Synchronisation Simulation, a 92-mark C/pthreads project about strict coordination under contention. 7. ML Classifiers on Health Data, a High Distinction AI project with benchmarked evaluation."
  },
  {
    title: "Profile summary",
    aliases: ["tell me about haley", "who is haley", "recruiter summary", "candidate summary"],
    tags: ["summary", "profile", "about", "who", "fit", "recruiter", "interview", "resume"],
    answer:
      "Haley Tran is a University of Sydney Computer Science and Data Science student graduating in December 2026. Her profile is strongest where rigorous engineering meets practical delivery: C/Linux systems, Java team projects, MERN full-stack work, and AI/data science evaluation. A recruiter should notice her repeated 100-mark projects, High Distinction ML work, and evidence of debugging, testing, and teamwork."
  },
  {
    title: "Systems programming",
    aliases: ["systems programming", "c linux", "concurrency", "low level"],
    tags: ["systems", "c", "linux", "unix", "concurrency", "ipc", "fifo", "thread", "mutex", "operating"],
    answer:
      "Haley has substantial systems experience in C/Linux: a concurrent multi-client text editor using FIFOs, signal-based handshakes, pthread session handling, versioned shared state, optimistic concurrency control, role-based access control, and ASan/concurrency stress testing. She also built an OS synchronization simulation with pthreads, mutexes, condition variables, and strict ordering constraints, earning 92."
  },
  {
    title: "Concurrent Multi-Client State Synchronisation Editor",
    aliases: ["text editor", "markdown editor", "collaborative editor", "collaborative markdown text editor", "concurrent multi client", "state synchronisation editor", "state synchronization editor"],
    tags: ["text", "editor", "markdown", "collaborative"],
    answer:
      "The Concurrent Multi-Client State Synchronisation Editor is one of Haley's strongest systems projects. She built a C/Linux client-server backend that protects shared document state across concurrent clients using signal-based handshakes, dedicated FIFO IPC channels, versioned updates, optimistic concurrency control, serialized mutation logic, and role-based write permissions. The impact is reliability: stale writes are rejected, lost updates are prevented, unsafe multi-user edits are blocked, and ASan plus concurrency stress testing validate correctness under contention."
  },
  {
    title: "Multi-Level Queue Dispatcher",
    aliases: ["mlfq", "multi level queue", "scheduler", "os scheduler", "dispatcher"],
    tags: ["scheduler", "mlfq", "queue", "dispatch", "os"],
    answer:
      "Haley's Multi-Level Queue Dispatcher earned 100. She implemented a 3-level preemptive scheduler using FCFS and Round Robin, added starvation prevention, tuned scheduling parameters, and analysed turnaround, waiting, and response-time trade-offs."
  },
  {
    title: "Virtual Scroll Access System",
    aliases: ["vsas", "virtual scroll access system", "scroll access system", "java scroll"],
    tags: ["java", "scroll", "vsas", "scrum", "agile", "team", "leadership", "ci", "docker", "jenkins"],
    answer:
      "In the Virtual Scroll Access System, Haley worked as developer and Scrum Master in a team of 4. The project earned 100 and used Java, Gradle, JUnit, JSON, Git/GitHub, Agile/Scrum, Jenkins, Docker, and JaCoCo. She coordinated sprint planning, code reviews, client demos, CI/CD, and core workflows such as upload/download, search, preview, page-table functions, and record organisation."
  },
  {
    title: "FrensChatApp",
    aliases: ["frenschatapp", "frens chat", "chat app", "real time chat", "mern chat"],
    tags: ["fullstack", "backend", "api", "auth", "authentication", "security", "mern", "react", "express", "mongodb", "jwt", "chat", "socket"],
    answer:
      "Haley's FrensChatApp is a MERN communication platform using React/Vite, Node.js, Express, MongoDB/Mongoose, JWT authentication, bcrypt password hashing, HttpOnly cookies, validation/error handling, and modular backend routes/controllers/models/utils. Socket.io real-time messaging is planned/in progress."
  },
  {
    title: "FloodGuard",
    aliases: ["floodguard", "flood guard", "flood dashboard", "flood awareness"],
    tags: ["floodguard", "flood", "weather", "rainfall", "river", "dashboard", "react", "vite", "recharts", "parramatta"],
    answer:
      "Yes. FloodGuard is a public HaleyyT project, not a fork. It is a Parramatta-focused flood-awareness prototype that brings local weather observations, rainfall gauge data, and river-context signals into an explainable dashboard. The README describes a React/Vite/Recharts frontend using normalised local JSON data, nearby rainfall trend visualisation, river-context integration, and action-oriented dashboard panels."
  },
  {
    title: "OS Synchronisation Simulation",
    aliases: ["synchronisation simulation", "synchronization simulation", "os synchronisation", "os synchronization", "pthreads simulation"],
    tags: ["synchronisation", "synchronization", "simulation", "pthreads", "mutex", "condition", "variables", "threads", "contention"],
    answer:
      "Haley's OS Synchronisation Simulation is a C systems project that earned 92. It uses pthreads, mutexes, and condition variables to coordinate shared resources under strict ordering constraints. It demonstrates concurrency control, safe shared-state access, and systematic debugging around thread interaction, race conditions, and correctness."
  },
  {
    title: "AI and machine learning",
    aliases: ["machine learning", "ml classifiers", "ai work", "health data classifiers", "classification project"],
    tags: ["ai", "ml", "machine", "learning", "classifier", "classification", "weka", "naive", "bayes", "decision"],
    answer:
      "For AI/ML, Haley built end-to-end classifiers on health data with preprocessing, model training, stratified k-fold cross-validation, benchmarking, and error analysis. Her custom decision-tree variant reached 76.33% accuracy using gain ratio and early stopping, and her Naive Bayes implementation came within 0.14% of Weka's benchmark. The report earned High Distinction."
  },
  {
    title: "Regression project",
    aliases: ["regression", "body fat", "body fat percentage", "data analytics"],
    tags: ["data", "regression", "r", "body", "fat", "statistics"],
    answer:
      "Haley collaborated on a High Distinction regression project predicting body fat percentage from physiological measurements for 252 subjects. The team used forward, backward, and exhaustive model selection, validated assumptions such as linearity, multicollinearity, and normality, ran 10-fold cross-validation, and achieved about R-squared 0.74."
  },
  {
    title: "Connect-4 AI",
    aliases: ["connect 4", "connect-4", "connect four", "minimax", "alpha beta"],
    tags: ["connect", "minimax", "alpha", "beta", "game", "python", "heuristic"],
    answer:
      "Haley's Connect-4 AI earned 100. It implements a move-selection engine using depth-limited minimax, alpha-beta pruning, and heuristic evaluation to optimise search and reduce branching."
  },
  {
    title: "Technical skills",
    aliases: ["skills", "technical stack", "languages", "tools"],
    tags: ["skills", "stack", "languages", "tools", "technical"],
    answer:
      "Haley's technical stack includes C, C++, Java, Python, JavaScript, SQL, R, HTML/CSS, Linux/Unix, POSIX threads, IPC/FIFOs, synchronization, memory management, REST APIs, Node.js/Express, React/Vite, MongoDB, Socket.io, JWT, Git/GitHub, Make, GCC, Gradle, JUnit, Jenkins, Docker, JaCoCo, Jira, RStudio, and Weka."
  },
  {
    title: "Education",
    aliases: ["education", "degree", "university", "graduation", "coursework"],
    tags: ["education", "university", "graduation", "coursework", "degree"],
    answer:
      "Haley studies a Bachelor of Science in Computer Science and Data Science at the University of Sydney and is expected to graduate in December 2026. Relevant coursework includes operating systems internals, data structures and algorithms, artificial intelligence, data analytics, Agile software development practices, software construction, and system programming in C."
  },
  {
    title: "Contact",
    aliases: ["contact", "email", "github", "resume"],
    tags: ["contact", "email", "github", "resume"],
    answer:
      "You can contact Haley at haleyhoaa@gmail.com and view her GitHub at github.com/HaleyyT. This site also links two resumes: a software engineering resume and an AI/ML research-focused resume."
  }
];

const fallback =
  "I do not have a verified detail for that exact question yet. The closest useful summary is that Haley's strongest evidence is in C/Linux systems, Java team delivery, full-stack React/Node work, and AI/data science evaluation. Try asking about FloodGuard, FrensChatApp, systems programming, ML classifiers, skills, education, or recruiter fit.";

const stopWords = new Set([
  "a", "an", "and", "are", "as", "ask", "about", "build", "built", "can", "could", "did", "does", "for", "from",
  "have", "has", "haley", "her", "how", "i", "is", "it", "me", "of", "on", "or", "project", "projects", "she",
  "tell", "the", "this", "to", "was", "what", "when", "where", "which", "who", "why", "with"
]);

const chatWindow = document.querySelector("#chatWindow");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatbot = document.querySelector("#chatbot");
const chatToggle = document.querySelector("#chatToggle");
const promptButtons = document.querySelectorAll("[data-question]");

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/\bc\+\+\b/g, "cpp")
    .replace(/\bc#\b/g, "csharp")
    .replace(/[^a-z0-9+#.]+/g, " ")
    .split(" ")
    .filter((word) => word && !stopWords.has(word));
}

function contextualFallback(words, normalized) {
  const includesAny = (terms) => terms.some((term) => normalized.includes(term) || words.includes(term));

  if (includesAny(["kubernetes", "cloud", "aws", "azure", "devops", "deployment", "deploy", "vercel"])) {
    return "I do not have verified evidence that Haley has used that exact cloud tool. The closest relevant strengths are CI/CD and deployment-adjacent work: Jenkins, Docker, JaCoCo, Git/GitHub workflows, Vercel deployment for this portfolio, and production-minded environment configuration in her full-stack projects.";
  }

  if (includesAny(["mobile", "ui", "ux", "frontend", "dashboard", "visual", "chart"])) {
    return "I do not have a verified answer for that exact UI question, but Haley's closest relevant work is frontend/product engineering: FloodGuard uses React, Vite, Recharts, and dashboard panels, while FrensChatApp uses React/Vite with full-stack messaging workflows.";
  }

  if (includesAny(["security", "password", "cookie", "login", "session"])) {
    return "I do not have every security detail, but Haley's closest relevant work is FrensChatApp: JWT authentication, HttpOnly cookies, bcrypt password hashing, validation/error handling, and environment-based configuration.";
  }

  if (includesAny(["research", "model", "prediction", "dataset", "analysis"])) {
    return "I do not have a verified answer for that exact research detail, but Haley's closest strengths are her ML classifiers on health data and her High Distinction regression project, both using preprocessing, evaluation, cross-validation, and structured technical reporting.";
  }

  return fallback;
}

function answerQuestion(question) {
  const normalized = question.toLowerCase().replace(/[^a-z0-9+#.]+/g, " ").trim();
  const words = tokenize(question);
  const scored = knowledgeBase
    .map((item) => {
      const aliases = item.aliases || [];
      const exactAliasScore = aliases.some((alias) => normalized.includes(alias)) ? 12 : 0;
      const titleScore = item.title && normalized.includes(item.title.toLowerCase()) ? 10 : 0;
      const tagScore = item.tags.reduce((total, tag) => {
        const normalTag = tag.toLowerCase();
        if (normalTag.length <= 2) {
          return total + (words.some((word) => word === normalTag) ? 2 : 0);
        }
        if (normalized.includes(normalTag) && normalTag.length > 2) return total + 4;
        return total + (words.some((word) => word.length > 2 && (normalTag === word || normalTag.includes(word) || word.includes(normalTag))) ? 2 : 0);
      }, 0);
      return { item, score: exactAliasScore + titleScore + tagScore };
    })
    .sort((a, b) => b.score - a.score);

  if (!words.length || scored[0].score < 2) {
    return contextualFallback(words, normalized);
  }

  const [best, second] = scored;
  if (best.score >= 8 && second?.score >= 6 && second.item.answer !== best.item.answer) {
    return `${best.item.answer}\n\nRelated note: ${second.item.answer}`;
  }

  return best.item.answer;
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

document.querySelectorAll(".project-card, .skills-grid article, .snapshot-list article, .signal").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--glow-x", `${x.toFixed(1)}%`);
    card.style.setProperty("--glow-y", `${y.toFixed(1)}%`);
  });
});
