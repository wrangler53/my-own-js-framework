import { MainComponent } from "../../WranglerJS/main";

class ContactPage extends MainComponent {
    constructor(config) {
        super(config)
    }
}

export const contactPage = new ContactPage({
    selector: 'contact-page',
    template: `<h1>Contact us page</h1>`
}) 