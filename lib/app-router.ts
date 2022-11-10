import { Request, Response } from "express";
import { HomeController } from './controllers/Home.Controller';
export class Routes {

    public homeController: HomeController = new HomeController();
    public routes(app): void {
        app.route('/api/Home').get((req: Request, res: Response) => {
            this.homeController.Index().then((response) => {
                try {
                    res.status(200).send(response);
                } catch (error) {
                    res.status(500).send(error);
                }
            });
        });
        app.route('/api/Home/list').get((req: Request, res: Response) => {
            this.homeController.listWord().then((response) => {
                try {
                    res.status(200).send(response);
                } catch (error) {
                    res.status(500).send(error);
                }
            });
        });
    }
}