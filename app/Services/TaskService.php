<?php
namespace App\Services;

use App\Core\Database;
use PDO;

class TaskService {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function getAll() {
        $stmt = $this->db->query("SELECT * FROM tasks");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getOne($id) {
        $stmt = $this->db->prepare("SELECT * FROM tasks WHERE id_task = ? LIMIT 1");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function add($title, $description, $end_date) {
        $stmt = $this->db->prepare("INSERT INTO tasks (title, description, end_date) VALUES (?, ?, ?)");
        return $stmt->execute([$title, $description, $end_date]);
    }

    public function update($id, $title, $description, $end_date, $status) {
        $stmt = $this->db->prepare("UPDATE tasks SET title=?, description=?, end_date=?, status=? WHERE id_task=?");
        return $stmt->execute([$title, $description, $end_date, $status, $id]);
    }

    public function markAsDone($id) {
        $stmt = $this->db->prepare("UPDATE tasks SET status='done' WHERE id_task=?");
        return $stmt->execute([$id]);
    }

    public function delete($id) {
        $stmt = $this->db->prepare("DELETE FROM tasks WHERE id_task=?");
        return $stmt->execute([$id]);
    }
}
