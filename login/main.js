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
const searchInput = document.getElementById("search");
const departmentList = document.getElementById("department-list");
let selectedDepartmentInput = document.getElementById("selected-department");
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
document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;
  const level = document.getElementById("level").value;
  const department = document.getElementById("selected-department").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  // Hash the password before sending
  const hashedPassword = await hashPassword(password);
  console.log(JSON.stringify({ action: "signin", username: username }));
  // Example API call to validate login (replace with your API endpoint)
  const response = await fetch("https://mennova.wuaze.com/system.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({action: "registration", username: username, password: password}),
  });
  if (response.ok) {
    const data = await response.json();
    setCookie("authToken", data.token, 7); // Store token securely
    setCookie("level", level, 7);
    setCookie("department", department, 7);
    // alert("Login successful!");
    // Redirect or load secure content
    const baseUrl = window.location.origin;
    window.location.href = baseUrl;
  } else {
    // alert("Invalid credentials");
  }
});
document.getElementById("signinForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("cusername").value;
  const password = document.getElementById("cpassword").value;
  // Hash the password before sending
  console.log(JSON.stringify({ action: "signin", username: username, password: password }));
  // Example API call to validate login (replace with your API endpoint)
  const response = await fetch("https://mennova.wuaze.com/system.php", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "signin",
      username: username,
      password: password,
    }),
  });
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    setCookie("authToken", data.token, 7); // Store token securely
    setCookie("level", level, 7);
    setCookie("department", department, 7);
    // alert("Login successful!");
    // Redirect or load secure content
    // const baseUrl = window.location.origin;
    // window.location.href = baseUrl;
  } else {
    // alert("Invalid credentials");
  }
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const level = document.getElementById("level").value;
  const department = document.getElementById("selected-department").value;
  setCookie("authToken", "Guest");
  setCookie("level", level);
  setCookie("department", department);
  if (sessionStorage.getItem("redirect")) {
    window.location.href = sessionStorage.getItem("redirect");
    sessionStorage.removeItem("redirect");
  } else {
    window.location.href = window.location.origin;
  }
});