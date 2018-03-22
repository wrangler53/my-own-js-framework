export class Module {
    constructor(config) {
        this.components = config.components
    }

    run() {
        this.initComponents();
    }

    initComponents() {
        this.components.forEach(element => {
            element.render();
        });
    }
}