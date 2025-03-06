<?php
class Router {
    private $task;

    public function __construct() {
        $this->task = new Task();
    }

    public function route($action) {
        switch ($action) {
            case 'list-tasks':
                echo json_encode($this->task->getAll());
                break;
            case 'add-task':
                echo json_encode($this->task->add($_POST['title'], $_POST['description'], $_POST['end_date']));
                break;
            case 'edit-task':
                echo json_encode($this->task->update($_POST['id'], $_POST['title'], $_POST['description'], $_POST['end_date']));
                break;
            case 'mark-done':
                echo json_encode($this->task->markAsDone($_POST['id']));
                break;
            case 'delete-task':
                echo json_encode($this->task->delete($_POST['id']));
                break;
            default:
                echo json_encode(["error" => "Invalid action"]);
        }
    }
}