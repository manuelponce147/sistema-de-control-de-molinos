import { Router } from 'express'
const router = Router();
import { TokenValidation } from "../libs/verifyToken";
import { signin,signup} from "../controllers/auth.controller";

router.route('/signup').post(signup);
router.route('/signin').post(signin);
//router.route('/profile').post(TokenValidationprofile);
 
export default router;
    
    
    