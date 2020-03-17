import BaseRoutes from '../routes/BaseRouter';

//Import Controller
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes{
    public routes(): void{
        this.router.get('/', AuthController.index);
        this.router.post('/', AuthController.create);
    }
}

export default new AuthRoutes().router;