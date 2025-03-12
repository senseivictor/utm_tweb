<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$file = 'users.json';
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username']) || !isset($data['password'])) {
    echo json_encode(["error" => "Missing username or password"]);
    exit;
}

if (!file_exists($file)) {
    echo json_encode(["error" => "No users found"]);
    exit;
}

$users = json_decode(file_get_contents($file), true);

foreach ($users as $user) {
    if ($user['username'] === $data['username'] && password_verify($data['password'], $user['password'])) {
        echo json_encode(["message" => "Login successful"]);
        exit;
    }
}

echo json_encode(["error" => "Invalid username or password"]);
?>
