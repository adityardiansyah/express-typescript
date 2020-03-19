import BaseRoutes from '../routes/BaseRouter';

//Import Controller
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes{
    public routes(): void{
        this.router.post('/', AuthController.register);
        this.router.post('/', AuthController.login);
    }
}

export default new AuthRoutes().router;