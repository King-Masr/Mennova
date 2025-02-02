const quizData = [
  {
    question:
      "1. جميع ما يأتي يمثل أهمية تطبيقية لعلم نفس النمو ما عدا .........",
    answers: [
      "معرفة السلوك الشاذ",
      "وضع مناهج دراسية ملائمة",
      "التنبؤ والتحكم في ظاهرة النمو",
      "بناء المعرفة عن ظاهرة النمو الانساني",
    ],
    answer: 1,
  },
  {
    question:
      "1. ",
    answers: [
      "",
      "",
      "",
      "",
    ],
    answer: 1,
  },
  {
    question:
      "1. ",
    answers: [
      "",
      "",
      "",
      "",
    ],
    answer: 1,
  },
  // Add more questions here...
];
for (let i = 0; i < quizData.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = "Q. " + (i+1);
  document.getElementById("section-selector").appendChild(option);
}
let currentQuestion = 0;
let score = 0;
function loadQuestion(question) {
  currentQuestion = question;
  document.getElementById("section-selector").value = question;
  document.getElementById("question").innerHTML =
    quizData[question].question;
  const answersList = document.getElementById("answers");
  answersList.innerHTML = ""; // Clear previous answers
  quizData[question].answers.forEach((answer, index) => {
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
  ).innerHTML = `لقد حققت ${score} من ${quizData.length} سؤال`;
  const percentage = (score / quizData.length) * 100;
  document.getElementById(
    "percentage"
  ).innerHTML = `نتيجتك: ${percentage.toFixed(2)}%`;
}
document.getElementById("next-btn").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    if (userAnswer === quizData[currentQuestion].answer) {
      score++;
    }
  }
  currentQuestion++;
  if (currentQuestion >= quizData.length) {
    showResults();
  } else {
    loadQuestion(currentQuestion);
  }
});
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});
// Initial load
loadQuestion(currentQuestion);
