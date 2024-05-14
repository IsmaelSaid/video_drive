<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        $products = [
            [
                'name' => 'Xbox one',
                'description' => 'Console de jeux',
                'price' => 299.99,
                'brand' => 'Microsoft',
                'category' => 'Console',
                'picture' => 'assets/xbox.png'
            ],
            [
                'name' => 'Playstation 5',
                'description' => 'Console de jeux',
                'price' => 499.99,
                'brand' => 'Sony',
                'category' => 'Console',
                'picture' => 'assets/ps5.png'
            ],
            [
                'name' => 'Nintendo Switch',
                'description' => 'Console de jeux',
                'price' => 299.99,
                'brand' => 'Nintendo',
                'category' => 'Console',
                'picture' => 'assets/switch.png'
            ],
            [
                'name' => 'FIFA 21',
                'description' => 'Jeu de foot',
                'price' => 59.99,
                'brand' => 'EA Sports',
                'category' => 'Jeu',
                'picture' => 'assets/fifa21.png'
            ],
            [
                'name' => 'Call of Duty',
                'description' => 'Jeu de guerre',
                'price' => 59.99,
                'brand' => 'Activision',
                'category' => 'Jeu',
                'picture' => 'assets/cod.png'
            ]
        ];

        foreach ($products as $productData) {
            $product = new Product();
            $product->setName($productData['name']);
            $product->setDescription($productData['description']);
            $product->setPrice($productData['price']);
            $product->setBrand($productData['brand']);
            $product->setCategory($productData['category']);
            $product->setPicture($productData['picture']);
            $manager->persist($product);

        }

        $manager->flush();

    }
}
