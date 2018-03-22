export class Component {
    constructor(config) {
        this.template = config.template,
        this.selector = config.selector
    }

    // Get template from app-component and render it
    render() {
        document.querySelector(this.selector).innerHTML = this.template
    }
}