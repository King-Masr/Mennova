const term = 2;
let level, department;
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function getCookie(name) {
  let value = null;
  let x1 = document.cookie.split("; ");
  let y1 = Array.from(x1);
  y1.forEach((cookie) => {
    let x2 = cookie.split("=");
    let y2 = Array.from(x2);
    if (y2[0] == name) {
      value = y2[1];
      return true;
    }
  });
  return value;
}
if (getCookie("authToken")) {
  level = getCookie("level");
  level--;
  department = getCookie("department");
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
        { name: "Algebra", code: "MAT111" },
        { name: "Calculus (1)", code: "MAT112" },
        { name: "Analytical Geometry (1)", code: "MAT113" },
        { name: "Statics (1)", code: "MAT114" },
        { name: "General Chemistry", code: "CHE115" },
        { name: "Properties of matter and Heat", code: "PHY116" },
        { name: "Introduction to computer science", code: "MAT117E1" },
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
        { name: "القيادة التربوية", code: "COM231" },
        { name: "المنهج المدرسي", code: "CUR232" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "تدريس مصغر (2)", code: "CUR235" },
        { name: "Linear algebra", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "الاتجاهات المعاصرة في علم النفس", code: "PSY241" },
        { name: "دمج ذوي الاحتياجات الخاصة", code: "SPE242" },
        { name: "", code: "" },
        { name: "تدريب ميداني (1)", code: "CUR244" },
        { name: "تقنيات المعلومات والاتصال", code: "CUR245" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "تقييم التعلم", code: "PSY351" },
        { name: "تكنولوجيا التعليم والتحول الرقمي", code: "TEC352" },
        { name: "تدريب ميداني (2)", code: "CUR353" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "التربية المقارنة والدولية", code: "COM361" },
        { name: "", code: "" },
        { name: "تدريب ميداني (3)", code: "CUR363" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "مشروع تخرج (ممتد)", code: "EDU471" },
        { name: "بحوث فعل (ممتد)", code: "EDU472" },
        { name: "تدريب ميداني (4)", code: "CUR473" },
      ],
      2: [
        { name: "مشروع تخرج (ممتد)", code: "EDU481" },
        { name: "بحوث فعل (ممتد)", code: "EDU482" },
        { name: "تدريب ميداني (5)", code: "CUR483" },
      ],
    },
  ],
};
// Exams subjects assests
const subjects_assests = {
  CUR121: [
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 1",
      path: "E1-1.jpg",
    },
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 2",
      path: "E1-1.jpg",
    },
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 3",
      path: "E1-1.jpg",
    },
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 4",
      path: "E1-1.jpg",
    },
    {
      type: "recorded-lectures",
      name: "المقرر كامل",
      embed_code: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=zknuNXkx4pS4Abex&amp;list=PLdk2QqkRYjuug2P3afkLT6W1ZpyQyTA1d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
  ],
  PSY122E1: [
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 1",
      path: "E1-1.jpg",
    },
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 2",
      path: "E1-1.jpg",
    },
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 3",
      path: "E1-1.jpg",
    },
    {
      type: "written-lectures",
      name: "المحاضرة الاولى - 4",
      path: "E1-1.jpg",
    },
    {
      type: "recorded-lectures",
      name: "المقرر كامل",
      embed_code: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=PUqiA90dmJsnWQ8l&amp;list=PLMoTUWT4kD28gQmfqZ7ioPyqhACaf_918" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
  ],
};
const exams = {
  Distinctive_General_Mathematics: [
    {
      1: [
        {
          name: "امتحان منظمات دولية",
          description: "",
          questionsNum: 27,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
        {
          name: "علم نفس النمو 2024",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/MEN111-1-2024",
        },
      ],
      2: [
        {
          name: "استراتيجيات التعلم النشط 2024",
          description: "",
          questionsNum: 27,
          time: "120 دقيقة",
          link: "/exams/CUR121-1-2024",
        },
      ],
    },
    {
      1: [
        {
          name: "International Organizations Exam",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
      ],
      2: [
        {
          name: "International Organizations Exam",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
      ],
    },
    {
      1: [
        {
          name: "International Organizations Exam",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
      ],
      2: [
        {
          name: "International Organizations Exam",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
      ],
    },
    {
      1: [
        {
          name: "International Organizations Exam",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
      ],
      2: [
        {
          name: "International Organizations Exam",
          description: "",
          questionsNum: 20,
          time: "120 دقيقة",
          link: "/exams/COM-MEN113E1-1",
        },
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
