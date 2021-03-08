<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="index.css">
	<title>Onyx Systems</title>
</head>

<body>
		<form action="login.php" method="post" id="form">
			<h2 class="title">Onyx Systems</h2>
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