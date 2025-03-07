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
            // GET tasks
            echo json_encode($this->task->getAll());
        } elseif ($path === '/tasks' && $method === 'POST') {
            // POST tasks
            echo json_encode($this->task->add($input['title'], $input['description'], $input['end_date']));
        } elseif (preg_match('/\/tasks\/(\d+)/', $path, $matches)) {
            $id = $matches[1];
            if ($method === 'PUT') {
                // PUT tasks
                echo json_encode($this->task->update($id, $input['title'], $input['description'], $input['end_date'], $input['status']));
            } elseif ($method === 'GET') {
                    // GET tasks
                    echo json_encode($this->task->getOne($id));
            } elseif ($method === 'PATCH') {
                // PATCH tasks
                echo json_encode($this->task->markAsDone($id));
            } elseif ($method === 'DELETE') {
                // DELETE tasks
                echo json_encode($this->task->delete($id));
            } else {
                echo json_encode(["error" => "Invalid request method"]);
            }
        } else {
            echo json_encode(["error" => "Route not found"]);
        }
    }
}
