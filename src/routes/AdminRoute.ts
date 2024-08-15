import express, { Request, Response, NextFunction } from 'express'
import { CreateVandor, GetVandorByID, GetVandors } from '../controllers'

const router = express.Router()

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json({ message: 'Hello from  Admin' })
// })

router.post('/vendor', CreateVandor)

router.get('/vendors', GetVandors)
router.get('/vendor/:id', GetVandorByID)

export { router as AdminRoute }
