const term = 1;
let level, department;
if (sessionStorage.getItem("authToken")) {
  level = sessionStorage.getItem("level");
  level--;
  department = sessionStorage.getItem("department");
} else {
  if (window.location.pathname != "/login/") {
    sessionStorage.setItem("redirect", window.location.href);
    window.location.href = "/login";
  }
}
// categories data
const categories = {
  "تعليم ابتدائي": [
    { name: "العلوم ابتدائى", value: "Elementary_Science" },
    { name: "العلوم مميز ابتدائى", value: "Distinctive_Elementary_Science" },
    { name: "الرياضيات ابتدائى", value: "Elementary_Mathematics" },
    { name: "اللغة العربية ابتدائى", value: "Elementary_Arabic_Language" },
    { name: "اللغة الإنجليزية ابتدائى", value: "Elementary_English_Language" },
    { name: "الدراسات الاجتماعية", value: "Social_Studies" },
  ],
  "تعليم عام": [
    { name: "الفيزياء عام", value: "General_Physics" },
    { name: "الفيزياء مميز عام", value: "Distinctive_General_Physics" },
    { name: "الكيمياء عام", value: "General_Chemistry" },
    { name: "الكيمياء مميز عام", value: "Distinctive_General_Chemistry" },
    { name: "البيولوجي عام", value: "Leneral_Biology" },
    { name: "البيولوجي مميز عام", value: "Distinctive_General_Biology" },
    { name: "الرياضيات عام", value: "General_Mathematics" },
    { name: "الرياضيات مميز عام", value: "Distinctive_General_Mathematics" },
    { name: "التربية الخاصة", value: "Special_Education" },
    { name: "اللغة العربية عام", value: "General_Arabic_Language" },
    { name: "اللغة الإنجليزية عام", value: "General_English_Language" },
    { name: "اللغة الفرنسية عام", value: "General_French_Language" },
    { name: "اللغة الألمانية عام", value: "General_German_Language" },
    { name: "الفلسفة عام", value: "General_Philosophy" },
    { name: "علم النفس التربوى عام", value: "General_Psychology" },
    { name: "التاريخ عام", value: "General_History" },
    { name: "الجغرافيا عام", value: "General_Geography" },
  ],
};
// Subjects data
const subjects = {
  Distinctive_General_Mathematics: [
    {
      1: [
        { name: "علم نفس النمو", code: "MEN111" },
        { name: "مهنة التعليم وأدوار المعلم", code: "FOU112" },
        { name: "المنظمات الدولية وقضايا التعليم", code: "COM-MEN113E1" },
        { name: "اللغة العربية", code: "EDU114" },
        { name: "قضايا مجتمعية", code: "UNV115" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "استراتيجيات التعلم النشط", code: "CUR121" },
        { name: "سيكولوجية التعلم", code: "PSY122E1" },
        { name: "التربية وقضايا العصر", code: "FOU123E1" },
        { name: "تدريس مصغر", code: "CUR124" },
        { name: "اللغة الانجليزية", code: "EDU125" },
        { name: "اللغة الفرنسية", code: "FAR1" },
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
      ],
    },
    {
      1: [
        { name: "القيادة التربوية", code: "" },
        { name: "المنهج المدرسي", code: "" },
        { name: "تدريس مصغر (2)", code: "" },
        // { name: "", code: "" },
        { name: "Linear algebra", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "الاتجاهات المعاصرة في علم النفس", code: "" },
        { name: "دمج ذوي الاحتياجات الخاصة", code: "" },
        { name: "تدريب ميداني (1)", code: "" },
        { name: "تقنيات المعلومات والاتصال", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "تقييم التعلم", code: "" },
        { name: "تكنولوجيا التعليم والتحول الرقمي", code: "" },
        { name: "تدريب ميداني (2)", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
    },
  ],
};
function alertMessage(title, message) {
  // Create the popup container
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");
  // Create the popup title
  const popupTitle = document.createElement("h2");
  popupTitle.textContent = title;
  popupTitle.classList.add("popup-title");
  // Create the popup message
  const popupMessage = document.createElement("p");
  popupMessage.textContent = message;
  popupMessage.classList.add("popup-message");
  // Create the popup close button
  const popupCloseButton = document.createElement("button");
  popupCloseButton.textContent = "Close";
  popupCloseButton.classList.add("popup-close-button");
  popupCloseButton.addEventListener("click", () => {
    popupContainer.remove();
  });
  // Append the popup title, message, and close button to the popup container
  popupContainer.appendChild(popupTitle);
  popupContainer.appendChild(popupMessage);
  popupContainer.appendChild(popupCloseButton);
  // Append the popup container to the body
  document.body.appendChild(popupContainer);
}
