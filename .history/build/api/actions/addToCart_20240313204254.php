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

// Get the shopping cart ID of the customer
function getShoppingCartID($customerID)
{
    global $db;

    $sql = "SELECT ID FROM ShoppingCart WHERE CustomerID = '$customerID'";
    $shoppingCartID = $db->query($sql)->fetchColumn();

    if (!$shoppingCartID) {
        $db->insert("ShoppingCart", ['CustomerID' => $customerID]);
        return $db->lastInsertId();
    }

    return $shoppingCartID;
}


// Check if the item already exists in the shopping cart
function isCartItemExist($shoppingCartID, $figureID, $sizeID, $quantity)
{
    global $db;

    $sql = "SELECT ID, Quantity FROM ShoppingCartItem WHERE ShoppingCartID = '$shoppingCartID' AND FigureID = '$figureID' AND SizeID = '$sizeID'";

    $existingCartItem = $db->query($sql)->fetch(PDO::FETCH_ASSOC);

    return $existingCartItem;
}

// Add the quantity of the item in the shopping cart
function addQuantity($existingCartItem, $quantity)
{
    global $db;

    $newQuantity = $existingCartItem['Quantity'] + $quantity;

    $db->update("ShoppingCartItem", ['Quantity' => $newQuantity], ['ID' => $existingCartItem['ID']]);

    echo json_encode(['message' => "Figure added to cart successfully"]);
    exit;
}

// Add the item to the shopping cart
function addCartItem($shoppingCartID, $figureID, $sizeID, $quantity)
{
    global $db;

    $db->insert("ShoppingCartItem", ['ShoppingCartID' => $shoppingCartID, 'FigureID' => $figureID, 'SizeID' => $sizeID, 'Quantity' => $quantity]);

    echo json_encode(['message' => "Figure added to cart successfully"]);
    exit;
}


$shoppingCartID = getShoppingCartID($customerID);
$sizeID = $get->getSizeID($sizeName);

$existingCartItem = isCartItemExist($shoppingCartID, $figureID, $sizeID, $quantity);

if ($existingCartItem) {
    addQuantity($existingCartItem, $quantity);
} else {
    addCartItem($shoppingCartID, $figureID, $sizeID, $quantity);
    echo json_encode(['message' => "Figure added to cart successfully"]);
    exit;
};
