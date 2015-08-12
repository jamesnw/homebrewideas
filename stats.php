<?php

include('globals.php');


if(isset($_GET['type'])){
  $type = $_GET['type'];
}

switch ($type){
  case 'best':
    best();
    break;
  case 'worst':
    worst();
    break;
  default:
    return "error";
    break;
}

function best(){
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
  $sql = "SELECT `style`, `addition`, `gross_votes`,`good_votes` from homebrewideas ORDER BY `good_votes` DESC LIMIT 0,10";
  $result = $conn->query($sql);
  $rows = array();
	while($r = mysqli_fetch_assoc($result)) {
			$rows[] = $r;
	}
	print json_encode($rows);
}

function worst(){
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
  $sql = "SELECT `style`, `addition`, `gross_votes`,`good_votes` from homebrewideas ORDER BY `gross_votes` DESC LIMIT 0,10";
  $result = $conn->query($sql);
  $rows = array();
	while($r = mysqli_fetch_assoc($result)) {
			$rows[] = $r;
	}
	print json_encode($rows);
}