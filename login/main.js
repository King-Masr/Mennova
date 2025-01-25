import { secret } from '@aws-amplify/backend';
document.getElementById("haveaccount").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementsByTagName("form")[1].style.display = "block";
  document.getElementsByTagName("form")[0].style.display = "none";
});
document.getElementById("newaccount").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementsByTagName("form")[0].style.display = "block";
  document.getElementsByTagName("form")[1].style.display = "none";
});
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
const searchInput = document.getElementById("search");
const departmentList = document.getElementById("department-list");
const selectedDepartmentInput = document.getElementById(
  "selected-department"
);
// Populate the dropdown with categories and departments
Object.keys(categories).forEach((category) => {
  const categoryHeader = document.createElement("li");
  categoryHeader.textContent = category;
  categoryHeader.style.textAlign = "center";
  categoryHeader.classList.add("category");
  departmentList.appendChild(categoryHeader);
  categories[category].forEach((department) => {
    const li = document.createElement("li");
    li.textContent = department.name;
    li.dataset.value = department.value;
    li.addEventListener("click", () => {
      searchInput.value = department.name; // Set input value to the clicked department
      selectedDepartmentInput.value = department.value; // Set hidden input value
      departmentList.style.display = "none"; // Hide the dropdown
    });
    departmentList.appendChild(li);
  });
});
// Show dropdown when input is focused
searchInput.addEventListener("focus", () => {
  departmentList.style.display = "block";
});
// Filter dropdown based on input
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  Array.from(departmentList.children).forEach((item) => {
    if (item.classList.contains("category")) return; // Skip categories
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown-container")) {
    departmentList.style.display = "none";
  }
});
// Handle form submission
document.getElementById("department-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedValue = selectedDepartmentInput.value;
  if (selectedValue) {
    alert(`Selected Department Value: ${selectedValue}`);
  } else {
    alert("Please select a department.");
  }
});
document.getElementById("signupForm").onsubmit = function (e) {
  e.preventDefault();
  const action = "registration";
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;
  const level = document.getElementById("level").value;
  const department = document.getElementById("selected-department").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  // Hash the password before sending
  const hashedPassword = hashPassword(password);
  console.log(secret("API-Token"));
  console.log(JSON.stringify({ username, password, password: hashedPassword }));
};
// document.getElementById("signupForm").addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const action = "registration";
//   const username = document.getElementById("username").value;
//   const name = document.getElementById("name").value;
//   const level = document.getElementById("level").value;
//   const department = document.getElementById("selected-department").value;
//   const phone = document.getElementById("phone").value;
//   const password = document.getElementById("password").value;
//   // Hash the password before sending
//   const hashedPassword = await hashPassword(password);
//   console.log(secret("API-Token"));
//   console.log(JSON.stringify({ username, password, password: hashedPassword }));
//   // Example API call to validate login (replace with your API endpoint)
//   // const response = await fetch("https://mennova.wuaze.com/system.php", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "API-Token": secret("API-Token"),
//   //   },
//   //   body: JSON.stringify({ username, password }),
//   // });
//   // if (response.ok) {
//   //   const data = await response.json();
//   //   sessionStorage.setItem("authToken", data.token); // Store token securely
//   //   // alert("Login successful!");
//   //   // Redirect or load secure content
//   //   const baseUrl = window.location.origin;
//   //   window.location.href = baseUrl;
//   // } else {
//   //   // alert("Invalid credentials");
//   // }
// });
document.getElementById("signinForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // Hash the password before sending
  const hashedPassword = await hashPassword(password);
  console.log(secret("API-Token"));
  console.log(JSON.stringify({ username, password, password: hashedPassword }));
  // Example API call to validate login (replace with your API endpoint)
  const response = await fetch("https://mennova.wuaze.com/system.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Token": secret("API-Token"),
    },
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem("authToken", data.token); // Store token securely
    // alert("Login successful!");
    // Redirect or load secure content
    const baseUrl = window.location.origin;
    window.location.href = baseUrl;
  } else {
    // alert("Invalid credentials");
  }
});

// Function to hash the password
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
