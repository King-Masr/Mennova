<?php
echo "Hello Server";
echo "<hr>";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Login</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <form id="loginForm">
      <label>Username: </label>
      <input type="text" id="username" placeholder="Username" required>
      <label>Password: </label>
      <input type="password" id="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <script src="main.js"></script>
  </body>
</html>