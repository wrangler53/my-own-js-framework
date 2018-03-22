export class Component {
    constructor(config) {
        this.template = config.template,
        this.selector = config.selector,
        this.element = null
    }

    // Get template from app-component and render it
    render() {
        this.element = document.querySelector(this.selector)
        // Error handling if component in html is not found
        if(!this.element) throw new Error(`Component with selector ${this.selector} is not found`)
        this.element.innerHTML = this.template
    }
}