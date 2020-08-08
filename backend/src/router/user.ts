import { Router } from 'express'
const router = Router();
import { getUsers, getUser, changeRole } from "../controllers/user.controller";

router.route('/users').get(getUsers);

router.route('/user/:id')
    .get(getUser)
    .put(changeRole);
 
export default router;
    
    