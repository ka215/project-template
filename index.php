<?php

define( 'PROJECT_ROOT', dirname(__FILE__) );
define( 'PROJECT_URL', sprintf( '//%s/%s/', $_SERVER['HTTP_HOST'], basename(PROJECT_ROOT) ) );

$environment = file_exists( PROJECT_ROOT . '/assets/assets.json' ) ? 'production' : 'development';
define( 'ENV', $environment );

require_once( 'lib/functions.php' );
require_once( 'templates/sample.php');
