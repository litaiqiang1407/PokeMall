<?php

$servername = "localhost";
$username = "kunkun";
$password = "";
$database = "pokemall";

try {
  // Tạo kết nối đến cơ sở dữ liệu
  $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

  // Thiết lập chế độ lỗi để PDO ném ra ngoại lệ khi có lỗi SQL
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Thiết lập kiểu dữ liệu kết quả trả về là mảng kết hợp (associative array)
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

  echo "Kết nối đến cơ sở dữ liệu thành công!";
} catch (PDOException $e) {
  // Nếu có lỗi xảy ra, in ra thông báo lỗi
  echo "Lỗi kết nối đến cơ sở dữ liệu: " . $e->getMessage();
}
