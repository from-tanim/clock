<?php
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP
$dbname = "qrCodeDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO qrcodes (idNo, name, fatherName, motherName, dob, bloodGroup) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $idNo, $name, $fatherName, $motherName, $dob, $bloodGroup);

// Get data from the request
$idNo = $_POST['idNo'];
$name = $_POST['name'];
$fatherName = $_POST['fatherName'];
$motherName = $_POST['motherName'];
$dob = $_POST['dob'];
$bloodGroup = $_POST['bloodGroup'];

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(["message" => "Data saved successfully!"]);
} else {
    echo json_encode(["message" => "Error saving data: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
