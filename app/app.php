<?php

use App\Controllers\StaticContentController;
use Slim\Factory\AppFactory;


$app = AppFactory::create();

$app->get('/', [new StaticContentController, 'serve']);

$app->get('/api', function ($request, $response, $args) {
    $response->getBody()->write('api response');
    return $response;
});

$app->run();
