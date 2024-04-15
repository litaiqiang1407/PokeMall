<?php

require_once('../functions/validation.php');
require_once('../dbInteraction/interaction.php');
require_once('../functions/get.php');

// Database connection
$db = new Database();

$username = isset($_POST['username']) ? $_POST['username'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$password = "pokemallfigure14072024";

// Validate input
$data = [
    'username' => ['value' => $username, 'required' => true],
    'name' => ['value' => $name, 'required' => true],
    'email' => ['value' => $email, 'required' => true],
    'phone' => ['value' => $phone, 'required' => true]
];

// Check if all fields are valid
if (!isValidation($data)) {
    echo json_encode(['message' => "Invalid input data"]);
    exit;
}

$isEmailExist = $db->isExist('customer', 'Email', $email);
// Check if email already exists
if ($isEmailExist) {
    echo json_encode(['message' => "email already exists"]);
    exit;
}

// Check if phone already exists
if ($isPhoneExist) {
    echo json_encode(['message' => "phone already exists"]);
    exit;
}

$isUsernameExist = $db->isExist('customer', 'Username', $username);
// Check if username already exists
if ($isUsernameExist) {
    echo json_encode(['message' => "username already exists"]);
    exit;
}

// Insert user
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

$insertData = [
    'Username' => $username,
    'Name' => $name,
    'Email' => $email,
    'Password' => $hashedPassword,
    'Phone' => $phone,
    'Avatar' => 'https://avatarfiles.alphacoders.com/322/322784.png'
];

// Insert user
$insert = $db->insert('customer', $insertData);

if ($insert) {
    echo json_encode(array("message" => "User was added successfully."));
} else {
    echo json_encode(array("message" => "Unable to add user."));
}
