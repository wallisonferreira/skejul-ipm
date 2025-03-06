<?php

require 'vendor/autoload.php';

use Dotenv\Dotenv;

dotenv::createImmutable(__DIR__)->load();

class Database {
    protected static $db;

    private function __construct() {
        $driver = "mysql";
        $host = "localhost";
        $dbname = "skejul_ipm_database";
        $username = "root";

        #$dsn_1 = "mysql:dbname=testdb;host=127.0.0.1";
        $dsn = "$driver:dbname=$dbname; host=$host";

        try {
            self::$db = new PDO($dsn, $username, $username);
            self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            self::$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public static function getConnection() {
        if (!self::$db) {
            new Database();
        }

        return self::$db;
    }
}