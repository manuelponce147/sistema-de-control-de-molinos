import { Router } from 'express'
const router = Router();

import { getPesajes, createPesaje ,getPesaje ,updatePesaje, deletePesaje} from '../controllers/pesaje.controller';


// middleware
// router.use(upload.single('image'));

// routes
router.route('/pesajes')
    .get(getPesajes)
    .post(createPesaje);

router.route('/pesaje/:id')
    .get(getPesaje)
    .put(updatePesaje)
    .delete(deletePesaje);

export default router;