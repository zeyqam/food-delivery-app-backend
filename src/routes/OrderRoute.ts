import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import OrderController from "../controllers/OrderController";
import bodyParser from "body-parser";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);

router.post(
  "/checkout/webhook",
  bodyParser.raw({ type: "application/json" }),
  OrderController.stripeWebhookHandler
);

export default router;
