<?php

// Connect information
const _HOST = 'localhost';
const _DB = 'kunkun';
const _USER = 'root';
const _PASS = '';


try {
  if (class_exists('PDO')) {
    $options =[::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'];
    $conn = new PDO('mysql:host=' . _HOST . ';dbname=' . _DB, _USER, _PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } else {
    echo 'PDO is not installed';
  }
} catch (PDOException $e) {
  echo 'Connection failed: ' . $e->getMessage();
}
