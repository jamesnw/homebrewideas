<?php

include('globals.php');


if(isset($_GET['type'])){
  $type = $_GET['type'];
}

switch ($type){
  case 'vote_count':
    vote_count();
    break;
  case 'combo_count':
    combo_count();
    break;
  default:
    return "error";
    break;
}

function vote_count(){
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
  $sql = "SELECT (SUM(`gross_votes`) + SUM(`good_votes`)) from homebrewideas";
  $result = $conn->query($sql);
   while($r = mysqli_fetch_assoc($result)) {
		print_r(array_values($r)[0]); 
	}
}

function combo_count(){
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
  $sql = "SELECT COUNT(*) from homebrewideas";
  $result = $conn->query($sql);
  while($r = mysqli_fetch_assoc($result)) {
		print_r(array_values($r)[0]); 
	}
}