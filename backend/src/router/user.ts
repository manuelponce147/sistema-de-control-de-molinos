import { Router } from 'express'
const router = Router();
import { getUsers, getUser, changeRole, getUsersName, getUserData, newPassword } from "../controllers/user.controller";
import { TokenValidation } from "../libs/verifyToken";

router.route('/users').get(getUsers);
router.route('/usersInfo').get(getUsersName);
router.route('/usersData').get(getUserData);
router.route('/newpass').post(newPassword);

router.route('/user/:id')
    .get(getUser)
    .put(changeRole); 
export default router;
    
    