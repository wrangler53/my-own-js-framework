import { MainModule } from "../WranglerJS/main";
import { rootComponent } from "./app-component";
import { header } from "./components/header";
import { appRoutes } from "./app-routes"

class AppModule extends MainModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        header
    ],
    wrangler: rootComponent,
    routes: appRoutes
})