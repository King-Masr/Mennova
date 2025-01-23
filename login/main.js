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
    { name: "العلوم ابتدائى", value: "early_childhood" },
    { name: "العلوم مميز ابتدائى", value: "primary_methods" },
    { name: "الرياضيات ابتدائى", value: "secondary_education" },
    { name: "اللغة العربية ابتدائى", value: "secondary_education" },
    { name: "اللغة الإنجليزية ابتدائى", value: "secondary_education" },
    { name: "الدراسات الاجتماعية", value: "secondary_education" },
  ],
  "تعليم عام": [
    { name: "الفيزياء اعدادى وثا", value: "secondary_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
    { name: "Special", value: "special_education" },
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
