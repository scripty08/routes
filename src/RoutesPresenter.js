import { ROUTES_RESPONSE } from './Constants';

export class RoutesPresenter {
    constructor(response) {
        this.response = response;
    }

    async present(interactorResponse) {
        const code = interactorResponse.code;
        const response = interactorResponse.response;

        let router = {};
        response.forEach((rec) => {
            router[rec.title] = rec.routes;
        });

        switch (code) {
            case ROUTES_RESPONSE:
                this.response.send({
                    entries: [router]
                });
                break;
        }
    };
}
