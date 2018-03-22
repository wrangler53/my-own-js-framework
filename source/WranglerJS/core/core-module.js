import { router } from '../tools/router'
import { pageCheck } from '../tools/pageExist'

export class Module {
    constructor(config) {
        this.components = config.components
        this.rootWranglerElement = config.wrangler
        this.routes = config.routes
    }

    run() {
        this.initComponents();
        if(this.routes) this.initRoutes()
    }

    initComponents() {
        //render root component
        this.rootWranglerElement.render()
        this.components.forEach(this.renderPage.bind(this));
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }

    renderRoute() {
        // Get current hash
        let url = router.getUrl();
        let route = this.routes.find(route => route.path === url)

        if(pageCheck.isPageExist(route)) {
            route = this.routes.find(route => route.path === '**')
        }

        document.querySelector('router-page').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderPage(route.component)
    }

    renderPage(page) {
        page.render()
    }
}