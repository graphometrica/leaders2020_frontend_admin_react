import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'
import routes from './routes'

import {DemoPage} from '@domain/Demo/pages/DemoPage'
import {AnimalCardsPage} from '@domain/Animal/pages/AnimalCardsPage'

const routesContent = {
    'DemoPage': DemoPage,
    'AnimalCardsPage': AnimalCardsPage,
}

const configureRouter = () => {
    const router = createRouter(routes, {
        defaultRoute: 'AnimalCardsPage'
    })

    router.usePlugin(loggerPlugin)
    router.usePlugin(browserPlugin({
        useHash: true
    }))

    router.start();

    return router
}

export {configureRouter, routesContent}
