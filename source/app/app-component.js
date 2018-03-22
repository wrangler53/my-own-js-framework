import { MainComponent } from "../WranglerJS/main";

class AppComponent extends MainComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'root',
    template: `
        <div>
            <h4>Component works</h4>
            <h4>Component works 11</h4>
        </div>
    `
})