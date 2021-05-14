import express from 'express'
import { V1Router } from './router'
import { API_BASE_URL} from '../../constant'

import swaggerConfig from '../../middlewares/documentation/swagger.json'
import swaggerUi from 'swagger-ui-express'

export const createServer = async (): Promise<express.Application> => {

    const app: express.Application = express();

    app.use(express.json());

    app.use(`${API_BASE_URL}`, V1Router);

    app.use(`${API_BASE_URL}documentation`, swaggerUi.serve, swaggerUi.setup(swaggerConfig));
    
    app.listen(4000, () => {
        console.log(`[App]: Listenng on port ${4000}`)
    })
    return app
}
