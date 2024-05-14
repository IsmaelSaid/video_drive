<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $product1 = new Product();
        $product1->setName('Xbox one');
        $product1->setDescription('Console de jeux');
        $product1->setPrice('299.99');
        $product1->setBrand('Microsoft');
        $product1->setCategory('Console');
        $product1->setPicture('assets/xbox.png'); // Add the path to the picture         $product = new Product();

        $product2 = new Product();
        $product2->setName('Playstation 5');
        $product2->setDescription('Console de jeux');
        $product2->setPrice('499.99');
        $product2->setBrand('Sony');
        $product2->setCategory('Console');
        $product2->setPicture('assets/ps5.png'); // Add the path to the picture


        $manager->persist($product1);
        $manager->persist($product2);

        $manager->flush();

    }
}
