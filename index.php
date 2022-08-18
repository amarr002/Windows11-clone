<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Document</title>
</head>
<body>
    <div class="bg">
        <form class="container" action = "index.php" method = "post">
          <h2><u>Login</u></h2>
      
          <label for="email"><b><u>Email :</u></b></label>
          <input type="text" placeholder="Enter Email" name="email" required>
      
          <label for="psw"><b><u>Password :</u></b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
          <input type="checkbox" onclick="myFunction()">Show Password
      
          <button type="submit" class="btn" name= "insert">Login</button>
        </form>
      </div>
</body>
<script src="login.js"></script>
</html>

<?php
error_reporting(0);
  $success=FALSE;
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "winlogin";
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  if(isset($_POST['insert'])){ 
  $username = $_POST['email'];
  $password = $_POST['psw'];
  $query = "SELECT password FROM winlogin WHERE username= '$username'";
  $queryres = mysqli_query($conn, $query);
  if (mysqli_num_rows($queryres)>0) {

    // echo "New record created successfully";
    while($pass = $queryres -> fetch_assoc()){
      $getpass = $pass['password'];
    }
    if($getpass == $password){

      $success=true;
    }
  } else {
    // echo "Error: " . $query . "<br>" . mysqli_error($conn);
  }
}
mysqli_close($conn);
if($success == true)
{
  header("Location: http://127.0.0.1:5500/win11.html");
}
?>