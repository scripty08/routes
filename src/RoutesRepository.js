import { ROUTES_RESPONSE } from './Constants';
import { BaseRepository } from './BaseRepository';

export class RoutesRepository extends BaseRepository{

    constructor(requestSchema, db, collection) {
        super(requestSchema, db, collection);
    }

    async findRoutes(query, presenter) {
        const response = await this.model.find(query);
        await presenter.present({ code: ROUTES_RESPONSE, response })
    };
}
