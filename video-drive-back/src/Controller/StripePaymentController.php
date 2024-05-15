<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Stripe\Stripe;
class StripePaymentController extends AbstractController
{
    /**
     * Crée une session de paiement Stripe et renvoie l'ID de la session.
     *
     * @param Request $request La requête HTTP. Le corps de la requête doit être un JSON qui représente le panier.
     * @return JsonResponse Une réponse JSON contenant l'ID de la session de paiement Stripe.
     *
     * @Route('/create_payment', name: 'app_create_payment',methods: ['POST'])
     */
    #[Route('/create_payment', name: 'app_create_payment',methods: ['POST'])]
    public function index(Request $request): JsonResponse
    {

        $data = json_decode($request->getContent(), true);
        Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']);
        $transformedItems = array_map(function($item){
            return array(
                "price_data" => array(
                    "currency" => "eur",
                    "product_data" => array(
                        "name" => $item['name'],
                        'description' => $item['description'],
                        'images' => ['https://i.imgur.com/EHyR2nP.png']
                    ),
                    "unit_amount" =>  $item['price'] * 100,
                ),
                "quantity" => 1,
            );
        },$data);

        try {
            $session = \Stripe\Checkout\Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [$transformedItems],
                'mode' => 'payment',
                'success_url' => 'http://localhost:5173/' . '?status=success',
                'cancel_url' => 'http://localhost:5173/' . '?status=cancel',

            ]);
        }catch (\Exception $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }

        return $this->json([
            'data' => $session->id
        ]);
    }
}
