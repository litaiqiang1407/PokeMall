<?php

// Include database connection
require_once '../dbInteraction/interaction.php';

// Database connection
$db = new Database();

// Function to fetch suggestion products
function SuggestionProducts()
{
    global $db;

    $sql = "SELECT 
            figure.ID, 
            figure.figureName, 
            figure.ImageURL, 
            inventory.Price, 
            figure.Sold 
            FROM figure 
            INNER JOIN inventory ON figure.ID = inventory.figureID 
            WHERE inventory.SizeID = 1 
            ORDER BY RAND() 
            ";

    $products = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    return $products;
}

// Main logic to handle the request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $products = SuggestionProducts();
    echo json_encode($products);
} else {
    echo json_encode(array("message" => "Method Not Allowed"));
}
