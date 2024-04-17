<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

const _HOST = '103.255.237.2';
const _DB = 'webdevel_cuonglt';
const _USER = 'webdevel_cuonglt';
const _PASS = 'a,1Tz[9]5tE;';

// const _HOST = 'localhost';
// const _DB = 'pokemall';
// const _USER = 'root';
// const _PASS = '';

// $rootURL = 'http://localhost/pokemall/';
// $rootURL = 'https://cuonglt.webdevelopment.io.vn/';

class Database
{
    public $connection;

    // public $rootURL = 'https://cuonglt.webdevelopment.io.vn/';
    public function rootURL()
    {
        $rootLocal = 'http://localhost/pokemall/';
        $rootOnline = 'https://cuonglt.webdevelopment.io.vn/backend/';
        return  $rootOnline;
    }

    public function __construct()
    {
        try {
            if (class_exists('PDO')) {

                $dsn = 'mysql:host=' . _HOST . ';dbname=' . _DB;

                $options = [
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                ];

                $this->connection = new PDO($dsn, _USER, _PASS, $options);
            } else {
                echo 'PDO is not installed';
            }
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }
    }

    private function getDataType($value)
    {
        if (is_int($value)) {
            return PDO::PARAM_INT; // Integer data type
        } elseif (is_bool($value)) {
            return PDO::PARAM_BOOL; // Boolean data type
        } elseif (is_null($value)) {
            return PDO::PARAM_NULL; // Null data type
        } else {
            return PDO::PARAM_STR; // String data type (default)
        }
    }
    public function query($sql)
    {
        return $this->connection->query($sql);
    }

    public function insert($table, $data)
    {
        $columns = implode(', ', array_keys($data));
        $placeholders = implode(', ', array_fill(0, count($data), '?'));

        // Construct the SQL query with placeholders
        $sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";

        // Prepare the SQL statement
        $statement = $this->connection->prepare($sql);

        // Bind parameters
        $i = 1;
        foreach ($data as $key => $value) {
            // Bind the parameter using the appropriate data type
            $statement->bindValue($i++, $value, $this->getDataType($value));
        }

        // Execute the prepared statement
        return $statement->execute();
    }

    public function update($table, $data, $condition)
    {
        $setClause = '';
        $updateData = [];

        foreach ($data as $key => $value) {
            $setClause .= "$key = ?, ";
            $updateData[] = $value; // Collect values for binding
        }
        $setClause = rtrim($setClause, ', ');

        $whereClause = implode(' AND ', array_map(function ($key) {
            return "$key = ?";
        }, array_keys($condition)));

        $sql = "UPDATE $table SET $setClause WHERE $whereClause";
        $statement = $this->connection->prepare($sql);

        // Combine data for binding
        $bindData = array_merge(array_values($data), array_values($condition));

        // Bind parameters
        foreach ($bindData as $index => $value) {
            // Determine the data type and bind the parameter
            $statement->bindValue($index + 1, $value, $this->getDataType($value));
        }

        return $statement->execute();
    }


    public function delete($table, $condition)
    {
        $sql = "DELETE FROM $table WHERE $condition";
        return $this->connection->exec($sql);
    }

    public function isExist($table, $field, $value)
    {
        $sql = "SELECT COUNT(*) FROM $table WHERE $field = ?";
        $statement = $this->connection->prepare($sql);
        $statement->execute([$value]);
        $count = $statement->fetchColumn();

        return $count > 0;
    }

    public function lastInsertId()
    {
        return $this->connection->lastInsertId();
    }

    public function prepare($sql)
    {
        return $this->connection->prepare($sql);
    }
}
