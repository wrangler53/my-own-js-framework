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
        <router-page></router-page>
    `
})