import { MainModule } from "../WranglerJS/main";
import { rootComponent } from "./app-component";
import { header } from "./components/header";

class AppModule extends MainModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        rootComponent,
        header
    ]
})