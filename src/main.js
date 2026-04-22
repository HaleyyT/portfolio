const knowledgeBase = [
  {
    tags: ["project", "projects", "strongest", "standout", "best", "portfolio", "github"],
    answer:
      "Haley's standout projects are: 1. Collaborative Markdown Text Editor in C/Linux for concurrency, IPC, versioned state, and correctness. 2. Virtual Scroll Access System in Java, delivered as Scrum Master/developer with CI/CD and a 100 mark. 3. Multi-Level Queue Dispatcher in C, a 100-mark OS scheduler with policy tuning. 4. FrensChatApp, a MERN product with secure authentication and modular backend design. 5. ML Classifiers on Health Data, a High Distinction AI project with benchmarked evaluation."
  },
  {
    tags: ["summary", "profile", "about", "who", "fit", "recruiter", "interview", "resume"],
    answer:
      "Haley Tran is a University of Sydney Computer Science and Data Science student graduating in December 2026. Her profile is strongest where rigorous engineering meets practical delivery: C/Linux systems, Java team projects, MERN full-stack work, and AI/data science evaluation. A recruiter should notice her repeated 100-mark projects, High Distinction ML work, and evidence of debugging, testing, and teamwork."
  },
  {
    tags: ["systems", "c", "linux", "unix", "concurrency", "ipc", "fifo", "thread", "mutex", "operating"],
    answer:
      "Haley has substantial systems experience in C/Linux: a concurrent multi-client text editor using FIFOs, signal-based handshakes, pthread session handling, versioned shared state, optimistic concurrency control, role-based access control, and ASan/concurrency stress testing. She also built an OS synchronization simulation with pthreads, mutexes, condition variables, and strict ordering constraints, earning 92."
  },
  {
    tags: ["text", "editor", "markdown", "collaborative"],
    answer:
      "The collaborative Markdown text editor is one of Haley's strongest systems projects. It uses a client-server architecture in C, server-owned document state, FIFO-based IPC, versioned document updates, serialized command processing, validation/error handling, role-based write permissions, and stress testing for correctness under concurrent access."
  },
  {
    tags: ["scheduler", "mlfq", "queue", "dispatch", "os"],
    answer:
      "Haley's Multi-Level Queue Dispatcher earned 100. She implemented a 3-level preemptive scheduler using FCFS and Round Robin, added starvation prevention, tuned scheduling parameters, and analysed turnaround, waiting, and response-time trade-offs."
  },
  {
    tags: ["java", "scroll", "vsas", "scrum", "agile", "team", "leadership", "ci", "docker", "jenkins"],
    answer:
      "In the Virtual Scroll Access System, Haley worked as developer and Scrum Master in a team of 4. The project earned 100 and used Java, Gradle, JUnit, JSON, Git/GitHub, Agile/Scrum, Jenkins, Docker, and JaCoCo. She coordinated sprint planning, code reviews, client demos, CI/CD, and core workflows such as upload/download, search, preview, page-table functions, and record organisation."
  },
  {
    tags: ["fullstack", "mern", "react", "express", "mongodb", "jwt", "chat", "socket"],
    answer:
      "Haley's FrensChatApp is a MERN communication platform using React/Vite, Node.js, Express, MongoDB/Mongoose, JWT authentication, bcrypt password hashing, HttpOnly cookies, validation/error handling, and modular backend routes/controllers/models/utils. Socket.io real-time messaging is planned/in progress."
  },
  {
    tags: ["ai", "ml", "machine", "learning", "classifier", "classification", "weka", "naive", "bayes", "decision"],
    answer:
      "For AI/ML, Haley built end-to-end classifiers on health data with preprocessing, model training, stratified k-fold cross-validation, benchmarking, and error analysis. Her custom decision-tree variant reached 76.33% accuracy using gain ratio and early stopping, and her Naive Bayes implementation came within 0.14% of Weka's benchmark. The report earned High Distinction."
  },
  {
    tags: ["data", "regression", "r", "body", "fat", "statistics"],
    answer:
      "Haley collaborated on a High Distinction regression project predicting body fat percentage from physiological measurements for 252 subjects. The team used forward, backward, and exhaustive model selection, validated assumptions such as linearity, multicollinearity, and normality, ran 10-fold cross-validation, and achieved about R-squared 0.74."
  },
  {
    tags: ["connect", "minimax", "alpha", "beta", "game", "python", "heuristic"],
    answer:
      "Haley's Connect-4 AI earned 100. It implements a move-selection engine using depth-limited minimax, alpha-beta pruning, and heuristic evaluation to optimise search and reduce branching."
  },
  {
    tags: ["skills", "stack", "languages", "tools", "technical"],
    answer:
      "Haley's technical stack includes C, C++, Java, Python, JavaScript, SQL, R, HTML/CSS, Linux/Unix, POSIX threads, IPC/FIFOs, synchronization, memory management, REST APIs, Node.js/Express, React/Vite, MongoDB, Socket.io, JWT, Git/GitHub, Make, GCC, Gradle, JUnit, Jenkins, Docker, JaCoCo, Jira, RStudio, and Weka."
  },
  {
    tags: ["education", "university", "graduation", "coursework", "degree"],
    answer:
      "Haley studies a Bachelor of Science in Computer Science and Data Science at the University of Sydney and is expected to graduate in December 2026. Relevant coursework includes operating systems internals, data structures and algorithms, artificial intelligence, data analytics, Agile software development practices, software construction, and system programming in C."
  },
  {
    tags: ["contact", "email", "github", "resume"],
    answer:
      "You can contact Haley at haleyhoaa@gmail.com and view her GitHub at github.com/HaleyyT. This site also links two resumes: a software engineering resume and an AI/ML research-focused resume."
  }
];

const fallback =
  "I can answer from Haley's resume and project notes. Try asking about systems programming, AI/ML work, Java teamwork, FrensChatApp, strongest projects, skills, education, or recruiter fit.";

const chatWindow = document.querySelector("#chatWindow");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatbot = document.querySelector("#chatbot");
const chatToggle = document.querySelector("#chatToggle");
const ufo = document.querySelector("#ufo");
const promptButtons = document.querySelectorAll("[data-question]");

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, " ")
    .split(" ")
    .filter(Boolean);
}

function answerQuestion(question) {
  const words = tokenize(question);
  const scored = knowledgeBase
    .map((item) => ({
      item,
      score: item.tags.reduce((total, tag) => total + (words.some((word) => tag.includes(word) || word.includes(tag)) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score);

  if (!words.length || scored[0].score === 0) {
    return fallback;
  }

  const [best, second] = scored;
  if (best.score >= 2 && second?.score >= 2 && second.item.answer !== best.item.answer) {
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

window.addEventListener("pointermove", (event) => {
  if (!ufo) return;

  const rect = ufo.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);

  if (distance > 260) {
    ufo.style.setProperty("--ufo-x", "0deg");
    ufo.style.setProperty("--ufo-y", "0deg");
    return;
  }

  const rotateY = ((event.clientX - centerX) / rect.width) * 10;
  const rotateX = -((event.clientY - centerY) / rect.height) * 8;
  ufo.style.setProperty("--ufo-x", `${rotateX.toFixed(2)}deg`);
  ufo.style.setProperty("--ufo-y", `${rotateY.toFixed(2)}deg`);
});
