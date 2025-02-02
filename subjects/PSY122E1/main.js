// سيكولوجية التعليم والتعلم
const current_subject = "PSY122E1";
level = 1;
department = "Distinctive_General_Mathematics";
const mainSection = document.querySelector("#landing main");
// Generate subjects dynamically
subjects[department][level][term].forEach((subject) => {
  if (subject.name != "") {
    const subjectContainer = document.createElement("section");
    subjectContainer.classList.add("subject-item");
    const subjectName = document.createElement("h3");
    subjectName.textContent = subject.name;
    subjectContainer.appendChild(subjectName);
    mainSection.appendChild(subjectContainer);
    subjectContainer.onclick = function (e) {
      window.location.href = `/subjects/${subject.code}`;
    };
  }
});