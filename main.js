const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: 2,
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerHTML =
    quizData[currentQuestion].question;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = ""; // Clear previous options
  quizData[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = index;
    const label = document.createElement("label");
    label.innerHTML = option;
    li.appendChild(input);
    li.appendChild(label);
    optionsList.appendChild(li);
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
  } else {
    alert("Please select an option before proceeding.");
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

// Initial load
loadQuestion();
