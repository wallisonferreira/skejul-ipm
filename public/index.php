<?php

require '../vendor/autoload.php';

use Dotenv\Dotenv;
use App\Router;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../config');
$dotenv->load();

Router::route();