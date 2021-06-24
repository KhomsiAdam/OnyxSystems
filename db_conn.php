<?php
session_start(); 

// $sname= "localhost";
// $unmae= "root";
// $password = "";
// $db_name = "db_oss";

$sname= "remotemysql.com";
$unmae= "GK596fuD8n";
$password = "veILA2oR3r";
$db_name = "GK596fuD8n";

$conn = mysqli_connect($sname, $unmae, $password, $db_name,3306);

if (!$conn) {
	echo "Connection failed!";
}