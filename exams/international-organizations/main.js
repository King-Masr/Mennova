const quizData = [
  {
    question:
      "1. تعتبر ......... من اهم المؤسسات الفاعله في صنع السياسات العامه للدولة",
    answers: [
      "الجامعات الدولية",
      "المنظمات الدولية",
      "البنك الدولي",
      "منظمه العمل الدولية",
    ],
    answer: 1,
  },
  {
    question:
      "2. هي الهيئات والمؤسسات التي يتكون منها المجتمع الدولي وتشارك في تفعيل اعاده الجماعه الدولية",
    answers: [
      "المنظمات الدولية",
      "الجامعات الدولية",
      "البنك الدولي",
      "منظمه العمل الدولية",
    ],
    answer: 0,
  },
  {
    question: "3. العناصر المكونه للمنظمات الدولية تتمثل في .........",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "جميع ما سبق",
    ],
    answer: 3,
  },
  {
    question:
      "4. هم العنصر الجوهري في المنظمه وهم الذين يتفاعلون مع بعضهم البعض  ويصنعون من خلال هذا التفاعل",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "لا شئ ما سبق",
    ],
    answer: 0,
  },
  {
    question:
      "5. تعد بمثابه العفل الذي تسير بمقتضاه المنزمه فهي التي تصدر القرارات وترسم الخطط وتنظم وتحكم علاقات الافراد",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "لا شئ ما سبق",
    ],
    answer: 1,
  },
  {
    question:
      "6. هي الوسائل التي تستخدمها المنظمه في اداء عملها وذلك حسب مجال وطبيعة نشاطها وتخصصها",
    answers: [
      "الافراد",
      "الادارة الفاعلة",
      "الادوات والتكنولوجيا",
      "لا شئ ما سبق",
    ],
    answer: 2,
  },
  {
    question: "7. من ماثله المنظمات الدولية",
    answers: [
      "الامم المتحدة للتربية والعوم والثقافه",
      "المنظمة الحقوقيه للتربية والثقافه والعوم",
      "الالسكو",
      "البنك الدولي",
    ],
    answer: 0,
  },
  {
    question: "8. تاسست منظمه اليونسكو عام",
    answers: ["1950", "1945", "1946", "1952"],
    answer: 1,
  },
  {
    question:
      "9. منظمة ...... هي منظمة الامم المتحدة للتربية والعلم والثقافه وتتمثل رسالتها في ارسال السلام من خلال التعاون في مجال التربية والعلوم والثقافه",
    answers: ["اليونسكو", "الالسوك", "اليونسيف", "البنك الدولي"],
    answer: 0,
  },
  {
    question: "10. من اسباب تاسيس منظمة اليونسكو",
    answers: [
      "القضاء علي الفقر",
      "تحقق التنميه المستدامه",
      "اقامه حوار بين الثقافات",
      "جميع ما سبق",
    ],
    answer: 3,
  },
  {
    question:
      "11. تتراس منظمه .... الفرنسيه اودري ازولاي بعد فوزها في الانتخابات التي اجريت عام 2017",
    answers: ["اليونيسكو", "الالسكو", "اليونسيف", "البنك الدولي"],
    answer: 0,
  },
  {
    question: "12. تم تشكيل هيئتين دولتين قبل تاسيس منظمة اليونسكو وهما",
    answers: [
      "اللجنه الدولية للتعاون الفكري",
      "مكتب التربيةالدولي",
      "ا وب معاً",
      "لا شئ مما سبق",
    ],
    answer: 2,
  },
  {
    question: "13. اُسست عصبه الامم .... عام 1922 كمنظمه استشارية مقرها جنيف",
    answers: [
      "اللجنه الدولية للتعاون الفكري",
      "مكتب التربيةالدولي",
      "ا وب معاً",
      "لا شئ مما سبق",
    ],
    answer: 0,
  },
  {
    question:
      "14. تهدف ...... الي تعزيز التبادل الدولي الثقافي والفكري بين العلماء والباحثين والفنانين والمفكرين من مجالات اخري",
    answers: [
      "اللجنه الدولية للتعاون الفكري",
      "مكتب التربيةالدولي",
      "ميثاق اليونيسكو",
      "اليونيسف",
    ],
    answer: 0,
  },
  {
    question:
      "15. تم حل اللجنه الدولية للتعاون الفكري عام ..... بعد انتهاء الحرب العالميه الثانيه وحل عصبه الامم",
    answers: ["1950", "1945", "1946", "1952"],
    answer: 2,
  },
  {
    question: "16. تم تاسيس ...... من قبل عصبة الامم عام 1925",
    answers: [
      "اللجنه الدولية للتعاون الفكري",
      "مكتب التربيةالدولي",
      "ميثاق اليونيسكو",
      "اليونيسف",
    ],
    answer: 1,
  },
  {
    question: "17. يهدف ......... الي الاهتمام بالتعليم في دول العالم",
    answers: [
      "اللجنه الدولية للتعاون الفكري",
      "مكتب التربيةالدولي",
      "ميثاق اليونيسكو",
      "اليونيسف",
    ],
    answer: 1,
  },
  {
    question:
      "18. .............. تم عقد مؤتمران يعتبران الطريق التمهيدي لتاسيس منظمة اليونيسكو",
    answers: [
      "مؤتمر الحلفاء للتربية",
      "مؤتمر الامم المتحده",
      "أ و ب معاً",
      "لا شيء مما سبق",
    ],
    answer: 2,
  },
  {
    question:
      "19. ضم مؤتمر الحلفاء للتربية كل من ..... وهي الدول التي حاربت ضد المانيا النازية",
    answers: [
      "مؤتمر الحلفاء للتربية",
      "مؤتمر الامم المتحده",
      "المؤتمر العام",
      "المنتدي الاقتصادي العالمي",
    ],
    answer: 0,
  },
  {
    question:
      "20. ضم مؤتمر الحلفاء للتربية كل من ..... وهي الدول التي حاربت ضد المانيا النازية",
    answers: [
      "الولايات المتحده الامريكيه",
      "الاتحاد السوفيتي",
      "بريطانيا وفرنسا",
      "جميع ما سبق",
    ],
    answer: 3,
  },
  {
    question: "21. تم عقد ..... في لندن في نوفمبر 1945",
    answers: [
      "مؤتمر الحلفاء للتربية",
      "مؤتمر الامم المتحده",
      "المؤتمر العام",
      "المنتدي الاقتصادي العالمي",
    ],
    answer: 1,
  },
  {
    question:
      "22. ضم المؤتمر الامم المتحده ممثله عن ...... دولة اتفقت علي تاسيس منظمة تعني بالتربية",
    answers: ["30", "20", "40", "35"],
    answer: 2,
  },
  {
    question:
      "23. تعزز منظمة ..... البرامج والسياسات العلميه باعتبار منابر لتحقيق التنميه وضمان التعاون",
    answers: ["اليونيسكو", "الالسكو", "اليونيسف", "البنك الدولي"],
    answer: 0,
  },
  {
    question: "24. تتمثل برامج منظمة اليونيسكو في ...... برامج اساسيه",
    answers: ["ثلاثه", "خمس", "اربعة", "سبعه"],
    answer: 1,
  },
  {
    question: "25. برامج عمل منظمة اليونسكو تتمثل في ............",
    answers: [
      "التربية والتعليم",
      "العلوم الطبيعيه",
      "الثقافه والاتصالات والاعلام",
      "جميع ما سبق",
    ],
    answer: 3,
  },
  {
    question:
      "26. تدعم ...... العديد من المشاريع مثل محو الاميه والتدريب التقني ,برامج تاهيل وتدريب المعلمين",
    answers: ["اليونيكسو", "الالسكو", "اليونيسف", "البنك الدولي"],
    answer: 0,
  },
  {
    question: "27. تتالف اليونيسكو من الهيئات التاليه ..............",
    answers: [
      "المؤتمر العام",
      "المجلس التفيذي",
      "الهيئه التنفيذيه العامه",
      "جميع ما سبق",
    ],
    answer: 3,
  },
  // Add more questions here...
];
for (let i = 0; i < quizData.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = "Q. " + (i+1);
  document.getElementById("section-selector").appendChild(option);
}
let currentQuestion = 0;
let score = 0;
function loadQuestion(currentQuestion) {
  document.getElementById("section-selector").value = currentQuestion;
  document.getElementById("question").innerHTML =
    quizData[currentQuestion].question;
  const answersList = document.getElementById("answers");
  answersList.innerHTML = ""; // Clear previous answers
  quizData[currentQuestion].answers.forEach((answer, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = "q" + index;
    input.value = index;
    const label = document.createElement("label");
    label.innerHTML = answer;
    label.htmlFor = "q" + index;
    li.appendChild(input);
    li.appendChild(label);
    answersList.appendChild(li);
  });
}
function showResults() {
  document.querySelector(".quiz-container").style.display = "none";
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  document.getElementById(
    "results"
  ).innerHTML = `لقد حققت ${score} من ${quizData.length} سؤال`;
  const percentage = (score / quizData.length) * 100;
  document.getElementById(
    "percentage"
  ).innerHTML = `نتيجتك: ${percentage.toFixed(2)}%`;
}
document.getElementById("next-btn").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    if (userAnswer === quizData[currentQuestion].answer) {
      score++;
    }
  }
  currentQuestion++;
  if (currentQuestion >= quizData.length) {
    showResults();
  } else {
    loadQuestion(currentQuestion);
  }
});
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});
// Initial load
loadQuestion(currentQuestion);
