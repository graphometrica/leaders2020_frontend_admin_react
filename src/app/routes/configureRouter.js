import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'
import routes from './routes'

import {DemoPage} from '@domain/Demo/pages/DemoPage'

const routesContent = {
    'DemoPage': DemoPage
}

const configureRouter = () => {
    const router = createRouter(routes, {
        defaultRoute: 'DemoPage'
    })

    router.usePlugin(loggerPlugin)
    router.usePlugin(browserPlugin({
        useHash: true
    }))

    router.start();

    return router
}

export {configureRouter, routesContent}
