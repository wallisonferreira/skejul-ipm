<?php
namespace App;

use App\Controllers\TaskController;

class Router {
    public static function route() {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_SERVER['REQUEST_URI'];
        $input = json_decode(file_get_contents("php://input"), true);

        $controller = new TaskController();
        $controller->handleRequest($method, $path, $input);
    }
}