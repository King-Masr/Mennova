const quizData = [
  {
    question:
      "1. تعتبر ......... من اهم المؤسسات الفاعله في صنع السياسات العامه للدولة",
    answers: [
      "الجامعات الدولية",
      "المنظمات الدولية",
      "البنك الدولي",
      "منظمه العمل الدولية",
    ],
    answer: 0,
  },
  {
    question:
      "2. هي الهيئات والمؤسسات التي يتكون منها المجتمع الدولي وتشارك في تفعيل اعاده الجماعه الدولية",
    answers: [
      "المنظمات الدولية",
      "الجامعات الدولية",
      "البنك الدولي",
      "منظمه العمل الدولية",
    ],
    answer: 2,
  },
  {
    question: "3. العناصر المكونه للمنظمات الدولية تتمثل في .........",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "جميع ما سبق",
    ],
    answer: 2,
  },
  {
    question:
      "4. هم العنصر الجوهري في المنظمه وهم الذين يتفاعلون مع بعضهم البعض  ويصنعون من خلال هذا التفاعل",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "لا شئ ما سبق",
    ],
    answer: 2,
  },
  {
    question:
      "5. تعد بمثابه العفل الذي تسير بمقتضاه المنزمه فهي التي تصدر القرارات وترسم الخطط وتنظم وتحكم علاقات الافراد",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "لا شئ ما سبق",
    ],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(currentQuestion) {
  document.getElementById("question").innerHTML =
    quizData[currentQuestion].question;
  const answersList = document.getElementById("answers");
  answersList.innerHTML = ""; // Clear previous answers
  quizData[currentQuestion].answers.forEach((answer, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = "q" + index;
    input.value = index;
    const label = document.createElement("label");
    label.innerHTML = answer;
    label.htmlFor = "q" + index;
    li.appendChild(input);
    li.appendChild(label);
    answersList.appendChild(li);
  });
}

function showResults() {
  document.querySelector(".quiz-container").style.display = "none";
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  document.getElementById(
    "results"
  ).innerHTML = `You scored ${score} out of ${quizData.length}`;
  const percentage = (score / quizData.length) * 100;
  document.getElementById(
    "percentage"
  ).innerHTML = `Your score: ${percentage.toFixed(2)}%`;
}

document.getElementById("next-btn").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    if (userAnswer === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
      showResults();
    } else {
      loadQuestion();
    }
  // } else {
  //   alert("Please select an answer before proceeding.");
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

// Initial load
loadQuestion(currentQuestion);
