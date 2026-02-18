import express from 'express'
import { loginUser,register} from '../controllers/authController.js';



const authRouter =express.Router();

authRouter.post('/register', register);

authRouter.post('/login', loginUser);



export default authRouter;
 




