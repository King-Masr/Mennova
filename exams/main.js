// Example exams data
const exams = [
  {
    name: "International Organizations Exam",
    questionsNum: 20,
    time: "120 دقيقة",
    link: "/exams/international-organizations",
  },
  {
    name: "Public Policies Exam",
    questionsNum: 15,
    time: "120 دقيقة",
    link: "/exams/public-policies",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
  {
    name: "Space Science Exam",
    questionsNum: 10,
    time: "120 دقيقة",
    link: "/exams/space-science",
  },
];

// Generate exams dynamically
const mainSection = document.querySelector("#landing main");

exams.forEach((exam) => {
  const examContainer = document.createElement("section");
  examContainer.classList.add("exam-item");
  const examName = document.createElement("h3");
  examName.textContent = exam.name;
  const examDetails = document.createElement("p");
  examDetails.textContent = `الأسئلة: ${exam.questionsNum} | الوقت: ${exam.time}`;
  const examLink = document.createElement("a");
  examLink.textContent = "ابدأ الامتحان";
  examLink.href = exam.link;
  examLink.classList.add("start-exam-btn");
  examContainer.appendChild(examName);
  examContainer.appendChild(examDetails);
  examContainer.appendChild(examLink);
  mainSection.appendChild(examContainer);
});