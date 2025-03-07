<?php

require '../vendor/autoload.php';

use Dotenv\Dotenv;
use App\Router;

$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

Router::route();