<?php

return [
	'supports_credentials' => true,  // Fondamentale per i cookie
	'allowed_origins' => ['http://localhost:8000'],  // React frontend URL
	'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization'],
	'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE'],
	'allowed_origins_patterns' => [],
	'allowed_credentials' => true, // Abilita i cookie
];
