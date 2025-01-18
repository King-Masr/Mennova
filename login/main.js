document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hash the password before sending
    const hashedPassword = await hashPassword(password);

    // Example API call to validate login (replace with your API endpoint)
    const response = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: hashedPassword }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("authToken", data.token); // Store token securely
      alert("Login successful!");
      // Redirect or load secure content
    } else {
      alert("Invalid credentials");
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
