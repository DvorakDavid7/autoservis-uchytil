<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class StaticContentController
{

    public function __construct()
    {
    }

    public function serve(Request $request, Response $response, $args): Response
    {
        $filePath = __DIR__ . '/../public_html/index.html';
        $response->getBody()->write(file_get_contents($filePath));
        return $response->withHeader('Content-Type', 'text/html');
    }
}
