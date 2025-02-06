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
  Elementary_Science: [
    {
      1: [
        { name: "علم نفس النمو", code: "MEN111" },
        { name: "مهنة التعليم وأدوار المعلم", code: "FOU112" },
        { name: "المنظمات الدولية وقضايا التعليم", code: "COM-MEN113E1" },
        { name: "اللغة العربية", code: "EDU114" },
        { name: "قضايا مجتمعية", code: "UNV115" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "كيمياء عامة (1)", code: "CHE111" },
        { name: "تطبيقات الكيمياء في الحياة", code: "CHE112" },
        { name: "حرارة وديناميكا حرارية", code: "PHY113" },
        { name: "خواص مادة", code: "PHY114" },
        { name: "تطبيقات علم الأحياء في الحياة", code: "BGS115" },
        { name: "تطبيقات الرياضيات في الحياة", code: "MAT116" },
      ],
      2: [
        { name: "استراتيجيات التعلم النشط", code: "CUR121" },
        { name: "سيكولوجية التعلم", code: "PSY122E1" },
        { name: "التربية وقضايا العصر", code: "FOU123E1" },
        { name: "تدريس مصغر (1)", code: "CUR124" },
        { name: "اللغة الانجليزية", code: "EDU125" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "كيمياء عامة (2)", code: "CHE121" },
        { name: "كيمياء عضوية (1)", code: "CHE122" },
        { name: "جيولوجيا عامة", code: "BGS123" },
        { name: "طحالب + تصنيف نبات", code: "BGS124" },
        { name: "بصريات هندسية", code: "PHY125" },
        { name: "كهرومغناطيسية", code: "PHY126" },
      ],
    },
    {
      1: [
        { name: "القيادة التربوية", code: "COM231" },
        { name: "المنهج المدرسي", code: "CUR232" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "تدريس مصغر (2)", code: "CUR235" },
        { name: "كيمياء عضوية (2)", code: "CHE231" },
        { name: "تطبيقات الفيزياء في الحياة", code: "PYH232" },
        { name: "فسيولوجيا الحيوان", code: "BGS233" },
        { name: "بصريات فيزيائية", code: "PHY234" },
        { name: "كيمياء الجدول الدوري", code: "CHE235" },
        { name: "", code: "" },
      ],
      2: [
        { name: "الاتجاهات المعاصرة في علم النفس", code: "PSY241" },
        { name: "دمج ذوي الاحتياجات الخاصة", code: "SPE242" },
        { name: "", code: "" },
        { name: "تدريب ميداني (1)", code: "CUR244" },
        { name: "تقنيات المعلومات والاتصال", code: "CUR245" },
        { name: "كيمياء فيزيائية تطبيقية (1)", code: "CHE241" },
        { name: "فسيولوجي نبات", code: "BGS242" },
        { name: "الكيمياء التحليلية", code: "CHE243" },
        { name: "فيزياء حديثة", code: "PHY244" },
        { name: "اهتزازات وموجات", code: "PHY245" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "تقييم التعلم", code: "PSY351" },
        { name: "تكنولوجيا التعليم والتحول الرقمي", code: "TEC352" },
        { name: "تدريب ميداني (2)", code: "CUR353" },
        { name: "البوليمرات والأصباغ", code: "CHE351" },
        { name: "تيار متردد", code: "PHY352" },
        { name: "فلك", code: "BGS353" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "التربية المقارنة والدولية", code: "COM361" },
        { name: "", code: "" },
        { name: "تدريب ميداني (3)", code: "CUR363" },
        { name: "حشرات طفيليات", code: "BGS361" },
        { name: "كيمياء فيزيائية تطبيقية (2)", code: "CHE362" },
        { name: "صخور", code: "BGS363" },
        { name: "بيئة نباتية", code: "BGS364" },
        { name: "خلية + بيولوجيا جزيئية + أجنة", code: "BGS365" },
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
  Distinctive_Elementary_Science: [
    {
      1: [
        { name: "علم نفس النمو", code: "MEN111" },
        { name: "مهنة التعليم وأدوار المعلم", code: "FOU112" },
        { name: "المنظمات الدولية وقضايا التعليم", code: "COM-MEN113E1" },
        { name: "اللغة العربية", code: "EDU114" },
        { name: "قضايا مجتمعية", code: "UNV115" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "General Chemistry (1)", code: "CHE111" },
        { name: "Applications of Chemistry in life", code: "CHE112" },
        { name: "Heat and Thermodynamics", code: "PHY113" },
        { name: "Material properties ", code: "PHY114" },
        { name: "Applications of Biology in life", code: "BGS115" },
        { name: "Applications of Mathematics in life", code: "MAT116" },
      ],
      2: [
        { name: "استراتيجيات التعلم النشط", code: "CUR121" },
        { name: "سيكولوجية التعلم", code: "PSY122E1" },
        { name: "التربية وقضايا العصر", code: "FOU123E1" },
        { name: "تدريس مصغر (1)", code: "CUR124" },
        { name: "اللغة الانجليزية", code: "EDU125" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "General chemistry (2)", code: "CHE121" },
        { name: "Organic chemistry (1)", code: "CHE122" },
        { name: "General geology", code: "BGS123" },
        { name: "Algae + and Plant taxonomy", code: "BGS124" },
        { name: "Geometrical optics", code: "PHY125" },
        { name: "Electromagnetism", code: "PHY126" },
      ],
    },
    {
      1: [
        { name: "القيادة التربوية", code: "COM231" },
        { name: "المنهج المدرسي", code: "CUR232" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "تدريس مصغر (2)", code: "CUR235" },
        { name: "Organic Chemistry (2)", code: "CHE231" },
        { name: "Applications of Physics in life", code: "PYH232" },
        { name: "Animal Physiology", code: "BGS233" },
        { name: "Physical optics", code: "PHY234" },
        { name: "Periodic Table Chemistry", code: "CHE235" },
        { name: "", code: "" },
      ],
      2: [
        { name: "الاتجاهات المعاصرة في علم النفس", code: "PSY241" },
        { name: "دمج ذوي الاحتياجات الخاصة", code: "SPE242" },
        { name: "", code: "" },
        { name: "تدريب ميداني (1)", code: "CUR244" },
        { name: "تقنيات المعلومات والاتصال", code: "CUR245" },
        { name: "كيمياء فيزيائية تطبيقية (1)", code: "CHE241" },
        { name: "فسيولوجي نبات", code: "BGS242" },
        { name: "الكيمياء التحليلية", code: "CHE243" },
        { name: "فيزياء حديثة", code: "PHY244" },
        { name: "اهتزازات وموجات", code: "PHY245" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "تقييم التعلم", code: "PSY351" },
        { name: "تكنولوجيا التعليم والتحول الرقمي", code: "TEC352" },
        { name: "تدريب ميداني (2)", code: "CUR353" },
        { name: "البوليمرات والأصباغ", code: "CHE351" },
        { name: "تيار متردد", code: "PHY352" },
        { name: "فلك", code: "BGS353" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "", code: "" },
      ],
      2: [
        { name: "التربية المقارنة والدولية", code: "COM361" },
        { name: "", code: "" },
        { name: "تدريب ميداني (3)", code: "CUR363" },
        { name: "حشرات طفيليات", code: "BGS361" },
        { name: "كيمياء فيزيائية تطبيقية (2)", code: "CHE362" },
        { name: "صخور", code: "BGS363" },
        { name: "بيئة نباتية", code: "BGS364" },
        { name: "خلية + بيولوجيا جزيئية + أجنة", code: "BGS365" },
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
  General_Mathematics: [
    {
      1: [
        { name: "علم نفس النمو", code: "MEN111" },
        { name: "مهنة التعليم وأدوار المعلم", code: "FOU112" },
        { name: "المنظمات الدولية وقضايا التعليم", code: "COM-MEN113E1" },
        { name: "اللغة العربية", code: "EDU114" },
        { name: "قضايا مجتمعية", code: "UNV115" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "جبر", code: "MAT111" },
        { name: "حسبان (1)", code: "MAT112" },
        { name: "هندسة تحليلية (1)", code: "MAT113" },
        { name: "استاتيكا (1)", code: "MAT114" },
        { name: "كيمياء عامة", code: "CHE115" },
        { name: "خواص مادة وحرارة", code: "PHY116" },
        { name: "مقدمة في علوم الحاسب", code: "MAT117E1" },
      ],
      2: [
        { name: "استراتيجيات التعلم النشط", code: "CUR121" },
        { name: "سيكولوجية التعلم", code: "PSY122E1" },
        { name: "التربية وقضايا العصر", code: "FOU123E1" },
        { name: "تدريس مصغر (1)", code: "CUR124" },
        { name: "اللغة الانجليزية", code: "EDU125" },
        { name: "اللغة الفرنسية", code: "FAR1" },
        { name: "فلسفة وتاريخ الرياضيات", code: "MAT121" },
        { name: "حسبان (2)", code: "MAT122" },
        { name: "هندسة تحليلية (2)", code: "MAT123" },
        { name: "ديناميكا (1)", code: "MAT124" },
        { name: "كيمياء فيزيائية", code: "CHE125" },
        { name: "كهربية ومغناطيسية وتيار متردد", code: "PHY126" },
      ],
    },
    {
      1: [
        { name: "القيادة التربوية", code: "COM231" },
        { name: "المنهج المدرسي", code: "CUR232" },
        { name: "", code: "" },
        { name: "", code: "" },
        { name: "تدريس مصغر (2)", code: "CUR235" },
        { name: "جبر خطي", code: "MAT231" },
        { name: "هندسة فراغية", code: "MAT232" },
        { name: "حسبان (3)", code: "MAT233" },
        { name: "مقدمة في الإحصاء", code: "MAT234" },
        { name: "معادلات تفاضلية", code: "MAT235" },
        { name: "تحليل حقيقي", code: "MAT236" },
        { name: "", code: "" },
      ],
      2: [
        { name: "الاتجاهات المعاصرة في علم النفس", code: "PSY241" },
        { name: "دمج ذوي الاحتياجات الخاصة", code: "SPE242" },
        { name: "", code: "" },
        { name: "تدريب ميداني (1)", code: "CUR244" },
        { name: "تقنيات المعلومات والاتصال", code: "CUR245" },
        { name: "قراءات في التخصص باللغة الإنجليزية", code: "MAT241" },
        { name: "نظرية الزمر", code: "MAT242" },
        { name: "مقدمة في العدد والمنطق", code: "MAT243" },
        { name: "رياضيات حيوية", code: "MAT244" },
        { name: "ديناميكا (2)", code: "MAT245" },
        { name: "استاتيكا (2)", code: "MAT246" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "تقييم التعلم", code: "PSY351" },
        { name: "تكنولوجيا التعليم والتحول الرقمي", code: "TEC352" },
        { name: "تدريب ميداني (2)", code: "CUR353" },
        { name: "بحوث عمليات", code: "MAT351" },
        { name: "تحليل عددي", code: "MAT352" },
        { name: "تحليل دالي", code: "MAT353" },
        { name: "ديناميكا تحليلية", code: "MAT354" },
        { name: "موائع", code: "MAT355" },
        { name: "", code: "" },
      ],
      2: [
        { name: "التربية المقارنة والدولية", code: "COM361" },
        { name: "", code: "" },
        { name: "تدريب ميداني (3)", code: "CUR363" },
        { name: "تحليل مركب", code: "MAT361" },
        { name: "حلقات وحقول", code: "MAT362" },
        { name: "توبولوجي", code: "MAT363" },
        { name: "معادلات تكاملية", code: "MAT364" },
        { name: "برمجيات للرياضيات التطبيقية والإحصائية", code: "MAT365" },
        { name: "ميكانيكا الكم", code: "MAT366" },
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
        { name: "Linear algebra", code: "MAT231" },
        { name: "Space Geometry", code: "MAT232" },
        { name: "Calculus (3)", code: "MAT233" },
        { name: "Introduction to Statistics", code: "MAT234" },
        { name: "Differential Equations", code: "MAT235" },
        { name: "Real Analysis", code: "MAT236" },
        { name: "", code: "" },
      ],
      2: [
        { name: "الاتجاهات المعاصرة في علم النفس", code: "PSY241" },
        { name: "دمج ذوي الاحتياجات الخاصة", code: "SPE242" },
        { name: "", code: "" },
        { name: "تدريب ميداني (1)", code: "CUR244" },
        { name: "تقنيات المعلومات والاتصال", code: "CUR245" },
        { name: "Specialized Readings in English", code: "MAT241" },
        { name: "Group Theory", code: "MAT242" },
        { name: "Introduction to Number and Logic", code: "MAT243" },
        { name: "BioMathematics", code: "MAT244" },
        { name: "Dynamics (2)", code: "MAT245" },
        { name: "Static (2)", code: "MAT246" },
        { name: "", code: "" },
      ],
    },
    {
      1: [
        { name: "تقييم التعلم", code: "PSY351" },
        { name: "تكنولوجيا التعليم والتحول الرقمي", code: "TEC352" },
        { name: "تدريب ميداني (2)", code: "CUR353" },
        { name: "Operation Research", code: "MAT351" },
        { name: "Numerical Analysis", code: "MAT352" },
        { name: "Functional Analysis", code: "MAT353" },
        { name: "Analytical Dynamics", code: "MAT354" },
        { name: "Fluid", code: "MAT355" },
        { name: "", code: "" },
      ],
      2: [
        { name: "التربية المقارنة والدولية", code: "COM361" },
        { name: "", code: "" },
        { name: "تدريب ميداني (3)", code: "CUR363" },
        { name: "Complex Analysis", code: "MAT361" },
        { name: "Rings and Fields", code: "MAT362" },
        { name: "Topology", code: "MAT363" },
        { name: "Integral Equations", code: "MAT364" },
        {
          name: "Software for Applied Mathematics and Statistics",
          code: "MAT365",
        },
        { name: "Quantum Mechanics", code: "MAT366" },
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
