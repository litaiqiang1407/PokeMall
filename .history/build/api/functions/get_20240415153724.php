<?php

require_once '../dbInteraction/interaction.php';

// Database connection
$db = new Database();

class Get
{
    public function getSizeID($sizeName)
    {
        global $db;

        $sql = "SELECT ID FROM sizes WHERE SizeName = '$sizeName'";

        $sizeID = $db->query($sql)->fetchColumn();

        return $sizeID;
    }

    public function getSizes()
    {
        global $db;

        $sql = "SELECT ID, SizeName
                FROM sizes             
                ORDER BY ID ASC
                ";

        $sizes = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

        return $sizes;
    }
}
