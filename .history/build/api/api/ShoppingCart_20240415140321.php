<?php

require_once '../dbInteraction/interaction.php';
require_once '../functions/get.php';

// Database connection
$db = new Database();
$get = new Get();

function ShoppingCart($customerID, $sizes)
{
    global $db;

    $sql = "SELECT 
    shoppingcartitem.ID, 
    figure.ID AS FigureID,
    figure.FigureName, 
    figure.ImageURL,
    size.SizeName, 
    inventory.Price AS Price, 
    shoppingcartitem.Quantity,
    ROUND(inventory.Price * shoppingcartitem.Quantity, 2) AS TotalAmount
    FROM shoppingcartitem
    JOIN figure ON shoppingcartitem.FigureID = figure.ID
    JOIN size ON shoppingcartitem.SizeID = size.ID
    JOIN inventory ON shoppingcartitem.FigureID = inventory.FigureID AND shoppingcartitem.SizeID = inventory.SizeID
    WHERE shoppingcartitem.ShoppingCartID = (SELECT ID FROM shoppingcart WHERE CustomerID = $customerID)
    ORDER BY shoppingcartitem.ID DESC";;

    $cartItems = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    return ["cartItems" => $cartItems, "sizes" => $sizes];
}

// Main logic to handle the request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['customerID'])) {
        $customerID = intval($_GET['customerID']);
        $sizes = $get->getSizes();
        $cartItems = ShoppingCart($customerID, $sizes);
        echo json_encode($cartItems);
    } else {
        echo json_encode(array("message" => "Customer ID is required"));
    }
} else {
    echo json_encode(array("message" => "Method Not Allowed"));
}
