<!DOCTYPE html>
<html>
<head>
	<title>Onyx Systems</title>
	<link rel="stylesheet" href="Login-style.css">
</head>
<body>
     <form action="login.php" method="post" id="form">
     	<div class="Title">	
	 <h2>Onyx Systems</h2>
	 	</div>
     	
			<label>
				<div class="input-username-div">
     	<input type="text" name="uname" placeholder="Username" id="username" autocomplete="off"><br>
		 </div>
				<div class="input-password-div">
     	<input type="password" name="password" placeholder="Password" id="password"><br>
		 		</div>
			 </label>
			 <div class="error-div">
			 <?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
		 </div>
			 <div class="button-tag">
     	<button type="submit" onclick="checkempty()">LOG IN</button>
		
		 	</div>

     </form>
	 <script src="script.js"></script>
</body>
</html>