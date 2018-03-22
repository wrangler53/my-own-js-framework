import { mainPage } from './pages/main'
import { contactPage } from './pages/contact'
import { aboutPage } from './pages/about'
import { errorPage } from './pages/404'

export const appRoutes = [
    { 
        path: '',
        component: mainPage
    },
    { 
        path: 'contact',
        component: contactPage
    },
    { 
        path: 'about',
        component: aboutPage
    },
    // if random hash
    { 
        path: '**',
        component: errorPage
    }
]