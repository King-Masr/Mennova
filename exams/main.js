const mainSection = document.querySelector("#landing main");
if (sessionStorage.getItem("authToken")) {
  const level = sessionStorage.getItem("level");
  const department = sessionStorage.getItem("department");
  const apiUrl = "https://mennova.wuaze.com/system.php";
  try {
    const response = fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "getExams",
        level: level,
        department: department,
      }),
    });
    if (response.ok) {
      const data = response.json();
      console.log(data);
      const exams = data.exams;
      // Example exams data
      const Exampleexams = [
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
    } else {
      const h2 = document.createElement("h2");
      h2.textContent = "معذرة لا يوجد امتحانات دلوقتي.";
      h2.style.color = "red";
      mainSection.appendChild(h2);
    }
  } catch (error) {
    const h2 = document.createElement("h2");
    h2.textContent = "معذرة لا يوجد امتحانات دلوقتي.";
    h2.style.color = "red";
    mainSection.appendChild(h2);
    console.error("Error:", error);
  }
} else {
  const h2 = document.createElement("h2");
  h2.textContent = "معذرة لا يوجد امتحانات دلوقتي.";
  h2.style.color = "red";
  h2.style.textAlign = "center";
  mainSection.style.display = "block";
  mainSection.style.marginBottom = "15pc";
  mainSection.appendChild(h2);
}