for (let i = 0; i < quizData.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = "Q. " + (i + 1);
  document.getElementById("section-selector").appendChild(option);
}
let currentQuestion = 0;
let score = 0;
const answersList = document.getElementById("answers");
function loadQuestion(question) {
  currentQuestion = question;
  document.getElementById("section-selector").value = question;
  document.getElementById("question").innerHTML = quizData[question].question;
  answersList.innerHTML = ""; // Clear previous answers
  if (quizData[question].answers) {
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
  } else {
    const img = document.createElement("img");
    img.src = quizData[question].answer_path;
    answersList.appendChild(img);
    answersList.style.setProperty(
      "--before-content",
      '"اضغط لرؤية الاجابة النموذجية"'
    );
    answersList.onclick = function () {
      answersList.style.setProperty("--before-content", "unset");
    };
  }
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
