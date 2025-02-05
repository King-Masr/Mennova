// استراتيجيات التعلم النشط
const current_subject = "CUR121";
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
    assestContainer.appendChild(assestName);
    if (assest.type == "written-lectures") {
      const assestImg = document.createElement("img");
      const assestPath = assest.path;
      assestImg.src = `/subjects/${current_subject}/assests/${assestPath}`;
      assestImg.alt = assest.name;
      assestContainer.appendChild(assestImg);
      writtenLectures.appendChild(assestContainer);
    } else if (assest.type == "recorded-lectures") {
      assestContainer.innerHTML += assest.embed_code;
      recordedLectures.appendChild(assestContainer);
    }
    // assestContainer.onclick = function (e) {
    //   window.location.href = `/subjects/${subject.current_subject}`;
    // };
  }
});