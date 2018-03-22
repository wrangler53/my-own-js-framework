import { MainComponent } from "../../WranglerJS/main";

class ErrorPage extends MainComponent {
    constructor(config) {
        super(config)
    }
}

export const errorPage = new ErrorPage({
    selector: 'about-page',
    template: `<h1><i> Error 404. Page not found :( </i></h1>`
}) 