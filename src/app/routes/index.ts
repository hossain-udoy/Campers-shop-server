import {Router} from 'express'

const router = Router()

const moduleRoutes = [
    {
        path: '/',
        route: 'dis'
    }
] 

// moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router 