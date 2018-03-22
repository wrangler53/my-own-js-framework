import { MainComponent } from "../../WranglerJS/main";

class MainPage extends MainComponent {
    constructor(config) {
        super(config)
    }
}

export const mainPage = new MainPage({
    selector: 'main-page',
    template: `<h1>Main Page</h1>`
}) 