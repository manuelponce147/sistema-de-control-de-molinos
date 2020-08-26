import { Router } from 'express'
const router = Router();

import { getSilos, createSilo, getSilo, updateSilo, deleteSilo } from "../controllers/silo.controller";

//routes

router.route('/silos')
    .get(getSilos)
    .post(createSilo);

router.route('/silos/:id')
    .get(getSilo)
    .put(updateSilo)
    .delete(deleteSilo);
export default router;    