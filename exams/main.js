const mainSection = document.querySelector("#landing main");
// const apiUrl = "https://mennova.wuaze.com/system.php";
// try {
//   const response = fetch(apiUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       action: "getExams",
//       level: level,
//       department: department,
//     }),
//   });
//   if (response.ok) {
//     const data = response.json();
//     console.log(data);
//     const exams = data.exams;
//   } else {
//     const h2 = document.createElement("h2");
//     h2.textContent = "معذرة لا يوجد امتحانات دلوقتي.";
//     h2.style.color = "red";
//     mainSection.appendChild(h2);
//   }
// } catch (error) {
//   const h2 = document.createElement("h2");
//   h2.textContent = "معذرة لا يوجد امتحانات دلوقتي.";
//   h2.style.color = "red";
//   mainSection.appendChild(h2);
//   console.error("Error:", error);
// }
// Generate exams dynamically
exams[department][level][term].forEach((exam) => {
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