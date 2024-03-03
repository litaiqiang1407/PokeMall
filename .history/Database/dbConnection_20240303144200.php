<?php

$servername = "localhost";
$username = "kunkun";
$password = "";
$database = "pokemall";

try {
  $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

  echo "Successfully connected to the database";
} catch (PDOException $e) {
  echo "Error" . $e->getMessage();
}
