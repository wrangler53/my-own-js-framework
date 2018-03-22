import { MainComponent } from '../../WranglerJS/main'

class AppHeader extends MainComponent {
    constructor(config) {
        super(config)
    }
}

export const header = new AppHeader({
    selector: 'app-header',
    template: `
        <header class="header">
            <nav class="navigation">
                <ul class="menu">
                    <li class="menu__item">
                        <a href="#" class="menu__link">Main</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link">Contacts</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    `
})