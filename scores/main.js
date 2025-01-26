if (sessionStorage.getItem("authToken")) {
  const level = sessionStorage.getItem("level");
  const department = sessionStorage.getItem("department");
}
const apiUrl = "https://mennova.wuaze.com/system.php";
const topStudentsList = document.getElementById("top-students");
const otherStudentsList = document.getElementById("other-students");
try {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "action": "getScores",
      "level": level,
      "department": department
    }),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    // Separate top 3 students and others
    const topStudents = data.slice(0, 3);
    const otherStudents = data.slice(3);
    // Render top students
    topStudents.forEach(student => {
      const li = document.createElement("li");
      li.textContent = `${student.name} - ${student.score}`;
      topStudentsList.appendChild(li);
    });
    // Render other students
    otherStudents.forEach(student => {
      const li = document.createElement("li");
      li.textContent = `${student.name} - ${student.score}`;
      otherStudentsList.appendChild(li);
    });
  } else {
    console.error("Failed to fetch student scores");
  }
} catch (error) {
  console.error("Error:", error);
}