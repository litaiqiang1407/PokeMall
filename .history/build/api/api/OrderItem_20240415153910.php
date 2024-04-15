<?php

require_once '../dbInteraction/interaction.php';
require_once '../functions/get.php';

// Database connection
$db = new Database();
$get = new Get();

function OrderItem($orderItemID)
{
    global $db;
    $sql = "SELECT 
                orderitem.ID, 
                figure.ID, 
                figure.FigureName, 
                figure.ImageURL,
                sizes.SizeName AS Size, 
                orderitem.Quantity, 
                inventory.Price AS Price, 
                ROUND(inventory.Price * orderitem.Quantity, 2) AS TotalAmount
            FROM orderitem 
            JOIN figure ON orderitem.FigureID = figure.ID 
            JOIN sizes ON orderitem.SizeID = sizes.ID 
            JOIN inventory ON orderitem.FigureID = inventory.FigureID AND orderitem.SizeID = inventory.SizeID
            WHERE orderitem.OrderID = '$orderItemID'";

    $orderItems = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
    return $orderItems;
}

// Main logic to handle the request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['orderItemID'])) {
        $orderItemID = intval($_GET['orderItemID']);
        $orderItems = OrderItem($orderItemID);
        echo json_encode($orderItems);
    } else {
        echo json_encode(array("message" => "Order Item ID is required"));
    }
} else {
    echo json_encode(array("message" => "Method Not Allowed"));
}
