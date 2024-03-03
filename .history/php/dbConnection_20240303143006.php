<?php

$servername = "localhost";
$username = "kunkun";
$password = "";
$database = "pokemall";



if (!defined("_CODE")) {
    die();
}




try {
    if (class_exists('PDO')) {
        $dsn = "mysql:host=" . _HOST . ";dbname=" . _DB;

        $options = [
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ];

        $conn = new PDO($dsn, _USER, _PASS, $options);
    }
} catch (Exception $exc) {
};

$sql = "SELECT
F.ID AS FigureID,
F.FigureName,
F.ImageURL,
I.Price AS ProductPrice,
F.Sold
FROM
Figure F
JOIN
Inventory I ON F.ID = I.FigureID
JOIN
Size S ON I.SizeID = S.ID
ORDER BY
RAND()
LIMIT
28;
";
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
