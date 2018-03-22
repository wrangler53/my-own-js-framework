import { MainModule } from "../WranglerJS/main";
import { appComponent } from "./app-component";

class AppModule extends MainModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
})