import { MainComponent } from "../../WranglerJS/main";

class AboutPage extends MainComponent {
    constructor(config) {
        super(config)
    }
}

export const aboutPage = new AboutPage({
    selector: 'about-page',
    template: `<h1>About us page</h1>`
}) 