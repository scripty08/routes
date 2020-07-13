import { RoutesRepository } from './RoutesRepository';
import { RoutesPresenter } from './RoutesPresenter';
import { RoutesSchema } from './RoutesModel';

export class RoutesController {

    static collection = 'routes'

    init(server, router) {
        this.db = server.db;
        router.get('/routes/findRoutes', this.findRoutesAction.bind(this));
        server.use(router);
    }

    findRoutesAction(req, res) {
        const presenter = new RoutesPresenter(res);
        const repository = new RoutesRepository(RoutesSchema, this.db, RoutesController.collection);
        return repository.findRoutes(req.query, presenter);
    };
}
