<?php

$servername = "localhost";
$username = "username";
$password = "password";
$database = "pokemall";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {

        $products[] = $row;
    }
} else {
    echo "0 results";
}


$conn->close();


header('Content-Type: application/json');
echo json_encode($products);
