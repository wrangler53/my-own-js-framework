import { MainComponent } from "../WranglerJS/main";

class AppComponent extends MainComponent {
    constructor(config) {
        super(config)
    }
}

// Template of all app
export const rootComponent = new AppComponent({
    selector: 'root',
    template: `
        <app-header></app-header>
        <div>
            <h4>Component works</h4>
            <h4>Component works 11</h4>
        </div>
    `
})