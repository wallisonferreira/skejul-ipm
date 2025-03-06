<?php

require_once("../config/database/Database.php");
$con = Database::getConnection();

$action = $_REQUEST['action'];
$data = array();

if ($action === "list-tasks") {
    $query = "select id_task,
                    title, 
                    description,
                    status,
                    start_date,
                    end_date 
              from tasks";

    $stmt = $con->prepare($query);
    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        # $data[] = $row;
        $data[] = array(
            "id"          => $row["id_task"],
            "title"       => $row["title"],
            "description" => $row["description"],
            "status"      => $row["status"],
            "start_date"  => $row["start_date"],
            "end_date"    => $row["end_date"],
        );
    }
}

die(json_encode($data));
?>