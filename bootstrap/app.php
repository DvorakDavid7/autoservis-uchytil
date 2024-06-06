<?php

use App\Controllers\StaticContentController;
use Slim\Factory\AppFactory;


$controller = new StaticContentController();

$app = AppFactory::create();

$app->get('/', function ($request, $response, $args) {
    $response->getBody()->write('home response');
    return $response;
});

$app->get('/api', function ($request, $response, $args) {
    $response->getBody()->write('api response');
    return $response;
});

$app->run();
