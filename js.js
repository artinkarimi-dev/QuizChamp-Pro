

const questions = [
  {
    question: "کدام زبان برنامه‌نویسی نیست؟",
    options: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    answer: 2,
    level: "easy"
  },
  {
    question: "جاوااسکریپت در چه سالی ساخته شد؟",
    options: ["1995", "1998", "2000", "2005"],
    answer: 0,
    level: "easy"
  },
  {
    question: "DOM مخفف چیست؟",
    options: ["Document Object Model", "Data Object Method", "Do Or Make", "Driver Of Model"],
    answer: 0,
    level: "medium"
  },
  {
    question: "کدام زبان فقط در فرانت‌اند استفاده می‌شود؟",
    options: ["Python", "HTML", "PHP", "Java"],
    answer: 1,
    level: "easy"
  },
  {
    question: "کدام زبان در Node.js استفاده می‌شود؟",
    options: ["PHP", "C#", "JavaScript", "Ruby"],
    answer: 2,
    level: "medium"
  },
  {
    question: "کدام فریم‌ورک برای ساخت رابط کاربری است؟",
    options: ["Laravel", "React", "Django", "Flask"],
    answer: 1,
    level: "medium"
  },
  {
    question: "در جاوااسکریپت typeof null چیست؟",
    options: ["null", "object", "undefined", "number"],
    answer: 1,
    level: "hard"
  },
  {
    question: "کدام یک زبان strongly typed است؟",
    options: ["JavaScript", "Python", "C++", "PHP"],
    answer: 2,
    level: "medium"
  },
  {
    question: "کدام دستور برای حلقه در جاوااسکریپت درست است؟",
    options: ["loop()", "for()", "foreach()", "repeat()"],
    answer: 1,
    level: "easy"
  },
  {
    question: "کدامیک کتابخانه جاوااسکریپت است؟",
    options: ["React", "Laravel", "Vue", "Both React & Vue"],
    answer: 3,
    level: "easy"
  },
  {
    question: "تابع ()setTimeout چه کاری انجام می‌دهد؟",
    options: [
      "یک تابع را با تاخیر اجرا می‌کند",
      "یک تایمر می‌سازد",
      "حلقه اجرا می‌کند",
      "هیچکدام"
    ],
    answer: 0,
    level: "medium"
  },
  {
    question: "در CSS کدام خاصیت رنگ متن را تغییر می‌دهد؟",
    options: ["color", "background", "font-color", "text"],
    answer: 0,
    level: "easy"
  },
  {
    question: "کدام مورد نوع داده نیست؟",
    options: ["Boolean", "Integer", "Function", "Expression"],
    answer: 3,
    level: "medium"
  },
  {
    question: "مفهوم Hoisting چیست؟",
    options: [
      "افزایش سرعت کد",
      "بالا بردن متغیرها در اجرا",
      "کاهش پیچیدگی",
      "فراخوانی async"
    ],
    answer: 1,
    level: "hard"
  },
  {
    question: "کدام زبان به صورت مفسری اجرا می‌شود؟",
    options: ["C++", "Java", "Python", "Assembly"],
    answer: 2,
    level: "medium"
  }
];


const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 20;

function startTimer() {
  clearInterval(timer);
  timeLeft = 20;
  timerEl.textContent = `زمان: ${timeLeft}`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `زمان: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      lockOptions();
    }
  }, 1000);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => selectOption(li, idx);
    optionsEl.appendChild(li);
  });
  startTimer();
}

function selectOption(selected, index) {
  const q = questions[currentQuestion];
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach(opt => opt.onclick = null);
  if (index === q.answer) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
    allOptions[q.answer].classList.add("correct");
  }
  clearInterval(timer);
}

function lockOptions() {
  const q = questions[currentQuestion];
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach((opt, idx) => {
    opt.onclick = null;
    if (idx === q.answer) {
      opt.classList.add("correct");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector(".quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = `نمره شما: ${score} از ${questions.length}`;
}
 
loadQuestion();

