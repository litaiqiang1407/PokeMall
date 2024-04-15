<?php

require_once('../functions/validation.php');
require_once('../dbInteraction/interaction.php');
require_once('../functions/get.php');

$customerID = isset($_POST['customerID']) ? $_POST['customerID'] : '';
$figureID = isset($_POST['figureID']) ? $_POST['figureID'] : '';
$sizeName = isset($_POST['sizeName']) ? $_POST['sizeName'] : '';
$quantity = isset($_POST['quantity']) ? $_POST['quantity'] : '';

$data = [
    'customerID' => ['value' => $customerID, 'required' => true],
    'figureID' => ['value' => $figureID, 'required' => true],
    'sizeName' => ['value' => $sizeName, 'required' => true],
    'quantity' => ['value' => $quantity, 'required' => true]
];

$db = new Database();
$get = new Get();

function createOrder($customerID)
{
    global $db;

    $db->insert("PurchaseOrder", ['CustomerID' => $customerID]);

    return $db->lastInsertId();
}

function addOrderItem($orderID, $figureID, $sizeID, $quantity)
{
    global $db;

    $db->insert("OrderItem", ['OrderID' => $orderID, 'FigureID' => $figureID, 'SizeID' => $sizeID, 'Quantity' => $quantity]);
}

$orderID = createOrder($customerID);
$sizeID = $get->getSizeID($sizeName);

addOrderItem($orderID, $figureID, $sizeID, $quantity);

echo json_encode($orderID);
