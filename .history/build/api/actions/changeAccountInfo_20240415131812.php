<?php

// Include necessary files and establish database connection
require_once('../dbInteraction/interaction.php');
require_once('../functions/validation.php');

$customerID = isset($_POST['id']) ? $_POST['id'] : '';
$username = isset($_POST['username']) ? $_POST['username'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$avatar = isset($_POST['avatar']) ? $_POST['avatar'] : '';

$data = [
    'id' => ['value' => $customerID, 'required' => true],
    'username' => ['value' => $username, 'required' => true],
    'name' => ['value' => $name, 'required' => false],
    'email' => ['value' => $email, 'required' => true],
    'phone' => ['value' => $phone, 'required' => true],
    'avatar' => ['value' => $avatar, 'required' => false]
];

// Validate the data
// if (!isValidation($data)) {
//     echo json_encode(['message' => "Invalid input data"]);
//     exit;
// }

// Connect to the database
$db = new Database();


$updateData = [];
if ($username !== "") {
    $updateData['Username'] = $username;

    if ($db->isExist('customer', 'Username', $username)) {
        echo json_encode(['message' => "This username already exists"]);
        exit;
    }
}

if ($name !== "") {
    $updateData['Name'] = $name;
}

if ($email !== "") {
    $updateData['Email'] = $email;

    if ($db->isExist('Customer', 'Email', $email)) {
        echo json_encode(['message' => "This email already exists"]);
        exit;
    }
}

if ($phone !== "") {
    $updateData['Phone'] = $phone;

    if ($db->isExist('Customer', 'Phone', $phone)) {
        echo json_encode(['message' => "This phone already exists"]);
        exit;
    }
}

if ($avatar !== "") {
    $updateData['Avatar'] = $avatar;
}


if (!empty($updateData)) {
    if ($db->update('customer', $updateData, ['ID' => $customerID])) {
        echo json_encode(
            [
                'message' => "Account information updated",
            ]
        );
    } else {
        echo json_encode(['message' => "Unable to update user information"]);
    }
} else {
    echo json_encode(['message' => "No data sent from frontend"]);
}
