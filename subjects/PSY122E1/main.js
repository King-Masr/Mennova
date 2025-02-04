// سيكولوجية التعليم والتعلم
const current_subject = "PSY122E1";
level = 1;
department = "Distinctive_General_Mathematics";
const mainSection = document.querySelector("#landing main");
const writtenLectures = document.getElementById("written-lectures");
const recordedLectures = document.getElementById("recorded-lectures");
// Generate subjects assests dynamically
subjects_assests[current_subject].forEach((assest) => {
  if (assest.name != "") {
    const assestContainer = document.createElement("section");
    assestContainer.classList.add("assest-item");
    const assestName = document.createElement("h3");
    assestName.textContent = assest.name;
    const assestImg = document.createElement("img");
    const assestPath = assest.path;
    assestImg.src = `/subjects/${current_subject}/assests/${assestPath}`;
    assestImg.alt = assest.name;
    assestContainer.appendChild(assestName);
    assestContainer.appendChild(assestImg);
    if (assest.type == "written-lectures") {
      writtenLectures.appendChild(assestContainer);
    } else if (assest.type == "recorded-lectures") {
      recordedLectures.appendChild(assestContainer);
    }
    // assestContainer.onclick = function (e) {
    //   window.location.href = `/subjects/${subject.current_subject}`;
    // };
  }
});