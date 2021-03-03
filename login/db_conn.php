<?php

$sname= "localhost";
$unmae= "root";
$password = "";

$db_name = "login_oss";

$conn = mysqli_connect($sname, $unmae, $password, $db_name,8080);

if (!$conn) {
	echo "Connection failed!";
}