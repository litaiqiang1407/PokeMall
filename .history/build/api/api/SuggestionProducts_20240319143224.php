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
            Figure.ID, 
            Figure.FigureName, 
            Figure.ImageURL, 
            Inventory.Price, 
            Figure.Sold 
            FROM Figure 
            INNER JOIN Inventory ON Figure.ID = Inventory.FigureID 
            WHERE Inventory.SizeID = 1 
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
