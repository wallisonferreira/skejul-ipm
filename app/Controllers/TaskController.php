<?php
namespace App\Controllers;

use App\Services\TaskService;

class TaskController {
    private $task;

    public function __construct() {
        $this->task = new TaskService();
    }

    public function handleRequest($method, $path, $input = null) {
        if ($path === '/tasks' && $method === 'GET') {
            echo json_encode($this->task->getAll());
        } elseif ($path === '/tasks' && $method === 'POST') {
            echo json_encode($this->task->add($input['title'], $input['description'], $input['end_date']));
        } elseif (preg_match('/\/tasks\/(\d+)/', $path, $matches)) {
            $id = $matches[1];
            if ($method === 'PUT') {
                echo json_encode($this->task->update($id, $input['title'], $input['description'], $input['end_date']));
            } elseif ($method === 'PATCH') {
                echo json_encode($this->task->markAsDone($id));
            } elseif ($method === 'DELETE') {
                echo json_encode($this->task->delete($id));
            } else {
                echo json_encode(["error" => "Invalid request method"]);
            }
        } else {
            echo json_encode(["error" => "Route not found"]);
        }
    }
}
