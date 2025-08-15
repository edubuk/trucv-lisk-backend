import { Router } from "express";
import { createCv, getAllCvIds, getCv,verifyDoc } from "../controllers/cv.controller";
import { checkCvSubmittedStatus, checkout, couponVerification, paymentVerification, updateCvSubmittedStatus } from "../controllers/payment.controller";

const router = Router();

router.post("/create", createCv);
router.get("/getCv/:id", getCv);
router.get("/getCvIds/:email",getAllCvIds)
router.get("/verifyDoc/:pinataHash/:field/:subfield/:nanoId",verifyDoc);
router.put("/verifyDoc/:pinataHash/:field/:subfield/:nanoId", verifyDoc);
router.get("/coupon_verify/:couponCode",couponVerification);
router.post("/checkout",checkout);
router.post("/payment_verification",paymentVerification);
router.get("/check_cv_status/:paymentId",checkCvSubmittedStatus);
router.put("/update_cv_status",updateCvSubmittedStatus);

export default router;
