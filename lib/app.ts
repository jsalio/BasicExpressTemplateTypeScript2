import express from "express";
import * as bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { Routes } from "./app-router";

class App {

    public app: express.Application;
    public appRoutes: Routes = new Routes();
    /**
     *
     */
    constructor() {
        this.app = express();
        this.config();
        this.appRoutes.routes(this.app);
    }

    private config(): void {
        this.app.use(express.static('public'));
        this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(
            undefined,
            {
                swaggerOptions: {
                    url: "/swagger.json",
                }
            }
        ));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;