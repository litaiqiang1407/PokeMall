<?php

// Connect information
const _HOST = 'localhost';
const _DB = 'kunkun';
const _USER = 'root';
const _PASS = '';


try {
  if (class_exists('PDO')) {

    $dsn = 'mysql:host=' . _HOST . ';dbname=' . _DB;

    $options = [
      PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ];

    $conn = new PDO($dsn, _USER, _PASS);
  } else {
    echo 'PDO is not installed';
  }
} catch (PDOException $e) {
  echo 'Connection failed: ' . $e->getMessage();
}
