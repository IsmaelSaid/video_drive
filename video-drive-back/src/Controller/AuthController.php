<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class AuthController extends AbstractController
{
    #[Route('/auth', name: 'app_auth',methods: ['POST'])]
    public function index(Request $request,EntityManagerInterface $em,UserPasswordHasherInterface $userPasswordHasher): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'];
        $password = $data['password'];

        if (!$email || !$password){
            return new JsonResponse(['error' => 'Invalid request'], 400);
        }

        try {
        $user = new User();
        $user->setEmail($email);
        $user->setPassword($password);
        $user->setRoles(['ROLE_USER']);
        $hashedPassword = $userPasswordHasher->hashPassword($user,$password);
        $user->setPassword($hashedPassword);
        $em->persist($user);
        $em->flush();

        }catch (\Exception $e){
            return new JsonResponse(['error' => 'Something went wrong'], 500);
        }

        return new JsonResponse(['message' => 'User created'], 201);
    }

}
