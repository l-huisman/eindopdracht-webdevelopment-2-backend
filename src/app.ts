import express from 'express';
import routes from './routes';
import cors from 'cors';


class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.server.use(express.json());
        this.server.use(cors(
            {
                origin: '*',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                preflightContinue: false,
                optionsSuccessStatus: 204
            }
        ));
    }

    private routes(): void {
        this.server.use(routes);
    }

}

export default new App().server;