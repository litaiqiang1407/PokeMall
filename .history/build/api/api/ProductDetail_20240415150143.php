<?php

require_once '../dbInteraction/interaction.php';
require_once '../functions/get.php';

// Database connection
$db = new Database();
$get = new Get();

function ProductDetail($productID, $sizes)
{
    global $db;

    $sql = "SELECT 
            figure.ID, 
            figure.FigureName, 
            figure.ImageURL, 
            figure.PrimaryTypeID, 
            figure.SecondTypeID, 
            figure.Description, 
            figure.Species, 
            figure.Height, 
            figure.Weight, 
            figure.Material, 
            DATE_FORMAT(figure.ReleaseDate, '%d/%m/%Y') AS ReleaseDate, 
            figure.Sold, 
            inventory.Price AS DefaultPrice,
            SUM(inventory.Quantity) AS TotalQuantity, 
            primarytype.TypeName AS PrimaryTypeName,
            secondtype.TypeName AS SecondTypeName,
            (SELECT AVG(Rating) FROM review WHERE FigureID = $productID) AS AverageRating,
            COUNT(review.ID) AS TotalReviews
            FROM figure
            INNER JOIN inventory ON figure.ID = inventory.FigureID
            INNER JOIN primarytype ON figure.PrimaryTypeID = primarytype.ID
            LEFT JOIN secondtype ON figure.SecondTypeID = secondtype.ID
            LEFT JOIN review ON figure.ID = review.FigureID
            WHERE figure.ID = '$productID'
            GROUP BY figure.ID";

    $productDetail = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

    return ["productDetail" => $productDetail, "sizes" => $sizes];
}

// Main logic to handle the request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['productID'])) {
        $productID = intval($_GET['productID']);
        $sizes = $get->getSizes();
        $productDetail = ProductDetail($productID, $sizes);
        echo json_encode($productDetail);
    } else {
        echo json_encode(array("message" => "Product ID is required"));
    }
} else {
    echo json_encode(array("message" => "Method Not Allowed"));
}
