<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Product;

class ProductsController extends AbstractController
{
    #[Route('/products', name: 'app_products',methods: ['GET'])]
    public function index(EntityManagerInterface $em): JsonResponse
    {
        $AllProducts = $em->getRepository(Product::class)->findAll();
        return $this->json([
            'data' =>$AllProducts,
        ], 200); // Explicitly specify the status code
    }
}