<?php
namespace App;

use App\Controllers\TaskController;

class Router {
    public static function route() {
        // Permite que o cliente faça requisições sem restrições
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_SERVER['REQUEST_URI'];
        $input = json_decode(file_get_contents("php://input"), true);

        $controller = new TaskController();
        $controller->handleRequest($method, $path, $input);
    }
}