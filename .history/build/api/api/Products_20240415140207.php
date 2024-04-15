<?php

require_once '../dbInteraction/interaction.php';
require_once '../functions/get.php';

// Database connection
$db = new Database();
$get = new Get();

function Products($sizes)
{
    global $db;

    $sql = "SELECT 
    figure.ID,
    figure.ImageURL AS Image, 
    figure.FigureName, 
    primarytype.TypeName AS PrimaryType, 
    size.SizeName, 
    inventory.Price, 
    inventory.Quantity,
    DATE_FORMAT(figure.ReleaseDate, '%d/%m/%Y') AS ReleaseDate
    FROM figure
    INNER JOIN primarytype ON figure.PrimaryTypeID = primarytype.ID
    INNER JOIN inventory ON figure.ID = inventory.FigureID
    INNER JOIN size ON inventory.SizeID = size.ID
    WHERE size.ID = 1
    GROUP BY figure.ID
    LIMIT 10;";

    $products = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    return ["products" => $products, "sizes" => $sizes, "columns" => array_keys($products[0])];
}

// Main logic to handle the request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sizes = $get->getSizes();
    $products = Products($sizes);
    echo json_encode($products);
} else {
    echo json_encode(array("message" => "Method Not Allowed"));
}
