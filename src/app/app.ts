import express from 'express'
import { V1Router } from './router'
import { API_BASE_URL} from '../constant'

export const CreateServer = async (): Promise<express.Application> => {
    
    const app: express.Application = express();

  app.use(`${API_BASE_URL}`, V1Router)
    
    app.listen(4000, () => {
        console.log(`[App]: Listenng on port ${4000}`)
    })
    return app
}

