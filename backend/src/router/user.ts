import { Router } from 'express'
const router = Router();
import { getUsers, getUser, changeRole, getUsersName, getUserData } from "../controllers/user.controller";

router.route('/users').get(getUsers);
router.route('/usersInfo').get(getUsersName);
router.route('/usersData').get(getUserData);


router.route('/user/:id')
    .get(getUser)
    .put(changeRole);
 
export default router;
    
    