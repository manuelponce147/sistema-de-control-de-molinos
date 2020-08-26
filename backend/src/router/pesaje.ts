import { Router } from 'express'
const router = Router();
import { TokenValidation } from "../libs/verifyToken";

import { getPesajes, createPesaje ,getPesaje ,updatePesaje, deletePesaje} from '../controllers/pesaje.controller';


// middleware

// routes
router.route('/pesajes')
    .get(TokenValidation,getPesajes)
    .post(createPesaje);

router.route('/pesaje/:id')
    .get(getPesaje)
    .put(updatePesaje)
    .delete(deletePesaje);

export default router;