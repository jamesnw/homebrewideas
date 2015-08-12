<?php


if(isset($_GET['style']) && isset($_GET['addition']) && isset($_GET['vote'])){
  $style = $_GET['style'];
  $addition = $_GET['addition'];
  $vote = $_GET['vote'];
} else{
  print("Error");
  die();
}
$hash = hash('sha256', $style.$addition);

include('globals.php');

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$style = $conn->real_escape_string($style);
$addition = $conn->real_escape_string($addition);
 
if($vote == 'good'){
  $vote_key = "good_votes";
} else{
  $vote_key = "gross_votes";
}
$keys = "`hash`, `style`, `addition`, `".$vote_key ."`";
$values = "'".$hash. "', '" . $style . "', '" . $addition . "', 1";

$sql = "INSERT INTO homebrewideas ($keys) VALUES ($values) ON DUPLICATE KEY UPDATE $vote_key = $vote_key + 1";
$result = $conn->query($sql);

print $result;