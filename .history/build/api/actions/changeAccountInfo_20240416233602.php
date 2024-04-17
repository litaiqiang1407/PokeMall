<?php

// Include necessary files and establish database connection
require_once('../dbInteraction/interaction.php');
require_once('../functions/validation.php');
require_once('../functions/get.php');

$customerID = isset($_POST['id']) ? $_POST['id'] : '';
$username = isset($_POST['username']) ? $_POST['username'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
// $avatar = isset($_POST['avatar']) ? $_POST['avatar'] : '';
$avatar = isset($_FILES['avatar']) ? $_FILES['avatar'] : '';

$data = [
    'id' => ['value' => $customerID, 'required' => true],
    'username' => ['value' => $username, 'required' => true],
    'name' => ['value' => $name, 'required' => false],
    'email' => ['value' => $email, 'required' => true],
    'phone' => ['value' => $phone, 'required' => true],
];

// Connect to the database
$db = new Database();
$get = new Get();


$updateData = [];
if ($username !== "") {
    $isExist = $db->isExist('customer', 'Username', $username);
    $ID = $get->getCustomerID('Username', $username);

    if ($isExist && $ID !== $customerID) {
        echo json_encode(['message' => "This username already exists"]);
        exit;
    } else {
        $updateData['Username'] = $username;
    }
}

if ($name !== "") {
    $updateData['Name'] = $name;
}

if ($email !== "") {
    $isExist = $db->isExist('customer', 'Email', $email);
    $ID = $get->getCustomerID('Email', $email);

    if ($ID !== $customerID) {
        echo json_encode([
            'message' => "This email already exists....."
        ]);
        exit;
    } else {
        $updateData['Email'] = $email;
    }
}

if ($phone !== "") {
    $isExist = $db->isExist('customer', 'Phone', $phone);
    $ID = $get->getCustomerID('Phone', $phone);

    if ($isExist && $ID !== $customerID) {
        echo json_encode(['message' => "This phone already exists"]);
        exit;
    } else {
        $updateData['Phone'] = $phone;
    }
}

// if ($avatar !== "") {
//     $updateData['Avatar'] = $avatar;
// }

if ($avatar['error'] === UPLOAD_ERR_OK) {
    $uploadDir = '..assets/uploadedImages/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    $fileName = uniqid() . '_' . $_FILES['avatar']['name'];
    $targetPath = $uploadDir . $fileName;
    if (move_uploaded_file($_FILES['avatar']['tmp_name'], $targetPath)) {
        // File uploaded successfully
        $avatarUrl = 'https://cuonglt.webdevelopment.io.vn/' . $targetPath;
        $updateData['Avatar'] = $avatarUrl;
        // Send response to the front end
        echo json_encode(['success' => true, 'avatarUrl' => $avatarUrl]);
    } else {
        // Error while moving the file
        echo json_encode(['success' => false, 'error' => 'Failed to move uploaded file']);
        exit;
    }
} else {
    // Error during file upload
    echo json_encode(['success' => false, 'error' => 'File upload error']);
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
