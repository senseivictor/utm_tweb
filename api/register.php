<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$file = 'users.json';
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username']) || !isset($data['password'])) {
    echo json_encode(["error" => "Missing username or password"]);
    exit;
}

$users = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

foreach ($users as $user) {
    if ($user['username'] === $data['username']) {
        echo json_encode(["error" => "Username already exists"]);
        exit;
    }
}

$data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
$users[] = $data;
file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

echo json_encode(["message" => "User registered successfully"]);
?>
