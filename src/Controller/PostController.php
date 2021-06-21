<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class PostController extends AbstractController
{
	public function index($id): Response
	{
		echo '<pre>';
		var_dump($id);
		echo '</pre>';
		exit;
		return $this->render('post.html.twig');
	}
}
