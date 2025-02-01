// if (sessionStorage.getItem("authToken")) {
  // const level = sessionStorage.getItem("level");
  // const department = sessionStorage.getItem("department");
  // const level = sessionStorage.setItem("level", 1);
  // const department = sessionStorage.setItem(
  //   "department",
  //   "Distinctive_General_Mathematics"
  // );
  const level = "1";
  const department = "Distinctive_General_Mathematics";
  console.log(level);
  console.log(department);
  // Subjects data
  const subjects_e2 = {
    // Elementary_Science: [
    //   { name: "", code: "Elementary_Science" },
    //   { name: "", code: "Distinctive_Elementary_Science" },
    // ],
    Distinctive_General_Mathematics: [
      { name: "سيكولوجية التعليم والتعلم", code: "PSY122E1" },
      { name: "استراتيجيات التعلم النشط", code: "CUR121" },
      { name: "التربية وقضايا العصر", code: "FOU123E1" },
      { name: "انجليزي", code: "EDU125" },
      {
        name: "Philosophy and History of Mathematics",
        code: "MAT121",
      },
      { name: "Calculus (2)", code: "MAT122" },
      { name: "Analytical Geometry (2)", code: "MAT123" },
      { name: "Dynamics (1)", code: "MAT124" },
      { name: "Physical Chemistry", code: "CHE125" },
      {
        name: "Electrical and magnetic and alternating current",
        code: "PHY126",
      },
      { name: "", code: "Distinctive_Elementary_Science" },
    ],
  };
  const subjects = subjects_e2;
  const mainSection = document.querySelector("#landing main");
  // Generate subjects dynamically
  subjects[department].forEach((subject) => {
    if (subject.name != "") {
      const subjectContainer = document.createElement("section");
      subjectContainer.classList.add("subject-item");
      const subjectName = document.createElement("h3");
      subjectName.textContent = subject.name;
      subjectContainer.appendChild(subjectName);
      mainSection.appendChild(subjectContainer);
      subjectContainer.onclick = function (e) {
        window.location.href = `/subjects/${subject.code}`;
      }
    }
  });
// } else {
//   // window.location.href = "/login";
// }